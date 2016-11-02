================
Simple Xml (PHP)
================

Chargé un document xml
====================== ::
    $xml = simplexml_load_file($path);

Déclaré un namespace
==================== ::
    $xml->registerXPathNamespace("xliff", "urn:oasis:names:tc:xliff:document:1.2");
    
Retrouver les namespaces d'un document
====================================== ::
    var_dump($xml->getNamespaces(true));
    
Xpath
===== ::
    $xml->xpath("/file/body")

Xpath et namespace
================== ::
    $xml->xpath("/x:xliff/x:file/x:body/x:trans-unit")
