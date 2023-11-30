const express = require('express');
const app=express();
const host = 'localHost';
const port = 8080;
const cookieParser = require('cookie-parser');

app.use(cookieParser())
app.use(express.urlencoded({extended: true}))
//roats POST
app.post('/',( req,res) =>{
    res.send(req.body.message +" - "+ req.body.nome)
})
app.post('/echo',( req,res) =>{
    res.send("ECHO "+req.body.message +" - "+ req.body.nome)
})
app.post('/echo/:message',( req,res) =>{
    res.send("ECHO "+req.params.message )
})
//rota GET

app.get('/', (req,res)=>{
    res.type('request received');
    if(req.cookies.known === undefined){
        res.cookie('known','1');
        res.send('seja bem vindo , novo visitante!');
    }else{
        res.send('seja bem vindo novamente, visitante!')
    }
});

app.get('/mensagem', (req,res)=>{
    res.send('chega natal !!');
});
app.get('/curso', (req,res)=>{
    res.send('tecnico de informatica para internet');
});

app.listen(port,host,() =>{
    console.log(`server ready at http://${host}:${port}`)
})