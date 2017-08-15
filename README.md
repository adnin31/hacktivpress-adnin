# hacktivpress-adnin

merupkan web blogging system sederhan dengan menggunakan framework Express JS dan data base monggodb yang di upload ke mongo atlas 

## Usage
masuk ke direktori server

`- npm install`
`- npm start`
`- nodemon app.js`

masuk ke direktori client

`- npm install`
`- npm run dev`

## REST API
list basic route

Route | HTTP | Description
----- | ---- | -----------
/api/register | POST | Register User Baru
/api/signin | POST | Sign in ke untuk mendapatkan akses token
/api/articles | GET | Get semua arikel yang ada di database
/api/articles/:id | GET | Get satu artikel untuk detail artikel
/api/article/:category | GET | Get per Kategory
/api/article/:id | DELETE | Delete artikel
/api/article/:id | PUT | Update data artikel
/api/article/:author | GET | Get berdasarkan pengarang
