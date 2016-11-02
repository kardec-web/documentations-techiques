==========
Memo - PHP
==========

Structure de base
=================
Balise
::::::
::

 code html
 <?php instruction php ; ?>
 code html

Commentaire
:::::::::::
::

    // commentaire sur une ligne
    # commentaire sur une ligne
    /*
        commentaire sur plusieurs lignes
    */

Extension de fichier
::::::::::::::::::::
    + .php    Pour les fichiers php pouvant être appelés.
    + .inc    Pour les fichiers d'inclusion qui ne peuvent être appelés directement. (ceci n'est qu'une convention)

Opérateur
=========
::

    // Affectation par valeur
    $variable = expression ;

    // Affectation par référence
    $variable = &$variable2 ;

    // Opérateurs arithmétiques
    5 + 2 ;
    ++$var ; $var++ ; --$var ; ++$var ;

    9 / 2 ; 9 % 2 ;

    // Opérateur chaine
    $Chaine.$chaine2."abc"

    // Opérateurs logiques
    $a and $b ; $a && $b ;
    $a or $b ; $a || $b ;
    $a xor $b ;
    ! $a ;

    // Opérateurs combinés
    $var += $var2 ;
    $var -+ $var2 ;
    $var *= $var2 ;
    $var /= $var2 ;
    $var .= $var2 ;

Inclussion de fichier
:::::::::::::::::::::
::

    // int include(fichier) ou int include "fichier"
    // int include_once(fichier) ou int include_once 'fichier"

    // require(fichier)
    // require_once(fichier)

    // include renvoie 1 si le fichier à bien été inclus, en cas d'erreur affiche l'erreur et continue le script
    // require ne renvoie rien, en cas d'erreur arrête le script
    // include_once et require_once n'inclus le fichier qu'une fois même si appelé plusieurs fois

    // dans php.ini la directive include-path définit des chemins de recherche pour l'inclusion de fichiers.

Redirection
:::::::::::
::

    header("location: page.php") ;

Arrêt d'un srcipt
:::::::::::::::::
==============================  ========================================
Fonction                        Description
==============================  ========================================
exit($message)                  Interrompt brutalement le script,
exit([$statut])                 affiche un message ou renvoie un
die($message)                   entier compris entre 1 et 254 comme
die([$statut])                  statut de fin.
==============================  ========================================


Type
====
Constante
:::::::::
::

 // boolean define( nom chaine, valeur) ;
 // exemple :
    define("CONST", 5) ;
    echo CONST ;

Variable
::::::::
::

 $ma_variable = 5 ;

Variable - fonction
:::::::::::::::::::
==============================  ========================================
Fonction                        Description
==============================  ========================================
boolean empty($variable)        Teste si une variable est vide
boolean isset($variable)        Teste si une variable est définie
unset($variable)                Supprime une variable
var_dump($variable)             Affiche les informations d'une variable
boolean is_array($variable)     Teste si la variable est un tableau
boolean is_bool($variable)      Teste si la variable est un booléen
boolean is_int($variable)       Teste si la valeur est un entier
boolean is_float($variable)     Teste si la variable est un nombre à ,
boolean is_objet($variable)     Teste si la variable est un objet
boolean is_string($variable)    Teste si la variable est un string
string strval($variable)        Transforme une variable en chaine
float floatval($variable)       Convertit une variable en float
int   intval($variable)         Convertit une variable en integer
==============================  ========================================

Tableaux
::::::::
::

    // Création
    $tbl[] = 5 ;
    $tbl['un'] = 1 ;
    $tbl[6] = 7 ;
    $tbl2 = array(1, 2, 3, '7', 'un'=> 1) ;

    // Accéder à un élément
    $tbl[0] ;
    $tbl['un'] ;

    // Parcourir
    foreach($tbl as $valeur)
     {
        print $valeur ;
     }

    foreach($tbl as $cle => $valeur)
     {
        print $cle." ".$valeur ;
        $tbl[$cle] = 0 ;
     }

Tableaux - fonction
:::::::::::::::::::
=================================  ========================================
Fonction                           Description
=================================  ========================================
int count($tbl)                    Conte le nombre d'élément contenu dans le tableau
bool in_array($var, $tbl)          Teste si une valeur se trouve dans le tableau
bool array_key_exists($key, $tbl)  Teste si une clé est présente dans le tableau
mixte array_search($var, $tbl)     Cherche une valeur dans un tableau et renvoie sa clé
string implode($sep, $tbl)         Regroupe les valeurs d'un tableau dans une chaine à l'aide d'un séparateur
array explode($sep, string)        Découpe une chaine à l'aide d'un séparateur
array str_split($chaine, $nb)      Découpe une chaine en longueur de taille $nb
=================================  ========================================

String - fonction
:::::::::::::::::
=================================== ========================================
Fonction                            Description
=================================== ========================================
int strlen($chaine)                 Retourne le nombre de caractère d'une chaine
string strtolower($chaine)          Convertit $chaine en minuscule
string strtoupper($chaine)          Convertit $chaine en majuscule
string ucfirst($chaine)             Convertit le premier caractère en majuscule
string ucwords($chaine)             Convertit le premier caractère de chaque mot en majuscule
int strcmp($src, $cib)              Compare les 2 chaines
int strcasecmp($src, $cib)          Compare les 2 chaines (sensible à la casse)
string [s]printf($chaine)           printf du c
string number_format($nb, $dec,
$sep, $sep_millier)                 Met en forme un nombre
string ltrim($chaine)               Supprime les espaces en début de chaine
string rtrim($chaine)               Supprime les espaces en fin de chaine
string trim($chaine)                Supprime les espaces des deux côtés de la chaine
string substr($ch, $deb[,$long)     Extrait une sous-chaine d'une chaine
string str_repeat($chaine, $rep)    Crée une chaine de x répétition de $chaine
int strpos($chaine, $ch_recherche)  Recherche la position de la sous-chaine dans la chaine
string strstr($chaine, $ch_rech)    Extrait la sous-chaine commençant à partir d'une occurence
mixte str_replace($rech, $remp)     Remplacer les occurences d'une chaine par une autre chaine
=================================== ========================================

Expressions régulières
::::::::::::::::::::::
======================================= ========================================
Fonction                                Description
======================================= ========================================
int ereg($recherhe, $chaine,[$tbl])     Recherche s'il existe une correspondance
string ereg_replace($rech, $src, $sib)  Idem et remplace la chaine $sib
======================================= ========================================

::

    // Exemple expression régulière
    $chaine = "6-2-2008" ;
    $expr = "([0-9]{1,2})-([0-9]{1,2})-([0-9]{4})$" ;
    if (ereg($expr, $chaine, $tbl_resultat))
     {
        // Remplacer - par /
        $chaine = ereg_replace("-", "/", $chaine) ;
        echo $chaine."<br />" ;
        echo $tbl_resultat[1]."<br />" ;
        echo $tbl_resultat[2]."<br />" ;
        echo $tbl_resultat[3]."<br />" ;
     }

Date
::::
======================================= ========================================
Fonction                                Description
======================================= ========================================
bool checkdate($mois, $jour, $annee)    Vérifie que les trois variables correspondent à une date valide
======================================= ========================================

Conversion explicite
::::::::::::::::::::
::

    (int)"5ab" ; // -> 5
    (bool)0 ;
    (float)"1.5" ;
    (string)89 ;


Structure de contrôle
=====================

if
::
::

    // Première syntaxe
    if(condition)
     {
        instruction ;
     }
    elseif(condition2)
     {
        instruction ;
     }
    else
     {
        instruction ;
     }

     // Deuxième syntaxe
     if (condition) :
        instruction ;
     elseif (condition2) :
        instruction ;
     else :
        instruction ;
     endif ;

     // Utilisation
     <html>
        <head><title>If 2</title></head>
        <body>
            <?php if (empty($nom)) : ?>
                Nom vide !<br />
            <?php elseif (empty($age)) : ?>
                Nom rempli !<br />
                Age vide !<br />
            <?php else : ?>
                Nom rempli !<br />
                Age rempli !<br />
            <?php endif ; ?>
        </body>
    </html>

Switch
::::::
::

    // Première syntaxe
    switch (expression)
     {
        case expression :
            instruction ;
        [break ;]

        case expression2 :
            instruction ;
        [break ;]

        default :
            instruction ;
     }

    // Deuxième syntaxe
    switch (expression) :
     case expression :
        instruction ;
     [break ;]

     case expression2 :
        instruction ;
     [break ;]

     default :
        instruction ;
    endswitch ;

While
:::::
::

    // Première syntax
    while (condition)
     {
        instruction ;
     }

    // deuxième syntax
    while (condition) :
        instruction ;
    endwhile ;

Do..while
:::::::::
::

    do
     {
        instruction ;
     }
    while (expression) ;

For
:::
::

    // Première syntax
    for (i=0 ; i >10 ; i++)
     {
        instruction ;
     }

    // deuxième syntax
    for (i=0 ; i >10 ; i++) :
        instruction ;
    endfor ;

Fonction
::::::::
::

    function nom([parametres[=1]])
     {
        [static] $a = 1 ;
        instruction ;
        [return 1 ;]
     }

    function produit($nb, $nb2)
     {
        return $nb*$nb2 ;
     }

    function somme($nb, $nb2)
     {
        return $nb+$nb2 ;
     }

     function adaptater_calcul($operation, $nb, $nb2)
      {
        return $opération($nb, $nb2) ;
      }

     echo adapter_calcul("somme", 3, 5) ;
     echo adapter_calcul("produit", 3, 5) ;

     // Passage par référence
     function inverse(&$a, &$b)
      {
        $tmp = $a ;
        $a = $b ;
        $b = $tmp ;
      }

    // Multi paramètre
    function multi()
     {
        if(func_num_args()==0) return 0 ;

        $params = func_get_args() ;
        foreach($params as $param)
         {
            echo $param.'<br>'
         }
     }

======================================= ========================================
Fonction                                Description
======================================= ========================================
int func_num_args()                     Renvoie le nombre d'arguments de la fonction
array func_get_args()                   Renvoie un tableau avec les arguments de la fonction
======================================= ========================================


Gestion des formulaires
:::::::::::::::::::::::

Les données reçues d'un formulaire doivent être :
 + innitialisées si n'on existante (ou plutot les variables les recevant)
 + néttoyées des espaces blancs en début et en fin de chaine
 + éventuellement nétoyées des balises html
 + si magic_quotes_gpc est activé retiré les caractères d'échapements

Les données qui doivent être afficher dans un formulaire doivent être :
 + néttoyées pour que les caractères html spéciaux tels que les > < " ' soit remplacé par leur équivalent html

Les données qui doivent être afficher dans une page web doivent être
 + néttoyées pour que les caractères html spéciaux tels que les > < " ' soit remplacé par leur équivalent html
 + néttoyées pour que les caractères \n soit remplacée par la balise <br />

======================================= ========================================
Tableau                                 Description
======================================= ========================================
$_POST                                  Tableau contenant les valeurs d'un POST
$_GET                                   Tableau contenant les valeurs d'un GET
======================================= ========================================

=========================================== ========================================
Fonction                                    Description
=========================================== ========================================
import_request_variables($types, $préfixe)  Importe des données saisies dans un formulaire dans des variables préfixées par $préfixe suivit du nom (NAME), les types peuvent être P(POST) G(GET)
string addslashes(string)                   Ajoute un antislash devant ' " \ si magic_quotes_sybase est à off ou ' si à on
string stripslashes(string)                 Inverse de addslashes
bool get_magic_quotes_gpc()                 Retourne true si magic quote est activé
string htmlspecialchars(string[, option]]   Remplace les caractères & " > < en leur equivalent HTML, si option à ENT_QUOTES convertit en plus les '
string nl2br(string)                        Remplace les \n par des <br />
string strip_tags(string)                   Supprime les balises HTML
=========================================== ========================================

======================================= ========================================
Directive(php.ini)                      Description
======================================= ========================================
magic_quotes_gpc                        Si à on, les données provenant d'une méthode GET, POST, COOKIE sont encodée avec un antislash devant les caractères ' " \
magic_quotes_sybase                     Si à on double les ' plutôt que d'insérer un antislash
======================================= ========================================
