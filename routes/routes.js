const express = require('express');
const routes = express.Router()

//Controller (menyambungkan dari controller ke Routes)
const flower_controller = require('../controllers/c_flower')
const omdb_controller = require('../controllers/c_omdb')
const itunes_controller = require('../controllers/c_itunes')

//Routing OMDB
// routes.get('/', function(require, response) {
//   response.render('apix')
// })
// routes.get('/apix-ejs', function(require, response) {
//   response.render('detail')
// })
routes.get('/', omdb_controller.homepage);
routes.get('/apix-ejs/:imdbID/:Title', omdb_controller.details);

//Routing Flower
// routes.get('/flower', function(require, response) {
//   response.render('apix_flower')
// })
// routes.get('/flower-ejs/:nama/:harga', function(require, response) {
//   response.render('detail_flower')
// })
routes.get('/flower', flower_controller.homepage);
routes.get('/flower-ejs/:nama', flower_controller.details);

//Routing iTunes
// routes.get('/itunes', function(require, response) {
//   response.render('itunesx')
// })
routes.get('/itunes', itunes_controller.homepage);

//Export ke Serverx.JS
module.exports = routes;