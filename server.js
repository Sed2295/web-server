const express = require('express')
const app = express()
const hbs = require('hbs');
require('./hbs/helpers');

//desplegar en heroku o local
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'))
hbs.registerPartials(__dirname + '/views/parciales')
//EXPRESS hbs engine
app.set('view engine', 'hbs');

app.get('/',  (req, res) =>  {
	//cargamos datos en home.hbs y enviamos el valor de las variables
  res.render('home',{
  	nombre:'alfredo cabrera',
  	anio: new Date().getFullYear()
  });
})
app.get('/about',  (req, res) =>  {
	//cargamos datos en home.hbs y enviamos el valor de las variables
  res.render('about',{
  	anio: new Date().getFullYear()
  });
})
 
app.listen(port, () => {
	console.log(`Escuchando peticiones en el puerto ${port}`)
})