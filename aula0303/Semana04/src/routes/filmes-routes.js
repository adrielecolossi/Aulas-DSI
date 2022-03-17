const {Router} = require('express');
//const Router = require('express').Router
const {FilmesController} = require('../controllers/filmes-controller')
//MVC model modelagem view o que vai pro usuario controller link entre os dois
const routes = Router();

const filmesController = new FilmesController();

routes.get('/', filmesController.listar)
/*
routes.get('/', (req, res)=>{
  
    return res.send('Essa é a listagem de filmes')
})

*/
routes.get('/:id', filmesController.detalhar)

routes.post('/', filmesController.cadastrar)
module.exports= routes;