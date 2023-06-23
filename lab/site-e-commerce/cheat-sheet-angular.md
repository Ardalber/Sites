# 1 creation du projet : ng new [nom du projet]

# 2 entrer dans le projet et supprimer le contenu du fichier src/app/app.component.html 

ng serve => lancer le serveur http://localhost:4200


CREATION D'UN COMPOSANT:  - ng g c [nom du composant]
                              - ajouter le composant dans app.component.html  
                              -toujours 2 terminaux
                                        - un pour faire tourner le serveur
                                        -un pour executer les ligne de commandes angular

# 3 creation d'un composant:    - ng g c [nom du composant]
                              - ajouter le composant dans app.component.   html<NomDuComposant> 

# 4 creation d'une classe
            - créer un dossier model dans src
            - créer un fichier [nom du model].model.ts
            - modifier les variables dans component.ts
            - adapter le code dans html et ts


CYRIL approuved      

# 5 pour mettre une condition dans une div par exemple pour afficher une couleur differente en fonction d'une valeur

<div class="general" [ngClass]="{'another-color': newCar.client == false }">

# 6 pour mettre une condition sur une image qui affiche      

<img [src]='newCar.img' *ngIf="newCar.img !== ''">

# 7 faire une boucle sur un tableau de contact
 ### *ngFor='let temp of tab' à mettre dans l'élément html du parent

# 8 ajouter (comme attribut) [coordonnee]="temp" avec coordonnee qui est la variable déclarée dans l'enfant


# 9 ajouter  @Input() coordonnee!: ContactModel; avec ContactModel qui est la classe parente

 


--------------------------------------------------------------------------

- créer projet 
   ng new [nom du projet]

- lancer le serveur
    ng serve ou ng serve -o pour le lancer directement

- tout supprimer dans le html général

- créer un dossir model
    - créer un modèle
    - on peut 'injecter' un modèle dans un autre en déclarant une variable 

-     


# service 
: permet de récupérer des données, il y a plusieurs types de services 
    - http

    