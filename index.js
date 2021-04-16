const express = require('express');

const app = express();

app.get("/", (req, res) =>{
    res.status(200).send({message: "Olá! Isso é uma mensagem de testes para o novo repositorio."})
})

app.listen(4001, ()=>{
    console.log("Api inicializada na porta 4001");
})