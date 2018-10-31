# Readme

De verschillende endpoints enzo.
Dit is m'n eigen cheatsheet, maak er gebruik van enzo. Slack me als er wat mist/incorrect is.

## search

Als je zoekt krijg je maximaal 20 resultaten. Die deze informatie doorgeven:

```
Titel
Foto
Auteur (hoofd/overig)
Formaat (book/movie)
ISBN/PPN
Publicatiejaar
Uitgever (ook locatie)
Plaatssugestie (binnen bieb? soms nummer soms Latijn 873)
Taal
Onderwerpen (Dood, gedichten, meertalig etc)
Description (pagina's, afmeting)
Samenvatting
'aantekeningen' (stukken tekst)
```

Wanneer refine=true word meegegeven dan krijg je onderaan ook de volgende facetten mee mee:

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

Dit zijn facets (te filteren door bijv: facet=type(book) of facet=language(dut) als parameters te zetten achter je query: ```?facet=language(dut)``` 

Wanneer de parameter librarian op true staat krijg je deze informatie iets overzichtelijker in elementen gezet.
Ook krijg je een datum en tijd mee van wanneer (denk ik) het boek in de bibliotheek is toegevoegd.

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

##resolver

Voor als je de ID/Frabl/PPN/ISBN/etc nodig heb.
