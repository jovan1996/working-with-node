const express = require('express');
const bodyParser = require('body-parser'); //korisit se za rad sa formama (post method)
var urlencodedParser = bodyParser.urlencoded({ extended: false }); //post handler

const app = express();
//ejs- view template engine
app.set('view engine', 'ejs');

//load index view on start page
app.get('/',(req, res)=>{res.render('index');});
app.get('/contact',(req, res)=>{res.render('contact', {qs: req.query} );});

//nodejs do not works with static falis
app.use('/assets',express.static('assets')); //takes static files...
app.use('/img',express.static('img')); //takes static files...

//body-parser
app.post('/contact', urlencodedParser, (req, res)=>{

  res.render('contact-success', {data: req.body});

});//podaci iz forme poslati post


app.get('/profile/:name', (req,res) => {
  var data={age: 21, job: 'developer', hobbies: ['1', '22', '333']}
  res.render('profile',{person: req.params.name, data: data});
});

app.listen(3000);
