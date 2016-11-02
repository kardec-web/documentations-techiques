===========
ZORBA API C
===========

Compiler un programme zorba
===========================

Inclusion de fichier
::::::::::::::::::::
::
    #include <zorba/zorbac.h>
    #include <simplestore/simplestorec.h>
    
Compilation
:::::::::::
::
    gcc -o executable source.c -L/usr/local/lib -I/usr/local/include/zorba -lzorba_simplestore

Librairie
=========

Initialisation de l'api
:::::::::::::::::::::::
::
    XQC_Implementation impl;
    void* store = create_simple_store();
    
    if (zorba_implementation(&impl, store) != XQ_NO_ERROR)
    {
        return 1;
    }

    ...
    
    // Libération des ressources
    impl->free(impl);
    shutdown_simple_store(store);

Création d'un requète
:::::::::::::::::::::
::
    
    XQC_Query lXQuery;
    FILE* lOutFile = stdout;
    
    // Création d'une reqète simple et affichage du résultat sur la sortie standard
    // compile the query
    impl->prepare(impl, "(1+2, 3, 4)", 0, 0, &lXQuery);

    // execute it and print the result on standard out
    lXQuery->execute(lXQuery, lOutFile);

    // release the query
    lXQuery->free(lXQuery);
    
    
