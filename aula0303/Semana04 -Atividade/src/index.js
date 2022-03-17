//primeiro passo: npm init

console.log('isso funciona')

const express= require('express');
const app= express();
//sempre que colocamos um app.use estamos incluindo um middleware
//pois todas as requisições que chegam

app.set('view engine', 'ejs');
app.set('views', './src/view')
app.use(express.urlencoded({
    extended: true
})) //parser de formulário


//template engine
//app.use(express.json) parser de requisições
app.use(express.static('public'));

app.use("*", (req, res, next) =>{ 
//é um middleware, uma função que executa entre o request e o endpoint final
//permitindo que seja verificado/incluido/testado  qualquer código antes de chamar o next
    console.log(`Request recebido para ${req.baseUrl} às ${new Date()}` );
    //para deixar o sistema mais lento poderiamos usar o setTimeOut com o next()
    next();
})

app.get('/', (req, res)=>{
    res.redirect('/disciplinas') 
})

const disciplinasRoutes = require('./routes/disciplinas-routes');

app.use('/disciplinas', disciplinasRoutes)

app.use("*", (req, res, next)=>{
   //vem por último para caso não encontremos nenhuma página
   res.redirect('/teste.html')
   // res.status(404).send(`<h1>Sorry, not found!</h1>`)
})


//se quiser matar todos os terminais pkill node
app.listen(3000, ()=>{
    console.log('Servidor iniciado na porta 3000')
})

