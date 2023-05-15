/*
TRAITEMENT DES PARAMÈTRES D'URL

Introduction

Dans Express.js, il existe plusieurs méthodes pour gérer les informations transmises via l'URL. Parmi celles-ci, on trouve l'attribut params de l'objet req.
*/
/*
L'attribut req.params permet d'accéder aux données contenues dans l'URL via des paramètres de route. Par exemple :
Si l'URL est http://www.example.com/details/item1/part2
Voici comment récupérer ces données côté serveur :
app.get('/details/:element1/:element2', function (req, res) {
  console.log(req.params.element1); // affiche 'item1'
  console.log(req.params.element2); // affiche 'part2'
});
*/
/*
L'attribut req.query permet d'accéder aux données contenues dans l'URL via des paramètres de chaîne de requête. Par exemple :
Si l'URL est http://www.example.com/search?keyword=exemple&category=test
Voici comment récupérer ces données côté serveur :
  app.get('/search', function (req, res) {
    console.log(req.query.keyword); // affiche 'exemple'
    console.log(req.query.category); // affiche 'test'
  });
  */
/*
Exercices

Repartez du site développé dans l'exercice précédent. Pour naviguer entre les pages, transmettez la référence de chaque page dans l'URL en utilisant req.params.

*/

const express = require("express");

const app = express();

app.set('view engine','ejs');
app.set('views','html');

app.use("/css",express.static(__dirname+"/css"));

app.get("/",(req,res)=>{

  res.render("index");
});

app.get("/:inconnue",(req,res)=>{
  console.log(req.params.inconnue);

  res.render(req.params.inconnue);
});



/*app.get('/index/:page1/', function (req,res){
  //res.render("index");
   
   //console.log(req.params.avion);
 });
 */
 app.get('/index/:voiture/:avion', function (req,res){
 //res.render("index");
  console.log(req.params.voiture);
  console.log(req.params.avion);
  //console.log(req.params.avion);
});

app.get("/search",function(req,res){

  console.log(req.query.chovino);
})










const port = 3003;

app.listen(3003,()=>{

  console.log('Votre serveur est sur le port: '+port);
});