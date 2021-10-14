package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"log"
	"math/rand"
	"net/http"
	"os"
	"path/filepath"
	"strconv"
	"time"

	"github.com/gorilla/mux"
	_ "github.com/mattn/go-sqlite3"
)

//Quote Structure
type Quote struct {
	ID		string	`json:"id"`
	Quote	string `json:"quote"`
	Author	string	`json:"author"`
}

type spaHandler struct {
	staticPath string
	indexPath  string
}

var database *sql.DB
var dbCount int

//Get Quote By ID - Currently only used for testing/unit tests
func getQuoteByID(res http.ResponseWriter, req *http.Request){

		responseConfig(&res, req)
	if (*req).Method == "OPTIONS" {
		return
	}
	params := mux.Vars(req)
	id,idErr := strconv.Atoi(params["id"])

	checkErrors(idErr)

	if id < 0 || id > dbCount || idErr != nil {
		json.NewEncoder(res).Encode("Invalid ID submitted")
	} else{
		row:=database.QueryRow("SELECT * FROM quotes WHERE id = (?)", id)
		var quote Quote
		err:= row.Scan(&quote.ID, &quote.Quote, &quote.Author)
		checkErrors(err)
		json.NewEncoder(res).Encode(quote)
	}
	return
}


//Get Random Quote
func getRandomQuote(res http.ResponseWriter, req *http.Request){
	responseConfig(&res, req)
	if (*req).Method == "OPTIONS" {
		return
	}
	getRows()
	id := rand.Intn(dbCount) + 1
	row:=database.QueryRow("SELECT * FROM quotes WHERE id = (?)", id)
		var quote Quote
		err:= row.Scan(&quote.ID, &quote.Quote, &quote.Author)
		checkErrors(err)
		json.NewEncoder(res).Encode(quote)
}

//Add a Quote
func addQuote(res http.ResponseWriter, req *http.Request){
	responseConfig(&res, req)
	if (*req).Method == "OPTIONS" {
		return
	}


	params := mux.Vars(req)
	fmt.Print(params)
	var quote Quote
	json.NewDecoder(req.Body).Decode(&quote)

	statement,err := database.Prepare("INSERT INTO quotes (quote, author) VALUES (?, ?)")
	checkErrors(err)
	result, err := statement.Exec(quote.Quote, quote.Author)
	checkErrors(err)
	lastID, err := result.LastInsertId()
	fmt.Println(lastID)
	val := int(lastID)
	quote.ID = strconv.Itoa(val)
	json.NewEncoder(res).Encode(quote)
	getRows()
}

func getRows(){
	//Small helper function to update number of quotes
	rows,err := database.Query("SELECT COUNT(*) FROM quotes")
	checkErrors(err)
	for rows.Next() {   
		if err := rows.Scan(&dbCount); err != nil {
			checkErrors(err)
		}
	}
}

func checkErrors(err error){
	if err != nil {
		fmt.Println(err)
	}
}

func responseConfig(res *http.ResponseWriter, req *http.Request) {
	(*res).Header().Set("Content-Type","application/json")
	(*res).Header().Set("Access-Control-Allow-Origin", "*")
    (*res).Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS")
    (*res).Header().Set("Access-Control-Allow-Headers", "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization")
}

func (h spaHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
    // From Mux documentation on serving react projects
	path, err := filepath.Abs(r.URL.Path)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	path = filepath.Join(h.staticPath, path)
	_, err = os.Stat(path)

	if os.IsNotExist(err) {
		// file does not exist, serve index.html
		http.ServeFile(w, r, filepath.Join(h.staticPath, h.indexPath))
		return
	} else if err != nil {
        // If a different error occurs, return a 500 internal server error and stop
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
    // otherwise, use http.FileServer to serve the static dir
	http.FileServer(http.Dir(h.staticPath)).ServeHTTP(w, r)
}

func main(){

	//Initialise SQLite-3 DB
	db, errOpeningDB :=sql.Open("sqlite3", "./quotes.db")
	checkErrors(errOpeningDB)
	database = db

	//Check if the local DB exists and is not empty - else create it
	statement,err := database.Prepare("CREATE TABLE IF NOT EXISTS quotes (id INTEGER PRIMARY KEY, quote TEXT, author TEXT)")
	checkErrors(err)
	statement.Exec()
	getRows()

	if dbCount <= 1 {
		statement,err = database.Prepare("INSERT INTO quotes (quote, author) VALUES (?, ?)")
		statement.Exec("Believe you can and you're halfway there","Theodore Roosevelt")
		statement.Exec("You are never too old to set another goal or to dream a new dream","C.S. Lewis")
		statement.Exec("In a gentle way, you can shake the world.","Mahatma Gandhi")
		statement.Exec("Life is like riding a bicycle. To keep your balance, you must keep moving.","Albert Einstein")
		statement.Exec("I hear and I forget. I see and I remember. I do and I understand","Confucius")
		statement.Exec("Knowing others is wisdom, knowing yourself is enlightenment","Lao Tzu")
		dbCount = 6
		fmt.Println("Added sample quotes to the quotes databse")
	}
	

	//Initialise Router
	router := mux.NewRouter()

	//Routes
	router.HandleFunc("/api/quote/{id}", getQuoteByID).Methods("GET", "OPTIONS")
	router.HandleFunc("/api/random", getRandomQuote).Methods("GET", "OPTIONS")
	router.HandleFunc("/api/add", addQuote).Methods("POST", "OPTIONS")

	spa := spaHandler{staticPath: "./frontend/build", indexPath: "index.html"}
	router.PathPrefix("/").Handler(spa)

	srv := &http.Server{
		Handler: router,
		Addr:    "https://gschandan.dev:4001",
		WriteTimeout: 15 * time.Second,
		ReadTimeout:  15 * time.Second,
	}
	log.Print(" Server running on port 4001")
	log.Fatal(srv.ListenAndServe())
	
}