
# Epigram

An inspirational quote displaying application, with the ability to fetch a random quote, and add a quote to the local database.




## Run Locally

Clone the project

```bash
  git clone https://github.com/gschandan/inspirational-quote.git
```

### Start the frontend
Go to the project directory

```bash
  cd inspirational-quote/frontend
```

Install dependencies

```bash
  npm install
```

Start the frontend

```bash
  npm run start
```

### Start the server
In another terminal instance, navigate to the main project directory

```bash
  go run .
```


  
## API Reference

Currently API requests are proxied by CRA (see package.json in /frontend) to http://localhost:4001
If the port is changed in the server code, this will also need to be modified to reflect that.

#### Get A Specific Quote

```http
  GET /api/quote{id}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**. Row of the specified quote in the DB |

#### Get Random quote

```http
  GET /api/random
```
This will return a pseudo-random quote.

#### Add a Quote

```http
  POST /api/add
```
Send the request with `Content-Type` = `application/json` header.

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `quote` | `string` | **Required**. Text body of the quote |
| `author` | `string` | **Required**. Author |
## Roadmap

- Generate tag cloud based on word frequencies

- Retrieve quotes by tags (most relevant)

- Add delete and update routes



  
## Screenshots

![App Screenshot](https://github.com/gschandan/inspirational-quote/blob/main/images/homepage_.png?raw=true)

  
