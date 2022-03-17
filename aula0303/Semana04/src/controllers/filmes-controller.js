const {nanoid} = require('nanoid')


const filmes = []
//Server side html finalizado
//Client side busca a informação dinamicamente


class FilmesController {
    async listar(req, res){
        //listagem de todos os filmes mostrando o nome
        //o nome é clicável e redireciona para o detalhar do filme
       /*  let filmesFinal=''
     for(let i=0; i<filmes.length; i++){
         filmesFinal += `<a href=${filmes[i].id}> ${filmes[i].nome} </a> <br>`
     }
        res.send(filmesFinal)
    */
   res.render('listagem', {filmes:filmes})
        }
    

    async detalhar(req, res){
        const {
            id
        } = req.params
        console.log(id)
        let index;
        for(let i=0; i<filmes.length;i++){
       if(filmes[i].id== id){
           index= i;
       }
        }
        //mostra todos os dados do filme
        console.log(index);
        res.render('detalhar', {filme:filmes[index]});
        /*return res.send(`Nome: ${filmes[index].nome} <br> Genero: ${filmes[index].genero} <br> Descrição: ${filmes[index].sinopse} <br> Data: ${filmes[index].data}`)*/
    }

    async cadastrar(req, res){ //são actions
        //depois de cadastrar redireciona para listagem
       
        console.log(req.body)
filmes.push({
    id: nanoid(),
    ...req.body
})
res.redirect('/filmes')
           res.send('Deveria cadastrar um filme')
    }
}

module.exports = {FilmesController}