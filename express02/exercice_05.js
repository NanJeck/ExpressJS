/*
UTILISATION DES FICHIERS STATIQUES 3

Introduction

La méthode sendFile de l'objet réponse permet d'envoyer un fichier spécifique au client.
Elle s'utilise de la manière suivante :
res.sendFile('<nom_du_fichier>', options);
options: un objet contenant le dossier racine. Par exemple : {root: 'fichiers'}
*/

/*
Exercice

Étape 1 :
Créez un document HTML. Intégrez au moins header,un titre et une balise image.
Placez ce document et l'image dans un dossier.

Étape 2 :
Utilisez la méthode sendFile pour envoyer le fichier au client.
*/

const express = require("express");

const app = express();

const port = 3002;




app.use("/img3",express.static(__dirname+"/html/img"));



app.get("/image",(rep,res)=>{
console.log(__dirname+"/html/img")
    res.sendFile("titre.html",{root:"html"});
});



app.listen(port,()=>{

  console.log("Le seveur est en écoute, comportez vous bien"+port);
});