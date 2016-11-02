====
Bash
====

Inclusion de fichier
==================== 
Placer un point avant le fichier 
::

	. fichier
	

Paramêtres de la ligne de commande
================================== 
::

	while getopts "ahvi:o:" OPTIONS
	do
		echo "$OPTIONS" $OPTIND $OPTARG

		case $OPTIONS in
			h) usage
			;;
			i) input=$OPTARG
			;;
			o) output=$OPTARG
			;;
			v) verbose=1
			;;
		esac
	done
	
Fonction
======== 
::

	usage()
	{
		cat << EOF
		usage: $0 options

		This script run the test1 or test2 over a machine.

		OPTIONS:
		   -h      Show this message
		   -t      Test type, can be ‘test1′ or ‘test2′
		   -r      Server address
		   -p      Server root password
		   -v      Verbose
		EOF
	}
	usage

Paramètres
==========
==  ====================================================================
P   Description
==  ====================================================================
$0	Contient le nom du script tel qu'il a été invoqué
$*	L'ensembles des paramètres sous la forme d'un seul argument
$@	L'ensemble des arguments, un argument par paramètre
$#	Le nombre de paramètres passés au script
$?	Le code retour de la dernière commande
$$	Le PID su shell qui exécute le script
$!	Le PID du dernier processus lancé en arrière-plan
==  ====================================================================
