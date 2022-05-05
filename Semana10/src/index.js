const express = require('express');
const app= express();

const multer= require('multer')
const upload=  multer({dest:'public/images'})
const { Image }= require('./models/image')
app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use(express.static('public'));
//PAGINA INICIAL
app.get('/',  async (req,res)=>{
   let {page} = req.query; //PARA PEGAR ALGO DA URL COM ?
    console.log(page)
    const limit = 5;
    page = page || 1;
    const offset = limit * (page-1);
    const images= await Image.findAll({offset, limit})
    const total = await Image.count();
    res.render('initial', {images: images, total, page})
});

//PUBLICAR NOVA FOTO
app.post('/', upload.single('image'), async (req,res)=>{
console.log('cheguei');
console.log({body: req.body, file: req.file.filename});
//imagem?
//facilmente extensivel: é facil de plugar algo nele

await Image.create({
    tile: req.body.title,
    description: req.body.description,
    url: 'images/'+ req.file.filename
})


res.redirect('/')

});

app.listen(3000,()=>{
    console.log('Listening at 3000')
})