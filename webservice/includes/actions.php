<?php
/**
 * @return array
 */
function getBooks()
{
    return [
        [
            "id" => 1,
            "name" => "Mensen die ik ken die mijn moeder hebben gekend",
            "author" => "Arjen Lubach",
            "img" => "img/mensendieikken.png",
        ],
        [
            "id" => 2,
            "name" => "Arsène Lupin Gentlemen Inbreker",
            "author" => "Maurice Leblanc",
            "img" => "img/arsenelupin.png",
        ],
        [
            "id" => 3,
            "name" => "De Alchemist",
            "author" => "Michael Scott",
            "img" => "img/alchemist.png",
        ],
        [
            "id" => 4,
            "name" => "Baron 1898",
            "author" => "Jacques Vriens",
            "img" => "img/baron1898.png",
        ],
        [
            "id" => 5,
            "name" => "Daantje de Wereldkampioen",
            "author" => "Roald Dahl",
            "img" => "img/daantje.png",
        ],
        [
            "id" => 6,
            "name" => "De Zieneres",
            "author" => "Michael Scott",
            "img" => "img/zieneres.png",
        ],
        [
            "id" => 7,
            "name" => "Narnia",
            "author" => "C.S. Lewis",
            "img" => "img/narnia.png",
        ],
        [
            "id" => 8,
            "name" => "Harry Potter en de Relieken van de Dood",
            "author" => "J.K. Roling",
            "img" => "img/harrypotter.png",
        ]
    ];
}

/**
 * @param $id
 * @return mixed
 */
function getBookDetails($id)
{
    $tags = [
        1 => [
            "description" => "Er zit een meisje op het bed van Benjamin. Ze is meegelopen naar zijn hotelkamer in Barcelona en ze lijkt niet van plan weg te gaan. En dat terwijl zijn vroegere hartsvriendin ieder moment op de stoep kan staan.",
            "tags" => ['fictie', 'roman']
        ],
        2 => [
            "description" => "Bekend van de Netflix-serie!‘ Wees gewaarschuwd, goede lezer, bij de eerste ontmoeting raak je gecharmeerd, de volgende keer ben je verkocht en nadien wil je Lupin volgen waar hij je ook naar toe voert.’",
            "tags" => ['detective', 'netflix', 'frans']
        ],
        3 => [
            "description" => "De Alchemist: De geheimen van de onsterfelijke Nicolas Flamel is het eerste boek in de zesdelige fantasy/avonturenserie De geheimen van de onsterfelijke Nicolas Flamel van de Ierse schrijver Michael Scott.",
            "tags" => ['fantasie']
        ],
        4 => [
            "description" => "Meesterverteller Jacques Vriens schreef dit avontuurlijke verhaal over de allernieuwste attractie in de Efteling – dive coaster Baron 1898.",
            "tags" => ['fantasie']
        ],
        5 => [
            "description" => "Maar op een nacht gaat het mis... Kan Daantje hem redden? Daantje, de wereldkampioen won in 1977 een Zilveren Griffel.",
            "tags" => ['fantasie']
        ],
        6 => [
            "description" => "De Zieneres is het zesde en laatste deel in de reeks De geheimen van de onsterfelijke Nicolas Flamel, geschreven door Michael Scott. De Zieneres begint meteen na het einde van De Warlock, het voorgaande verhaal.",
            "tags" => ['fantasie']
        ],
        7 => [
            "description" => "De Kronieken van Narnia is een zevendelige kinderboekenserie van de Britse schrijver C.S. Lewis. De serie wordt beschouwd als een klassieker in de kinderliteratuur en is het bekendste werk van de schrijver, met meer dan honderd miljoen verkochte exemplaren in 47 talen.",
            "tags" => ['fantasie']
        ],
        8 => [
            "description" => "Harry Potter en de Relieken van de Dood is het zevende en laatste boek uit de Harry Potterboekenreeks, geschreven door de Britse schrijfster J.K. Rowling.",
            "tags" => ['fantasie']
        ],
    ];

    return $tags[$id];
}