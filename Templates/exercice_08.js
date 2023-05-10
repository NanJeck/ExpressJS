/*
UTILISATION DES TEMPLATES - UTILISATION DE VARIABLES

Présentation

EJS permet de traiter le contenu d'une variable.
Dans la méthode res.render, on fournit un second argument sous la forme d'un objet. Chaque propriété de cet objet peut être utilisée dans le template de la façon suivante :
res.render(<nom du fichier>, {valeur1: 'un texte', valeur2 : 'un autre texte'})

template EJS :
Les balises <%= %> permettent d'insérer des variables dans le template.
<p><%= valeur1 %></p>
Ceci donnera <p>un texte<p> dans le document HTML transmis au client.
*/

/* 
Exercice

------ 1 ------
Reprenez les documents de l'exercice précédent.

------ 2 ------
Transmettez le nom de la page et le titre du h1 dans l'objet passé en second argument de la méthode res.render et affichez-les dans votre document HTML envoyé au client.
*/
const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.set('views','views');

app.get("/",(rep,res)=>{

    res.render("index",{titre:"Accueil",text:'lorem'});

});
app.get("/about",(rep,res)=>{

    res.render("index",{titre:"a prpo",text:'lorem 59'});

});

app.listen(3001,()=>{

    console.log("votre serveur 08 est lancé");
})
