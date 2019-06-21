const express = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer');

const routes = express.Router();

const BoxController = require('./controllers/BoxController');
const FileController = require('./controllers/FileController');

routes.post('/boxes',BoxController.store);

routes.get('/boxes/:id',BoxController.show);

routes.post('/boxes/:id/files',multer(multerConfig).single('file'),FileController.store);
 
/*

Quando tiver req,res é chamado de midory, é um interseptador

req => representa a requisição para o servidor
res => retornar uma respota para o cliente
*/
// routes.get('/teste', (req,res) => {
//     return res.send('Hello Rodrigo');
// });


//retornar a variavel
module.exports = routes;
