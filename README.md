# Readme

Hoi. Dit is m'n readme.  
Per ongeluk in het Nederlands om een duidelijk cheatsheetje te maken wat duidelijker was voor iedereen.

[Naar de cheatsheet/API uitleg](#cheatsheet)  
[Naar het onderzoek](#onderzoek)   
[Observable](https://beta.observablehq.com/@danielvandevelde/stephen-king-gemiddeld-aantal-paginas-per-taal) & een kleine [Bonus!](https://beta.observablehq.com/@danielvandevelde/boeken-van-stephen-king-op-titel) (Maar helaas niet voltooid)

# Cheatsheet
Dit is m'n eigen cheatsheet, maak er gebruik van enzo.  

Kleine uitleg over de verschillende endpoints, hoe je ze bereikt en wat ze weergeven.  
Voor de **echte** documentatie zie:  
https://zoeken.oba.nl/api/v1/  
of het excel-sheetje in het Tech-track Slack kanaal!  

## search

Dit kan met zoekwoorden, maar ook met de opties in het hoofdstuk index besproken worden.
Als je zoekt op "L" zoekt deze ook enkel naar een los staande "L" en niet alle woorden met de letter "L".

Wanneer je zoekt krijg je maximaal 20 resultaten.
Dit is kleiner te maken door  bv ```pagesize=5``` en verder in te bladeren door ```page=2``` door te geven.

Als je zoekt krijg je ongeveer deze informatie:

```
id
frabl
detail-page
coverimages
  coverimage (meerdere aanwezig als meerdere covers zijn)
titles (Hoofd, kort en subtitel)
  title (mogelijk meerdere)
  short-title (mogelijk meerdere)
  other-title
authors (hoofd + overige auteurs)
  main-author
  author (mogelijk meerdere)
formats (book/movie)
  format
identifiers
  isbn-id
  ppn-id
publication (Jaar, uitgeverij, maand+jaartal, stad van uitgeverij?)
  year
  publishers
    publisher
    edition (niet altijd aanwezig?)
classification
  siso-code (Plaatssugestie binnen bieb? soms nummer soms woord + nummer bv. Latijn 873)
languages (Origineel en wanneer van toepassing vertaling)
  language
subjects
  topical-subject (meerdere)
genres (alleen bij films?)
  genre (meerdere)
description (pagina's, afmeting, etc)
  physical-description
summaries (samenvattingen)
  summary
notes (stukjes tekst als aantekening)
  note
target-audiences (doelgroep)
  target-audience
  undup-info
```

### Parameters
#### Refine
Wanneer refine=true word meegegeven dan krijg je naast je results ook de volgende facets met hun count(aantal dat ze voorkomen) mee.
Ze staan hieronder met daarbij hun mogelijke waarde(s)

<details><summary>Activiteiten</summary>

  ```
  thisweek
  nextweek
  thismonth
  next3month
  thisyear
  nextyear
  ```

</details>

<details><summary>Type</summary>

  ```
  Activiteiten
  Audiovisual
  sheetmusic
  book
  bookwithcassette
  bookwithcd
  cassette
  cd
  cdrom
  computerfile
  Cursus
  daisyrom
  dvdvideo
  ebook
  movie
  photo
  largetype
  kit
  audiobook
  website
  schooltv
  magazine
  excerpt
  video
  ```

</details>

<details><summary>Doelgroep</summary>

  ```
  ageYouth
  ageAdults
  ageYoungAdults
  ```

</details>

<details><summary>Auteur</summary>

  ```
  Annie M.G. Schmidt
  etc.
  ```

</details>

<details><summary>Genre</summary>

  ```
  avonturenroman
  bijbels-verhaal
  biografie
  detective
  dieren
  doktersverhaal
  erotiek
  experimentele-roman
  familieroman
  feministisch-verhaal
  homofiel-thema
  humor
  indisch-milieu
  islamitisch-milieu
  joods-milieu
  kinderleven
  oorlog-en-verzet
  paarden-pony's
  politieke-roman
  protestants-milieu
  psychologisch-verhaal
  racisme
  romantisch-verhaal
  school
  schience-fiction
  racisme
  romantisch-verhaal
  school
  science-fiction
  sociaal-politiek-verhaal
  spionage
  sport
  sprookjes
  streek-boeren-verhaal
  stripverhaal
  thriller
  verhalenbundel
  western
  zeeverhaal
  ```

</details>

<details><summary>Topic (100 meest populaire)</summary>

  ```
  Geschiedenis
  Nederland
  Verhalen
  Opstellen
  Biografieën
  Reisgidsen
  Tentoonstellingscatalogi
  Vriendschap
  Fotoboeken
  19e eeuw
  Wereldoorlog II
  20e eeuw
  Metamorfoze Collectie Oude Kinderboeken
  Dieren
  Verenigde Staten
  Amsterdam
  Verliefdheid
  Schoolleven
  Bouwkunst
  Reisbeschrijvingen
  Cultuurgeschiedenis
  Gedichten
  Gezin
  Europa
  17e eeuw
  Kinderen
  Sprookjesfiguren
  Frankrijk
  18e eeuw
  Catalogi
  Rouwproces
  Vrouwen
  Duitsland
  Beeldende kunst
  Engeland
  Schilderkunst
  Woordenboeken
  Middeleeuwen
  Muziek
  Rijmvertellingen
  Nederlandse taal
  Dagboeken
  Levenskunst
  Brieven
  België
  Muziekgeschiedenis
  Groot-Brittannië
  China
  Encyclopedieën
  Wandeltochten
  Kerstmis
  Metamorfoze Collectie Tentoonstellingscatalogi
  Honden
  Liefde
  Filosofie
  Dood
  16e eeuw
  Autobiografieen
  Nederlands Oost-Indië
  Pesten
  Identiteit
  Vrouwenleven
  Italië
  Voetbal
  Eenzaamheid
  Jodenvervolging
  Gidsen
  Anders zijn
  Angsten
  Zelfverwerkelijking
  Interviews
  Kunstgeschiedenis
  Katten
  Verenigde Staten van Amerika
  Beweegbare boeken
  Magie
  Kritiek
  Reizen
  AF
  Indonesië
  Memoires
  Japan
  Politieke geschiedenis
  Handenarbeid
  Vlaanderen
  Kookboeken
  Basisonderwijs
  heksen
  Wereldoorlog I
  Cultuurverschillen
  Homoseksualiteit
  Bibliografieën
  Grootouders
  Meertalige boeken
  India
  Spiritualiteit
  Suriname
  Rusland
  Indianen
  Letterkunde
  ```

</details>

<details><summary>Language</summary>

  ```
  dut
  eng
  ger
  fre
  spa
  ara
  tur
  ita
  mul
  per
  fri
  rus
  swe
  dan
  por
  afr
  lat
  grc
  nor
  jpn
  hun
  bah
  chi
  pol
  heb
  cat
  fin
  cze
  pap
  gre
  rum
  ser
  slv
  mis
  dum
  ind
  esp
  scr
  baq
  cro
  ice
  urd
  bul
  ben
  kor
  kur
  tha
  hin
  SRN
  fas
  gmh
  tir
  phi
  ira
  roh
  mlt
  gem
  san
  lan
  bre
  gae
  mrc
  tuk
  mao
  wel
  geo
  fro
  cam
  mac
  alb
  vie
  lav
  pus
  chv
  ```

</details>

<details><summary>pubYear</summary>

  ```
  2018
  2017
  etc.
  ```

</details>

<details><summary>pubYearRange</summary>

  ```
  2010
  2000
  1990
  1980
  1970
  OlderThan50
  ```

</details>


Dit zijn facets (te filteren door bijv: facet=type(book) of facet=language(dut) als parameters te zetten achter je query: ```facet=language(dut)``` . Het is ook mogelijk om hier meerdere van te gebruiken door ze achter elkaar te zetten zoals: ```&facet=type(movie)&facet=language(ita)```. Zorg dan wel dat refine=true! Anders werken deze dubbele facets niet.

#### Librarian
Wanneer de parameter librarian op true staat krijg je deze informatie iets overzichtelijker in elementen gezet.
Ook krijg je een datum en tijd mee van wanneer (denk ik) het boek in de bibliotheek is toegevoegd.

#### Sort
Je kan ```sort=title``` gebruiken om bijvoorbeeld op titels te sorteren.

#### Undup
De undup informatie die je in de search meekrijgt is waarschijnlijk voor de gelijknamige parameter die de dubbele resultaten weghaalt. Undup haalt dus alle duplicaten weg.

## details

Details zijn op te vragen door het endpoint details te gebruiken.
Voor de parameter ID kan je het id meegeven die ziet er bijvoorbeeld zo uit:
```id=|oba-catalogus|1161779``` Dit kan natuurlijk ook door ipv het ID de FRABL mee te geven zoals ```frabl=17BD72D249F360A0```
In de details zie je meer informatie over het boek zowel als de verschillende locaties waar dit boek beschikbaar is.
Met behulp van het endpoint resolver kan je met behulp van het isbn e.d. ook de frabl of native-id ophalen.

## refine

Refine geeft terug wat je ook via het endpoint search met refine=true kan krijgen maar zonder de resultaten.
Dit werkt door de rctx van je zoekopdracht op te geven bv: ```rctx=ASXIQQ6CMBAAwC2ENIQHePDkxXijlvgeskBTVkqLa2v0F7zBhxqJXuYwAvIKJJxfE@FTc7zM41VPD2fVMjakm1xAOSN5yKGyHIz@K$SubwfTJTtgxDJyMls46hiZ0P9iTy2b@r4YXtCaQqsMYFWryj5rJk7vowCQoUMAONQcQqwd3RIN9XYysYPCO@EF```
Dan krijg je de counts en resultaten van de facets terug. Met behulp van het parameter count kan je dit lijstje uitbreiden bv door ```&count=100``` krijg je tot 100 auteurs/topics etc terug

## schema

Nog geen nut voor gevonden. Maar het kan je altijd helpen.

* [/search](https://zoeken.oba.nl/api/v1/schema/?name=Api.v1.search.rng)
* [/details](https://zoeken.oba.nl/api/v1/schema/?name=Api.v1.details.rng)
* [/refine](https://zoeken.oba.nl/api/v1/schema/?name=Api.v1.refine.rng)
* [/schema](https://zoeken.oba.nl/api/v1/schema/?name=Api.v1.schema.rng)
* [/index](https://zoeken.oba.nl/api/v1/schema/?name=Api.v1.index.rng)
* [/availability](https://zoeken.oba.nl/api/v1/schema/?name=Api.v1.availability.rng)
* [/holdings](https://zoeken.oba.nl/api/v1/schema/?name=Api.v1.holdings.rng)
* [/resolver](https://zoeken.oba.nl/api/v1/schema/?name=Api.v1.resolver.rng)

## index

Geeft je de mogelijke waardes om te filteren zonder zoekwoorden
Dit kan in search worden gebruikt als bv ```language:dut``` om alle Nederlandstalige dingen in de api terug te krijgen.

Voorbeeld link:
```https://zoeken.oba.nl/api/v1/index/language/?pagesize=100```
Hier moet je auth nog achter natuurlijk.
Volgens index zelf zijn op de plek van language andere geschikte waardes: ```author, awards, subjects, language, format, targetaudience, readinglevel, type, classification.```

Deze komen op de plek van de x in de ```search/?q=x``` en kunnen dus gebruikt worden in combinatie met facets.

## availability

Availability is op te vragen door het endpoint availability te gebruiken.
Voor de parameter ID kan je het id meegeven die ziet er bijvoorbeeld zo uit:
```id=|oba-catalogus|1161779``` Dit kan natuurlijk ook door ipv het ID de FRABL mee te geven zoals ```frabl=17BD72D249F360A0```
Hier is verschillende informatie beschikbaar die nergens anders te vinden is zoals hoeveel van de boeken er aanwezig zijn en hoeveel er uitgeleend zijn.

## holdings

Alle holdings zijn te vinden op:
```https://zoeken.oba.nl/api/v1/holdings/root/```

Dit kan je specificeren door van ```root``` bijvoorbeeld ```root/OBA/Centrale OBA``` te maken.
Dit geeft je alle openingstijden, de locatie (lat en longitude)

## resolver
Dit geeft FRABL en Nativeid terug.
Niet altijd een goed resultaat vanwege duplicates in het systeem.
Accepteerd: 'isbn', 'issn', 'ppn', 'ean', 'frabl', 'nativeid'.

Met het isbn wat 9789025753801 is word dit dus:
```https://zoeken.oba.nl/api/v1/resolver/isbn/?id=9789025753801```
of met het FRABL
```https://zoeken.oba.nl/api/v1/resolver/frabl/?id=17BD72D249F360A0```



**Einde API README**



# Onderzoek

Zoals aan het cheatsheet te zien is heb ik aardig wat uurtjes de API onderzocht. Dit was erg leerzaam en zorgde er voor dat ik nu goed weet welke vraagstukken je mee kan sturen en welke data er op te vragen is.

## onderzoeksvragen

Aan de hand van deze data en m'n uitgebreide onderzoek heb ik een aantal onderzoeksvragen opgesteld.

* elke kleur wordt het meest gebruikt voor covers?
  * Hoe verschilt dit bij films/boeken?
  * Zijn er schrijvers met een voorkeur voor een kleur?
  * Wat is de meest voorkomende kleur per genre?
    * Kan je aan de hand van een kleur zeggen welk genre het is?
* Welke schrijvers hebben de meeste boeken op specifieke OBA locaties?
  * Als je de 'bekende' schrijvers weghaalt, welke schrijvers komen er dan uit?
* Hoeveel boeken onder de 100 pagina's zijn er toegevoegd tussen 2016 en 2017?
  * Hoe zit dit met andere jaren en aantal pagina's?
  * Zijn er meer boeken in het algemeen bijgekomen of enkel dunnere?
    * Wat is het percentage van dunne boeken bij alle toegevoegde boeken in deze jaren/decennia?
* Welke locatie heeft de meeste qua aantal/percentage uitgeleende boeken van Annie M.G Schmidt?
 * Of andere schrijvers natuurlijk
* Welke uitgevers hebben de meeste science-fiction boeken?
    * In welke steden staan de echte 'science-fiction' uitgeverijen?

Deze vragen brachten mij uiteindelijk naar deze richting:

* Hoeveel pagina's verschil is er tussen het gemiddelde aantal pagina's van Nederlandstalige boeken met (bijvoorbeeld) het thriller genre en Engelstalige boeken met ditzelfde genre?
  * Wat is het verschil tussen de minste aantal pagina's in een boek en de meeste?
    * Welk boeken zijn dit?

Mijn verwachting is dat er niet zo'n sterk verschil moet zijn tussen het gemiddelde aantal pagina's in het Nederlands of Engels als we het over een specifiek genre hebben. En zelfs al zou dat er zijn, zou dit dan betekenen dat bijvoorbeeld Duisters een langer verhaal nodig hebben om een horrorverhaal te vertellen?
Vandaar dat ik ben gaan kijken naar een specifieke auteur. Hier zijn de verhalen inmiddels vrijwel hetzelfde en kan ik goed naar de verschillende talen kijken als een indicatie of antwoord op een onderzoeksvraag.
Dit bracht mij op de volgende onderzoeksvraag:

* In welke taal is er gemiddeld het meeste aantal pagina's nodig om een verhaal te vertellen van een schrijver?
  * Welke taal is dit en hoeveel pagina's zijn hier voor nodig?
    * Is de taal waarin de schrijver het meeste pagina's nodig heeft de originele taal of een vertaling van zijn werk?

Ik heb hierbij gekeken naar de bekende auteur Stephen King. Bekend van onder andere "It" en "The Dark Tower" series.  
Deze auteur had namelijk 150+ entries in de oba database die verspreid waren over meer dan 3 verschillende talen.  

Het proces van het omzetten van data ging in principe oke.  
Dat klinkt niet heel enthousiast maar dat komt omdat ik eerst 5 functies had die ieder stapje bij beetje de data omvormde met behulp van een ```.forEach()```.  
Aangezien dit iets was wat ik kende voelde dit vertrouwd en makkelijk. 
Uiteindelijk heb ik toch moeite gedaan om een ```.filter()``` en ```.map()``` te gebruiken. Daar ben ik achteraf heel erg blij mee. Met alle fouten die ik gaande weg hiermee heb gemaakt voelt dit nu namelijk als iets wat ik onder de knie heb.  
Dit zorgde er alleen wel voor dat vrijwel alle data omgevormd word met behulp van twee of drie regels.
*Dat was tijdens het schrijven van dit. Ik heb nu ook als kleine bonus titels toegevoegd, maar nog geen moment genomen om dit te optimaliseren*

## Code review

```js
let oddElements = getOddElements(data.response);
let pageNumbers = parsePageNumbers(oddElements);
let averagePages = getStats(pageNumbers);
```
Zo begon het heel functioneel! De eerste pakte de response van de api en zette deze om in bruikbare objecten. Vervolgens werden deze objecten meegestuurd voor de volgende functie om hier de paginanummers uit te halen. Daarna werden aan de hand van deze nummers verschillende 'stats' gemaakt zoals de min,max,median,mode etc!

```js
function parsePageNumbers(data) {
  let numbers = new Array;
  let fail = 0;

  data.forEach((x, i) => {
    let number = x.substr(0, x.indexOf(' p'));
    number = Number(number.split(" ").splice(-1)[0]);

    if (isNaN(number) || number == 0) {
      fail++
    }else{
      numbers.push(number);
    }
  });

  if (fail) {console.log("I messed up the pagenumber for " + fail + " result(s) :^(")}
  return numbers
}
```

ALles na de ``` p``` moest weg, want dat duidde 'p.' of 'pagina' aan. vervolgens ging alles voor de spatie ook weg en hield ik enkel het nummer over. Daar maakte ik daarna nog een Number van zodat ik met side-effects (NaN) kon controleren of het gelukt was.

Uiteindelijk bleek er ook iets te zijn zoals 'bladen' en 'ongenummerde pagina's' en zelf erger.
Daardoor heb ik uiteindelijk met de hulp van [Wouter](https://github.com/maanlamp/) een RegEx oplossing kunnen bedenken.
Dit maakte deze functionele en superlange code tot niets meer dan een map met:
```pageNumber: Number(element.df215[0].df215[0]._.match(/\[?(\d+)\]?[\w\s]*(?:p|pagina's|bladen)/)[1]),```
Minder 'Functional' maar wel een stuk beter.
Bovendien zorgde dit er voor dat ik ook beter naar mijn code keek, eerst goed filterde en vervolgens de map functionaliteit ging gebruiken. Al met al een win!

## Visualisaties

Als eerste wilde ik kijken naar een gewone barchart. Dit leek mij de beste manier om iets te representeren wat je met elkaar moest vergelijken. Hieruit kwam de volgende schets:

![Bar chart Schets](https://github.com/DanielvandeVelde/functional-programming/blob/master/schets1.jpg "Bar chart schets")

Tevens wilde ik ook proberen om een box plot te maken. Dit bleek binnen d3 nog erg lastig te zijn. Hier heb ik uiteindelijk een library voor gevonden genaamd [picasso.js](https://picassojs.com/) of de magie van [G2](https://github.com/antvis/g2) maar dit heb ik helaas niet op tijd uit kunnen zoeken.
Ik verwachtte uit de boxplot wat duidelijkere data te krijgen door de minimale en maximale waardes te laten zien waardoor het gemiddelde wat beter overkwam aangezien de 'uitschieters' ook zichtbaar waren.

![Box plot Schets](https://github.com/DanielvandeVelde/functional-programming/blob/master/schets2.jpg "Box plot schets")

## Antwoorden(?)

Met een klein aantal entries uit het Spaans (2) lijkt het dat het Spaans toch het meeste pagina's heeft per verhaal. 
Als we kijken naar meer dan 50 verschillende entries staat Engels met gemiddeld ~421 pagina's net iets voor op Nederlands die er gemiddeld ~413 heeft. Een heel klein verschil dus. Hoewel Engels 11 boeken en Nederlands er wel 17 onder de 200 pagina's heeft. Ook heeft het Nederlands 25 boeken boven de 500 pagina's en Engels maar 16. In het Turks komt er geen enkel boek boven deze 500 pagina grens uit.

## Bevindingen
- Bij het visualiseren van de data kwam ik er achter dat er soms 1200+ pagina's waren in sommige Nederlandse boeken. Dit komt misschien omdat dit verhalen bundels zijn?
- Blijkbaar zijn er boeken van rond de 30 pagina's? Toch even de moeite waard om die in de oba op te zoeken om te kijken of dit wel volwaardige boeken zijn?
- Spanjaarden hebben heel veel pagina's nodig om een verhaal te vertellen.
- Anders dan gedacht heeft de oba de Stephen King boeken niet in het Duits of Frans maar wel in het Turks. Dat was niet een van de talen die ik verwachtte.
- Dezelfde boeken zijn meerdere malen te vinden omdat deze een ander ISBN of wat dan ook hebben. Ook al zijn het qua naam, titel en taal dezelfde boeken zijn ze toch qua pagina's anders!
- Toch maar even een [extra datavis](https://beta.observablehq.com/@danielvandevelde/boeken-van-stephen-king-op-titel) gemaakt voor alle titels. Zo kan ik iets beter zien of er unieke waardes zijn die er uit springen.
- In de [bonus](https://beta.observablehq.com/@danielvandevelde/boeken-van-stephen-king-op-titel) is duidelijk te zien dat de blauwe lijn wat verder reikt dan de oranje bij boeken met dezelfde naam. Dit geeft dus toch aan dat de Engelse taal iets meer pagina's nodig heeft dan de Nederlandse.
- Niet helemaal zeker of paginanummers de juiste maatstaaf is, al kan je deze ook niet correct vergelijken met bv. de afmeting van een boek aangezien het lettertype of lege pagina's natuurlijk ook nog een rol speelt.

## TODO

- [x] Gather data
- [x] Do something with the data
- [x] Return my own data
- [x] Helpful console
- [x] Make it functional!
- [ ] Start over. I know what to do now and I am ashamed of the abomination I've created.


# Bronnen

Dit zijn de repo's waarvan functionaliteiten als meer dan inspiratie gediend hebben.  
Rijk is een held door de oba-api een stuk bruikbaarder te maken.  
Met Folkert-Jan samen heb ik gekeken naar hoe en welke parameters we konden meegeven.  
Zijn manier van de data-parsen heb ik overgenomen.  

Helden:
[Rijk van Zanten zijn OBA-api](https://github.com/rijkvanzanten/node-oba-api)  
[Folkert-Jan zijn take op Rijk's OBA-api](https://github.com/functional-programming/node-oba-api)

Shout-out naar [@maanlamp](https://github.com/maanlamp/) voor het helpen met regEx.
