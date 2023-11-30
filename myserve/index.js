const express = require('express');
const app=express();
const host = 'localHost';
const port = 8080;
//rota
app.get('/', (req,res)=>{
    res.send('request received');
});

app.get('/mensagem', (req,res)=>{
    res.send('chega natal !!');
});

app.listen(port,host,() =>{
    console.log(`server ready at http://${host}:${port}`)
})