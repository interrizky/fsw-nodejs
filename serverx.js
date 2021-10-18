const express = require('express')
const app = express()
const port = 9700

/* body-parser deprecated */
// const bodyParser = require('body-parser');

//Body Parser things - deprecated
// app.use(bodyParser.urlencoded( {extended: true} ))
// app.use(bodyParser.json())

/* As A Replacement of not using bodyParser */
app.use(express.urlencoded( {extended: true} ))
app.use(express.json())


//Reading CSS Folders & Files in Public Folder
app.set('views', './views') // specify the views directory
app.set('view engine', 'ejs') // register the template engine
app.use(express.static('public'))

app.listen(port, () => { console.log(`Server is running in port ${ port }`) })

// //Routing OMDB
// app.get('/', function(require, response) {
//   response.render('apix')
// })
// app.get('/apix-ejs', function(require, response) {
//   response.render('detail')
// })
// //Routing Flower
// app.get('/flower', function(require, response) {
//   response.render('apix_flower')
// })
// app.get('/flower-ejs', function(require, response) {
//   response.render('detail_flower')
// })
// //Routing iTunes
// app.get('/itunes', function(require, response) {
//   response.render('itunesx')
// })

//Routes Connection - MongoDB
const connMongoDB = require('./routes/connection')
connMongoDB();

//Router
const Router = require('./routes/routes')
app.use(Router);