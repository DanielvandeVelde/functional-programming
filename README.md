# Readme

De verschillende endpoints enzo.
Dit is m'n eigen cheatsheet, maak er gebruik van enzo. Slack me als er wat mist/incorrect is.

## search

Als je zoekt krijg je maximaal 20 resultaten. Die deze informatie doorgeven:

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
Wanneer refine=true word meegegeven dan krijg je onderaan ook de volgende facetten mee:

```
Activiteiten (nextweek/nextmonth)
Type (book/dvd/movie/sheetmusic)
Doelgroep (ageYouth/ageAdults/ageYoungAdults)
Auteur (Annie M.G. Schmidt/Dick Bruna)
Genre (thriller/science-fiction)
Topic (Nederland/geschiedenis/Amsterdam)
Language (dut/eng/mul)
pubYear (2010)
pubYearRange (2010)
```

Dit zijn facets (te filteren door bijv: facet=type(book) of facet=language(dut) als parameters te zetten achter je query: ```facet=language(dut)``` 

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

## refine

Refine geeft terug wat je ook via refine=true kan meegeven.
Door de rctx van je zoekopdracht op te geven bv ```rctx=ASXIQQ6CMBAAwC2ENIQHePDkxXijlvgeskBTVkqLa2v0F7zBhxqJXuYwAvIKJJxfE@FTc7zM41VPD2fVMjakm1xAOSN5yKGyHIz@K$SubwfTJTtgxDJyMls46hiZ0P9iTy2b@r4YXtCaQqsMYFWryj5rJk7vowCQoUMAONQcQqwd3RIN9XYysYPCO@EF```
krijg je de counts en resultaten van de facets terug. Met behulp van het parameter count kan je dit lijstje uitbreiden bv door ```&count=20```

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

Geeft je de mogelijke waardes van deze search queries.
Dit kan in search worden gebruikt als bv ```language:dut``` om alle Nederlandstalige dingen in de api terug te krijgen.

Voorbeeld link:
https://zoeken.oba.nl/api/v1/index/language/
Hier moet je auth nog achter natuurlijk.
Volgens index zelf zijn op de plek van language andere geschikte waardes: ```author, awards, subjects, language, format, targetaudience, readinglevel, type, classification.```

Deze komen op de plek van de x in de search/?q="x" en kunnen dus gebruikt worden in combinatie met facets.

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
