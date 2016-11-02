===========
ImageMagick
===========

Convertir un pdf en image
=========================
-density permet de rendre le texte plus lisible (200 ou 400)
-resize ezdimensionne les images
- fichier.pdf le nom du fichier pdf
- image-%d.png création de fichier png portant les noms : image-1.png, image-2.png, ...
::
    convert -density 400 -resize 900x fichier.pdf image-%d.png
    
