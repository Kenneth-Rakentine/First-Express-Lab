const express = require('express');

const app = express();

const PORT = 3000



app.get('/greeting', (req, res) =>{
    res.send('<h1> Hello, Stranger </h1>')
})

app.get('./greeting/:name', (req, res)=>{
    res.send(`<h1> What's Up, ${req.params.name}!</h1>`)
})


app.get('/tip/:total/:tipPercentage', (req, res )=>{
    res.send(`<h1> Expected Tip is: ${(req.params.total * (req.params.tipPercentage / 100)) }s</h1>`)
})

// app.get('/magic', (req, res )=>{

// })

