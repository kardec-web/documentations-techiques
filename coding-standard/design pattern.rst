==============
DESIGN PATTERN
==============

Active Record
=============

pré-requis :
::::::::::::
 + Avoir une classe de connection à la bd

+ Chaque attribut de la table devient un attribut d'une classe. 
+ La primary key devient un attribut en lecture seule (protéger).
+ un attribut fait référence à un objet de connection à la bd.
+ Les requete sql sont vu comme des chaines constantes
+ Une méthode permet de créer ou de lettre à jour un tuble dans la base.
+ une méthode permet de rajouter un tuble dans la base, renvoie une nouvelle instance de l'objet
+ des méthodes de recherches sont créées pour faire des recherhce sur les champs 
::

    $book = new Book()
    $book->titre = "PHP pour les nuls"
    $book->nbPage = 345
    ...
    $book->save()

    Class Book()
    {
        protected const etat = -1 // si -1 alors en ajout
        public $titre
        public $nbPage
        ...

        protected $id
        protected $connection

        const SELECT_ALL = "SELECT * FROM BOOK"
        const SELECT_BY_ID = "SELECT * FROM BOOK WHERE ID = %1"
        CONST INSERT_INTO = "INSERT INTO BOOK(titre, nb_page) VALUES('%1', %2)"
        CONST UPDATE = "UPDATE BOOK SET titre = '%1', nb_page = %2 WHERE ID = %3"
        ...

        public __construct($id=NULL)  // si Id alors recherche le livre ayant le bon id sinon recrée un livre
        {
        }

        public function getId()
        {
            return $id
        }

        protected function update()
        {
        }

        protected function insert()
        {
            // met à jour $this->id
        }

        public function save()
        {
            if ($etat == $id)
            {
                update()
            }
            else
            {
                insert()
            }
        }   

        public function add($titre, $ nbPage)
        {
        }

        public static function findByTitre($titre)
        {
        }
    }
