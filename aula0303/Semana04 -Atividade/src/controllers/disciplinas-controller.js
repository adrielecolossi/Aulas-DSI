const {nanoid} = require('nanoid')


const disciplinas = []

class DisciplinasController {
    async listar(req, res){
     
   res.render('listagem', {disciplinas:disciplinas})
        }
    
        async excluir(req, res){
              const reqExcluir = req.body.idExcluir

              let indexExcluir;
               for (let i2 = 0; i2 < disciplinas.length; i2++) {

                   if (disciplinas[i2].id == reqExcluir) {
                     console.log(i2)
                    indexExcluir = i2;
                   }
               }
             console.log(indexExcluir)

            disciplinas.splice(indexExcluir, 1)
              res.send('excluido');
        }

    async detalhar(req, res){
        const {
            id
        } = req.params
        let index;
        for(let i=0; i<disciplinas.length;i++){
            
       if(disciplinas[i].id== id){
           index= i;
       }
        }
       

        res.render('detalhar', {disciplina:disciplinas[index]});
     
    }

    async cadastrar(req, res){ 
       
        console.log(req.body)
disciplinas.push({
    id: nanoid(),
    ...req.body
})
res.redirect('/disciplinas')
           res.send('Deveria cadastrar uma discilpina')
    }
}

module.exports = {DisciplinasController}