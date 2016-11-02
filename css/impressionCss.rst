balise html :
<link rel="stylesheet" type="text/css" media="print" href="print.css"/>

@page désigne la page
    prorpiétés :
        - size : hauteur largeur orientation ;
            ex size : 21cm 19cm landscape ( ou portrait (par défaut))
        - marks : Définit la largeur de la page(une zone à découpé) les valeurs peuvent être none, cross et crop
        
exemple :
@page{
    size : 21cm 19cm portrait ;
    marks : cross ;
}

Définir une page de droite et une page de gauche
    @page:left  désigne une page de gauche
    @page:right désigne une page de droite

désigner la première page
    @page:first

page A4 : (21.0cm by 29.7cm) 

Cas général
Mettre le texte en noir et le fond en blanc, utilisé une police de type serif de taille 10pt
body {
  font-size: 10pt; 
  background-color: white; font-family: Garamond, Times, "Times New Roman", serif;
  color: black;
 }

Cacher les éléments inutile
.banierre, .menu{
    display : none ;
}

Redéfinir la taille des polices des titres de h1 à h6 et supprimé leur marge (padding et margin)

Pour le texte mis en surbrillance : mettre le font en gris  #BCBEC0

Changer la hauteur des ligne pour les paragraphes de +- 8pt
p{
line-height : 18pt;
}

Changer le style des liens :
    - Supprimer le soulignement
    - la couleur du font et du texte la meme que pour le paragraphe
    - ajouter l'adresse du lien après le nom
#content a:after {
 content: " <" attr(href) "> ";
 font-family: courier, monospace;
 font-weight: normal;
}
a {
 text-decoration: none;
 font-weight: bold;
 color: #626466;
}
