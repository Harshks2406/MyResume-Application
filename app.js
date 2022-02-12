const express = require('express');
const app = express()
const hbs = require('hbs')
const path = require('path')
const port = process.env.PORT || 3456

const static_path = path.join(__dirname,'/public')
const template_path = path.join(__dirname,'/public/templates/views')
const partial_path = path.join(__dirname,'/public/templates/partials')

app.set('view engine', 'hbs')
app.set('views',template_path)
hbs.registerPartials(partial_path)
app.use(express.static(static_path))

app.get('',(req,res)=>{
    res.render('index.hbs')
})

app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`)
})