## Test-technique
<a name="readme-top"></a>


<br />
  <h3 align="center">Test stage Reltim</h3>




<details>
  <summary>Sommaires</summary>
  <ol>
    <li>
      <a href="#a-propos-du-projet">A propos du test</a>
      <ul>
      <li><a href="#consigne">Consigne et attendu</a></li>
        <li><a href="#construit-avec">Les technologies</a></li>
      </ul>
    </li>
    <li>
      <a href="#commencer">Commencer</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#lancement">Lancer le projet</a></li>
      </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



## A propos du projet

Ce test vise à évaluer vos compétences dans la création d'un CRUD de recettes en utilisant ReactJS pour le front-end et Express/Node pour le back-end. Assurez-vous de suivre attentivement les consignes pour mener à bien la réalisation du projet.

<p align="right">(<a href="#readme-top">revenir en haut</a>)</p>


## Consigne

Le test consiste à créer un CRUD de recettes avec une page front-end en ReactJS (dossier front) et un serveur Express/Node (dossier back). Les fonctionnalités attendues sont d'ajouter, modifier et supprimer des recettes.

La construction du projet est libre mais l'utilisation de composant est appréciée. Vous pouvez choisir de tout mettre dans un fichier (par exemple, app.js) avec des popups, ou créer des pages avec des routes.

Pour faire simple voici les points attendus : 
1. Visualiser toutes les cartes de recettes sur une page(avec le nom, l'image par défaut, la durée et la description)
2. Pouvoir ajouter une recette en personnalisant le nom, la description et la durée
3. Pouvoir modifier le nom, la description et la durée de chaque recette
4. Pouvoir supprimer chaque recette 

Concernant le style du projet, aucune attente particulière n'est définie. Vous êtes libre de concevoir l'interface utilisateur et le design du projet selon votre propre vision. Vous pouvez choisir d'ajouter des styles et des éléments graphiques, ou de vous concentrer principalement sur les fonctionnalités. L'objectif principal est d'évaluer vos compétences en développement web, et le style du projet est laissé à votre discrétion.

Pas de version responsive attendue, et l'IA est autorisée cependant rappelez-vous de maintenir une structure de code propre.

<p align="right">(<a href="#readme-top">revenir en haut</a>)</p>




## Commencer

Pour commencer le projet vous pouvez suivre les instructions qui vont suivre. Les configurations ont déjà été faites vous n'avez plus qu'à installer le projet et le lancer.


### Installation

Pour commencer vous avez besoin d'installer le projet c'est assez simple.

1. Clonez le repo git
   ```sh
   git clone https://github.com/domov44/test-stage
   ```
2. Ensuite installez le packages nodes pour la partie backend, ouvrez le terminal de votre IDE puis executez les 2 commandes à la suite : 
   ```sh
   cd back
   ```
    ```sh
   npm install
   ```
3. Ouvrez un nouveau terminal sans fermer le premier, puis faites exactement pareil pour la partie frontend : 
   ```sh
   cd front
   ```
   ```sh
   npm install
   ```
4. Une fois que tout est installé, lancez votre virtual host (par exemple Xampp ou Wamp), accédez à la partie PhpMyAdmin, puis créez la base de données "stage".

Soit via l'interface PhpMyAdmin
Soit via la commande MySQL 
```sh
CREATE DATABASE stage;
```

5. Dans la base de données "stage" importez le fichier "recettes.sql" qui contient déjà la table MySQL vide. Le fichier se trouve dans le dossier back du projet.

**Le projet est installé, bravo !**

<p align="right">(<a href="#readme-top">revenir en haut</a>)</p>



## Lancement

La dernière étape est de lancer le projet

1. retournez sur le terminal 'back' de votre IDE et lancez Node
   ```sh
   npm start
   ```
2. Pareil pour le front, retourner sur le terminal 'front' et lancez Node
   ```sh
   npm start
   ```

Après quelques dizaines de secondes, vous devriez voir la magnifique page par défaut de ReactJS se lancer sur le port localhost:3000.


<p align="right">(<a href="#readme-top">retour en haut</a>)</p>



## Rendu du projet

Lorsque vous avez terminé le projet vous n'avez plus qu'à push sur votre propre repo public, et m'envoyer le lien par mail **ronan@reltim.com**

1. Créez un repo github et reliez le au projet cloné
2. Pushez sur votre branche par défaut
```sh
   git add .
   git commit -m "Premier commit"
   git push -u origin nom-de-la-branche
```

<p align="right">(<a href="#readme-top">retour en haut</a>)</p>



## Contact

Si vous avez une question contactez-moi sans hésiter sur [mon LinkedIn](https://www.linkedin.com/in/ronan-scotet-concepteur-web/) - ou par mail **ronan@reltim.com**

Lien du projet: [https://github.com/domov44/eval-php](https://github.com/domov44/test-stage)

<p align="right">(<a href="#readme-top">revenir en haut</a>)</p>