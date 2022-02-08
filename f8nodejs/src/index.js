const path = require('path');
const express = require('express');
const { engine } = require('express-handlebars');
const app = express();

const port = 3000;


app.use(express.static(path.join(__dirname, 'public')));
// const hbs = create({ /* config */ });

// Template engine
app.engine('hbs', engine({extname: ".hbs"}));  //hbs => handlebars
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views')); // __dirname là file src chứa file index.js
// route
// app.get('/', (req, res) => {
//     return res.send('Hello World!');
// })

app.get('/', (req, res) =>{
  res.render('home');
})

app.get('/news', (req, res) =>{
  res.render('news');
})

//127.0.0.1
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})