const {Router} = require('express');

const {DisciplinasController} = require('../controllers/disciplinas-controller')

const routes = Router();

const disciplinasController = new DisciplinasController();

routes.get('/', disciplinasController.listar)


routes.get('/:id', disciplinasController.detalhar)
routes.post('/excluir/:id', disciplinasController.excluir)
routes.post('/', disciplinasController.cadastrar)

 
module.exports= routes;