const express = require('express');
const magicResponses = require('./models/magicResponses')

const app = express();

const PORT = 3000

function getRandomInt(min,max){
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min)
}



app.get('/greeting', (req, res) =>{
    res.send('<h1> Hello, Stranger </h1>')
})

app.get('/greeting/:name', (req, res)=>{
    res.send(`<h1> What's Up, ${req.params.name}!</h1>`)
})


app.get('/tip/:total/:tipPercent', (req, res )=>{
    res.send(`<h1> Expected Tip: ${(req.params.total  *(req.params.tipPercent / 100)) }</h1>`)
})

app.get('/magic/:question', (req, res )=>{
    res.send(`<h1>QUESTION: </h1>${req.params.question}
    <h1>${magicResponses[getRandomInt(0, magicResponses.length)]}</h1>`)
})

app.listen(PORT, (req, res )=>{
    console.log(`server live: port ${PORT}`)
})