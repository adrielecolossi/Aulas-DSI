
//Microsserviço cada um roda agnostico ao sistema, o mercado livre tem mais de 10 mil microsserviços


const users = [{name: 'Adriele', age: 18}];
const express = require('express');

const app = express();

//aceita qualquer requisição
//app.get('*', (req, res) => {
   /* const {
        query,
        params,
        baseUrl,
        path
    } = req; //destructuring
    res.send(`<h1>Minha página</h1><pre> Query:${JSON.stringify(query, null, 2)}</pre><br/><pre></pre>`);
*/
//})
/*

app.get('/fatorial', (req, res)=>{
    //para usar: http://localhost:3000/fatorial?value=5  QUERY PARAMETER
  const {value} = req.query;

  //const value = req.query.value
  const number= Number(value)
  if(isNaN(number)){
     return res.send('O usuário mandou um valor inválido');
   
    }
   let fat =1;
   for(let i=1; i<number; i++){
      fat *= i
   } 

  res.send(`${number} = ${fat}`);    


})
*/
/*
app.get('/fat/:numero', (req, res)=>{
    const {numero} = req.params;
  res.send(numero)
})
//localhost:3000/nome/teste/mostra
//path é o caminho
//null é o scape, 2 é para dar 2 de espaço
*/
/*
app.get('/message/:quantidade/:texto', (req, res)=>{
    const {quantidade, texto} = req.params;
    let textoFinal = '';
    for(let i=0;i<Number(quantidade);i++){
        textoFinal+= texto+ '<br/>' 
    }
    res.send(textoFinal);
})

i = index
*/

//uuid cria um id aleatório que praticamente nunca mais vai se repetir
//nanoid taxa pequena de repetir, mas não podemos ter muitos.
//template engine: template unico que cria uma pagina unica
app.get('/envia', (req, res)=>{
    const {name, age} = req.query;
    var object= {name, age}
  users.push(object)
    return res.send(`Usuário ${name} com ${age} anos`)
})

app.get('/lista', (req, res)=>{
    res.send(JSON.stringify(users, null, 2))
})

app.get('/lista/:id', (req, res)=>{
    const {id} = req.params

    console.log(users[id])
res.send(JSON.stringify(users[id]));
})

app.listen(3000, ()=>{
    console.log('Servidor iniciado')
});

