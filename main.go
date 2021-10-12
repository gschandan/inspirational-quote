package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"strconv"

	"github.com/gorilla/mux"
	_ "github.com/mattn/go-sqlite3"
)

//Quote Structure
type Quote struct {
	ID		string	`json:"id"`
	Text	string `json:"text"`
	Author	string	`json:"author"`
}

var database *sql.DB
var dbCount int

//Get Quote By ID - Currently only used for testing
func getQuoteByID(res http.ResponseWriter, req *http.Request){

	res.Header().Set("Content-Type","application/json")
	params := mux.Vars(req)
	id,idErr := strconv.Atoi(params["id"])

	checkErrors(idErr)

	if id < 0 || id > dbCount || idErr != nil {
		json.NewEncoder(res).Encode("Invalid ID submitted")
	} else{
		row:=database.QueryRow("SELECT * FROM quotes WHERE id = (?)", id)
		var quote Quote
		row.Scan(&quote.ID, &quote.Text, &quote.Author)
		json.NewEncoder(res).Encode(quote)
	}
	return
}


//Get Random Quote
func getRandomQuote(res http.ResponseWriter, req *http.Request){
	res.Header().Set("Content-Type","application/json")

}

//Add a Quote
func addQuote(res http.ResponseWriter, req *http.Request){
	
}

func checkErrors(err error){
	if err != nil {
		fmt.Println(err)
	}
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
	rows,err := database.Query("SELECT COUNT(*) FROM quotes")
	checkErrors(err)
	for rows.Next() {   
		if err := rows.Scan(&dbCount); err != nil {
			log.Fatal(err)
		}
	}

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
	router.HandleFunc("/api/quote/{id}", getQuoteByID).Methods("GET")
	router.HandleFunc("/api/random", getRandomQuote).Methods("GET")
	router.HandleFunc("/api/add", addQuote).Methods("POST")
	http.Handle("/", router)

	log.Print(" Server running on port 4001")
	log.Fatal(http.ListenAndServe(":4001", router))
}