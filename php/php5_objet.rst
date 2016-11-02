=============
Objets en php
=============

Création d'une classe
=====================
::

	[abstract] class MaClasse() { }

Avec héritage
:::::::::::::
::

	class maClasse() extends maClassBase {}
	
Utiliser le mot parent:: pour accéder à la classe mere.

Classe et méthode finale
::::::::::::::::::::::::
::

	final class MaClasse
	{
		final public function afficher() {}
	}

Instanciation d'une classe
==========================
::

	$maClasse = new MaClasse() ;

Niveau d'encapsulation
======================
::

	class MaClasse()
	{
		public $varPublique ;
		protected $varProtected ;
		private $varPrivate ;
		
		private fonction hello()
		{
			$this->varPublique = "Hello world" ;			
			echo $this->varPublique ;
		}
	}

Accéder aux attributs et aux méthodes d'une classe
==================================================
::

	$maClasse = new MaClasse() ;
	$maClasse->varPublique = "Helle world" ;

Création de constantes
======================
::

	class MaClasse()
	{
		const PI = 3.14957 ;

		public function diametre($rayon)
		{
			echo self::PI*2*$rayon ;
		}
	}

	echo MaClasse::PI ;

Methode statique
================
::

	class MaClasse
	{
		private static $tbl ;
		
		public static function maMéthode()
		{
		...
		}
	}
	
Méthode abstraite
=================
::

	abstract class MaClasse()
	{
		abstract protected maMethode() {}
	}

Méthodes spéciales
==================
==============================  ========================================
Méthode						    Description
==============================  ========================================
__construct([params])		    Constructeur de la classe
__destruct()					Destructeur
__get($nom)					    Intercepte la tentation de lecture d'un attribut non défini
__set($nom, $valeur)			Intercepte la tentation d'écriture dans un attribut non défini
__call($nom, $liste_arg)		Intercepte la tentation d'appeller une méthode non définie
__isset($variable)					   
__unset()
__empty()
__tostring()					Renvoie une chaine, lors d'un print ou d'un echo sur l'objet
__clone()					    Executer avant de clonet l'objer
==============================  ========================================

Interface
=========
Créer une interface
:::::::::::::::::::
::

	interface MonInterface
	{
		const  MaConstante = 'oui' ;
		public function sauver($fichier, $memoire=false) ;
	}

Utiliser une interface
::::::::::::::::::::::
::

	class MaClasse implements MonInterface
	{
		public function sauver($fichier, $memoire=false)
		{
			echo  MonInterface::MaConstante ;
			...
		}
	}

Divers
======
Cloner un objet
:::::::::::::::
::

	$objet = clone $objet_cloner ;

Constantes
::::::::::
==============================  ========================================
Constante					    Description
==============================  ========================================
__CLASS__					   	Nom de la classe
__DIR__						 	Nom du repertoire du script
__FILE__						Nom complet du script
__FUNCTION__					Nom de la fonction
__LINE__						Numéro de la ligne
__METHOD__					  	Nom de la méthode
==============================  ========================================

Opérateurs
::::::::::
==============================  ========================================
Opérateur					    Description
==============================  ========================================
\:\:							Résolution de protée
==============================  ========================================

Méthodes
::::::::
===============================  ========================================
Opérateur						 Description
===============================  ========================================
bool class_exists($nom_class)	 Vérifie que la classe $nom à été définie
string get_class($objet)		 Retourn l'instance de la classe de l'objet
array get_class_methods($class)  Retourn les méthode de la classe
bool interface_exists($nom)	  	 Vérifie que l'interface $nom à été définie
bool method_exists($ob, $meth)   Vérifie que l'objet $ob à une méthode $meth
bool property_exist($ob, $attr)  Vérifie que l'objet $ob dispose de l'attribut $attr
===============================  ========================================
