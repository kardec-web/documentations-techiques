=========
Memo - C#
=========

Base d'un programme
===================
::

    using System;
    
    namespace Chap1 {
     class P10 {
        static void Main(string[] args) {
        }
     }
    }


Arrêt d'un srcipt
:::::::::::::::::
::

    Environment.Exit(0);

Type
====
char, string, int, uint, long, ulong, sbyte, byte, short, ushort, float, double, decimal, bool, object

Déclaration
:::::::::::
::

    int entier = 2, entier2 = 3 ;
    float flo = 3.5 ;
    bool boolean = true ;
    const float taux_tva = 0.186;
    string chaine = "salut" ;
    
Conversion explicite
::::::::::::::::::::
::

    nombre.toString() ;
    int.parse(chaine)
    
Tableaux
::::::::
::

    // Type[] tableau[]=new Type[n]
    int[] entiers=new int[] {0,10,20,30};
    // ou
    int[] entiers={0,10,20,30};
    
    // conaitre le nombre d'élément
    entiers.lenght() ;
    
Enumérateurs
::::::::::::
::

    enum Mentions { Passable, AssezBien, Bien, TrèsBien, Excellent };
    Mentions maMention = Mentions.Passable;
    // liste des mentions sous forme de chaînes
    foreach (Mentions m in Enum.GetValues(maMention.GetType())) 
    {
         Console.WriteLine(m);
    }

    
Flux
====
Sortie
::::::
::
    
    Console.Out.WriteLine(expression)
    Console.WriteLine(expression)
    Console.Error.WriteLine (expression)

Entrée
::::::
::

    string ligne=Console.In.ReadLine();
    // ou
    string ligne=Console.ReadLine();

Structure de contrôle
=====================

if
::
::

    if (x>0) { nx=nx+1;sx=sx+x;} else dx=dx-x;
    
Switch
::::::
::

    switch(expression) {
      case v1:
                   actions1;
                   break;
      case v2:
                   actions2;
                   break;
             . .. .. .. .. ..
      default:
                   actions_sinon;
                   break;
    }

For
:::
::

    for (i=id;i<=if;i=i+ip){actions;}
    
Foreach
:::::::
::

    foreach (Type variable in collection)
      instructions;
    }

While
:::::
::

    while(condition){
      actions;
    }
    
Do...While
::::::::::
::

    do{
      instructions;
    }while(condition);

Fonctions / Méthodes
====================
Passage de paramètres
:::::::::::::::::::::
::

    // pasage par valeur
    void maFonction(int a)
    // passage par référence
    void maFonction(ref int a)
    
Classes
=======
Base
::::
::

    class Personne
    {
        // attributs
        private string nom ;
        public string prenom ;
        protectes int age;
        
        // méthodes
        public void innitialise(string nom, string prenom)
        {
            this.nom = nom ;
            this.prenom = prenom ;
        }
    }
    
    Personne personne = new Personne() ;
    Personne[] liste_personne = new Personne[3] ;
    personne[0] = New Personne() ;
    personne[1] = New Personne() ;
    personne[2] = New Personne() ;
    
Constructeurs
:::::::::::::
Le constructeur porte le nom de la classe et ne renvoi aucun type, pa même void.
::

    class Personne
    {
        // attributs
        private string nom ;
        public string prenom ;
        protectes int age;
        
        // méthodes
        public Personne(string nom, string prenom)
        {
            this.nom = nom ;
            this.prenom = prenom ;
        }
    }

Propriétées
:::::::::::
::

    Public string nom
    {
        get {return this.nom ;}
        set {this.nom = value ;}
    }
    
    // ou
    Public string nom{ get; set;}

Attributs / propriétées / méthodes statiques
::::::::::::::::::::::::::::::::::::::::::::
::

    private static compteur ;
    public static compteur{get;}
    
Classe abstraite
::::::::::::::::
::

    public abstract class MaClasse{}
    
Héritage
========
::

    public class Enseignant : Personne
    {
        // constructeur
        public Enseignant(string nom, string prenom, int age) : base(nom, prenom, age){}
    }
    
Redéfinition de méthode
:::::::::::::::::::::::
::

    // dans la classe mère, changer la déclaration de la méthode en rajoutant le mot-clé virtual
    public virtual maFonction(){}
    // dans la classe fille
    public overide maFonction(){}
    
    // si la classe mère n'as pas déclarer sa fonction avec le mot-clé virtual
    // Remplacer overide par new. Attention pas de polymorphisme.
    
Interface
=========
::

    Public interface IStat
    {
        double Moyenne {get;}
        double EcartType();
    }

    public class Test : IStat ;

Espaces de noms
===============
::

    namespace monNameSpace{...}
    
    // dans les autres modules :
    using monNameSpace;
