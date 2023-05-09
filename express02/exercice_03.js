/*
Un serveur a souvent besoin de fournir des fichiers statiques tels que les fichiers CSS, JavaScript, images, sons, vidéos, etc. 
Avec Express.js, il est possible de référencer ces fichiers en les plaçant dans un sous-dossier. 
Il faut déclarer ce sous-dossier dans le fichier JavaScript, avant la gestion des routes (app.get(), …) comme ceci :
app.use("/<dossier>", express.static(__dirname + '/<dossier>'));
Ensuite, on peut appeler l'élément dans le document HTML envoyé au client en utilisant une URL relative.
*/

/*
Exercice

Vous devez envoyer au client une balise image en utilisant la méthode send de l'objet réponse. Suivez ces étapes :

Étape 1 :
Reprenez le code de l'exercice précédent. Modifiez ce code pour envoyer une image plutôt qu'un simple message texte.

Étape 2 :
Créez un dossier à côté de votre fichier JavaScript, par exemple img, et placez-y une image (par exemple mon_image.jpg). Dans votre fichier JavaScript, déclarez ce dossier en utilisant la méthode app.use() et express.static() pour indiquer à Express.js de fournir les fichiers statiques de ce dossier. (Vous pouvez utiliser __dirname pour indiquer le chemin complet du dossier.)

Étape 3 :
Lorsqu'un utilisateur se connecte à votre serveur, envoyez-lui une balise image en utilisant la méthode send() de l'objet réponse. Assurez-vous que l'attribut src de la balise img pointe vers l'image que vous avez placée dans le dossier img. (Vous pouvez utiliser un chemin relatif pour l'attribut src de la balise img, par exemple /img/mon_image.jpg.)
*/

const express = require("express");

const app = express();

const port = 3002;

const options = {html:"titre.html"};

app.use("/img", express.static(__dirname +"/images"));
app.use("/img2", express.static(__dirname +"/images2"));
app.use("/img3",express.static(__dirname+"/html"));

app.get("/image2",(rep,res)=>{

    res.sendFile('titre.html',options);
})


app.get("/",(rep,res)=>{

    res.send("<img src='/img/fille.jpeg' alt='fille'>");
})

app.get("/image",(rep,res)=>{

    res.send("<img src='/img2/pexels-photo-15370101.jpeg' alt='pluie'>");
   
})

app.get("/ok",(rep,res)=>{


res.send("Bienvenue sur le serveur de l'humble Mathieu");
  console.log("Bienvenue sur le serveur de Mathieu");

})

app.get("/quit",(rep,res)=>{

  console.log(rep)

  res.send("bye,bye, vous avez quitté la page");
})

app.listen(port,()=>{

  console.log("Le seveur est en écoute, comportez vous bien"+port);
});