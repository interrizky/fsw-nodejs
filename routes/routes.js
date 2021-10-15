const express = require('express');
const routes = express.Router();

//Controller (menyambungkan dari controller ke Routes)
const flower_controller = require('../controllers/c_flower')
const omdb_controller = require('../controllers/c_omdb')
const itunes_controller = require('../controllers/c_itunes')
const test_controller = require('../controllers/c_test')
const user_controller = require('../controllers/c_user')

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
routes.get('/listFlowerAPI', flower_controller.list_api)

//Routing iTunes
// routes.get('/itunes', function(require, response) {
//   response.render('itunesx')
// })
routes.get('/itunes', itunes_controller.homepage);

//POST FORM-1
routes.get('/view_test', test_controller.viewing);
routes.post('/postTest', test_controller.sending);
//POST FORM-2
routes.get('/view_test_dua', test_controller.viewingdua);
routes.post('/postTestDua', test_controller.sendingdua);

//MongoDB
routes.get('/mongoCreate', user_controller.create);
routes.get('/mongoRead', user_controller.read);
routes.get('/mongoUpdate', user_controller.update);
routes.get('/mongoDelete', user_controller.delete);

//Export ke Serverx.JS
module.exports = routes;