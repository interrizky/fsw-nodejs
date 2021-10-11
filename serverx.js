const express = require('express')
const app = express()
const port = 9700

//Reading CSS Folders & Files in Public Folder
app.set('view engine', 'ejs')
app.use(express.static('public'))

app.listen(port, () => { console.log(`Server is running in port ${ port }`) })

//Routing OMDB
app.get('/', function(require, response) {
  response.render('apix')
})
app.get('/apix-ejs', function(require, response) {
  response.render('detail')
})
//Routing Flower
app.get('/flower', function(require, response) {
  response.render('apix_flower')
})
app.get('/flower-ejs', function(require, response) {
  response.render('detail_flower')
})
//Routing iTunes
app.get('/itunes', function(require, response) {
  response.render('itunesx')
})