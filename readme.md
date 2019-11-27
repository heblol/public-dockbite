# Dockbite case
Het doel van deze case is kijken of gewenste competenties aanwezig zijn. Het is dan ook niet erg als kennis van bepaalde zaken ontbreekt, maar juist belangrijk hoe deze nodige kennis dan wordt aangevuld en wordt opgezocht.

Voor deze case is er al een basaal systeempje opgezet. Deze dient aangepast te worden om extra functionaliteit toe te voegen. Het betreft een heel simpel blogsysteem. Er zijn vooralsnog alleen artikelen met een titel en inhoud. Deze kunnen weergegeven worden, maar nog niet worden toegevoegd. De opdracht is om functionaliteiten als: liken van artikelen, toevoegen van artikelen en reacties toe te voegen. Hieronder wordt dat stapsgewijs uitgelegd.

Het belangrijkst is om een beetje te wennen aan de gebruikte frameworks. Dit zal voornamelijk neerkomen op heel veel googlen, documentatie lezen, StackOverflow-vragen doorlezen etc.

Secties 1-6 bevatten opdrachten om te wennen aan de omgeving die we bij Dockbite veel gebruiken. Bij 1 en 2 wordt je redelijk bij de hand genomen, daarna worden de opdrachten snel ingewikkelder en word je veel minder geholpen.

## Vragen/opmerkingen
Zoals al eerder vermeld is goed zoeken en documentatie lezen altijd de eerste stap. Als je daarmee ergens niet uit komt, of je hebt moeite met het opzetten van de development omgeving op je PC is het het makkelijkst even iemand aan te spreken op kantoor om je erbij te helpen.

Als er inhoudelijk fouten zitten in het project of deze handleiding, dan kun je een issue of pull-request maken en zal ik er naar kijken.

## Inhoudsopgave

**[Opzet](#opzet)**<br>
**[Project Starten](#project-starten)**<br>
**[1 Back-end Like](#1-back-end-like)**<br>
**[2 Front-end Like](#2-front-end-like)**<br>
**[3 Front-end aantal artikelen](#3-front-end-aantal-artikelen)**<br>
**[4 Front-end artikel toevoegen](#4-front-end-artikel-toevoegen)**<br>
**[5 Voeg reacties toe](#5-voeg-reacties-toe)**<br>
**[6 Verdere ideeen](#6-verdere-ideeen)**

## Opzet
### Back-end
Het project bestaat uit twee helften: een back-end en een front-end. De back-end bevat modellen (in dit geval alleen het `Article` model) en logica die op die modellen kunnen worden toegepast. De back-end is een zogenaamde REST API (https://restfulapi.net/) en bevat API endpoints als `create`, `find`, `delete`, etc., voor de modellen.

De API endpoints worden aangesproken door een HTTP request te doen naar de specifieke endpoint. Als je lokaal een server draait op poort `3000` bijvoorbeeld: http://localhost:3000/api/Article. Het maakt hierbij ook nog uit welke HTTP method gebruikt wordt, de meest voorkomende zijn `GET`, `POST`, `PATCH`, `PUT` en `DELETE` (https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods).

Deze kun je maken vanuit je browser of vanuit een programma'tje als [Postman](https://www.getpostman.com/). Voor dit projectje zal dat echter niet nodig zijn, er is een ingebouwde 'Api Explorer' die netjes alle endpoints laat zien en je de mogelijkheid geeft er requests naar te doen. Daarover straks meer.

Tot slot is de back-end verantwoordelijk voor het opslaan van data, dit gebeurt in de regel d.m.v. een database (zoals [MongoDB](https://www.mongodb.com/) of [MySQL](https://www.mysql.com/)). Voor test doeleinden kan het ook volstaan de data alleen tijdelijk vast te houden, dan blijft de data in het memory van de server en blijft het bestaan totdat de server gestopt wordt.

Voor de back-end maakt dit project gebruik van het framework genaamd [LoopBack](https://loopback.io/lb3/getting-started). Dit framework zorgt ervoor dat modellen gemakkelijk toegevoegd kunnen worden en bevat veel functionaliteit, zodat het developen een stuk sneller en gemakkelijker gaat.

### Front-end
De front-end is hetgeen de gebruiker uiteindelijk te zien krijgt, het zijn de pagina's in de webbrowser inclusief mooie opmaak, eventuele routing, formulieren, pop-ups, noem maar op.

De front-end wordt door de browser van de gebruiker getoond en bevat op zichzelf geen data. De front-end dient dus d.m.v. requests de data van de back-end op te halen om deze aan de gebruiker te tonen.

Front-ends bestaan in principe uit drie onderdelen: HTML, CSS en Javascript. HTML (Hyper Text Markup Language) bepaalt de structuur van een pagina; dingen als knoppen, invoervelden, tekst, kopjes, links, etc. CSS (Cascaded Style Sheets) verzorgen de opmaak: kleuren, plaatsing van onderdelen, lettertypes, etc. Javascript is een programmeertaal die aan de gebruiker kant zorgt voor interactiviteit en is tegenwoordig niet meer weg te denken. D.m.v. Javascript kunnen bijvoorbeeld de requests naar de back-end worden uitgevoerd.

In dit project (en in heel veel projecten) wordt gebruik gemaakt van het front-end framework [Angular](https://angular.io/). Angular werkt met TypeScript, wat een uitbreiding is van Javascript.

## Project starten
### Benodigdheden
Aangezien beide frameworks gebaseerd zijn op Node.js, is het belangrijk Node te installeren op je PC. Hoe dit op Windows werkt weet ik niet, maar wordt hier ongetwijfeld uitgelegd: https://nodejs.org/en/. Op Linux kan dit over het algemeen via de package manager van je distro (apt, pacman, ...). Hierbij hoort ook de node package manager npm.

Een goede tekst editor is erg prettig, ik raad [VS Code](https://code.visualstudio.com/) aan.

Om de front-end te starten is ook de Angular cli nodig, deze installeer je als volgt ($ hoort er niet bij, maar geeft aan dat het vanuit een shell wordt gerund):

```
$ npm install -g @angular/cli
```

### Back-end starten
De back-end server kan gestart worden door vanuit de root map van het project het volgende commando uit te voeren:

```
$ npm start
```

Dit commando zal eerst de benodigde packages installeren, daarna middels de `loopback-sdk-builder` modellen aan de front-end kant aanmaken en tot slot de server starten. Als dit goed gaat zie je aan het einde

```
Web server listening at: http://localhost:3000
Browse your REST API at http://localhost:3000/explorer
```

Je server draait nu en je kan in je browser naar http://localhost:3000 te gaan om hem in werking te zien, dan zie je als het goed is wanneer hij gestart is en hoe lang hij al online is.

Je kan ook naar http://localhost:3000/explorer, dit is de Api Explorer die ik al eerder aanhaalde. Hier zie je het model `Article`, als je daar op klikt zie je alle endpoints die daarbij horen.

Je kan hier proberen de artikelen te laden door de `GET` endpoint `/Articles` uit te voeren ('Try it out').
> #0.1 Zie je de twee artikelen?

Je kan ook een nieuw artikel toevoegen d.m.v. de `POST` endpoint `/Articles`.
> #0.2 Lukt het nieuwe artikelen toe te voegen en zie je die vervolgens verschijnen als je ze weer ophaalt?

### Front-end starten
Als de back-end werkt is het tijd om de front-end te starten. **Zorg dat je de back-end laat draaien, anders kan de front-end geen data ophalen!**

Vanuit de `client` map kan met hetvolgende commando de front-end worden gestart:

```
$ ng serve
```

Na het compilen zal je als alles goed gaat uiteindelijk de regel `** Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ **` zien. Dit betekent dat je de front-end kan open in je browser op http://localhost:4200.

Als het goed is krijg je daar een lijstje te zien met de artikelen die je ook via de API Explorer zag.

Zo ja, dan is het project helemaal gestart en kan er functionaliteit worden toegevoegd!

## 1 Back-end like
Het artikel-model moet functionaliteit krijgen om ge-'liked' te worden. Het model wordt gedefinieerd in `server/models/article.json`. In `server/models/article.js` wordt verder functionaliteit toegevoegd. Voor meer informatie: https://loopback.io/doc/en/lb3/Defining-models.html.

> #1.1 Welke velden voor het artikelmodel worden gedefinieerd? En welke methods (anders dan de standaard create, find, etc...) ?

Om een artikel te liken is het nodig dat een artikel een aantal likes heeft, het moet namelijk bijgehouden worden.

> #1.2 Voeg een `likes` veld toe aan het model wat een aantal likes kan bijhouden. Zorg ervoor dat deze standaard 0 is (als een nieuw artikel aangemaakt wordt).

Als dit gelukt is, moet je via de Api Explorer het veld bij de artikelen zien verschijnen. Deze zou voor elk artikel de waarde 0 moeten hebben.

De volgende stap is om de logica te implementeren om likes toe te voegen. In `server/models/article.js` is al een (lege) method om dit te doen. Deze kan worden aangesproken vanuit de Api Explorer door de `like` endpoint uit te voeren.

Handige links: https://loopback.io/doc/en/lb3/Remote-methods.html, https://loopback.io/doc/en/lb3/Creating-updating-and-deleting-data.html

> #1.3 Voeg functionaliteit toe aan de `like` method, zodat de hoeveel likes van een artikel met 1 verhoogd wordt, de nieuwe hoeveelheid likes moet geretourneerd worden. Test of dit werkt d.m.v. van de Api Explorer.

Als dat gelukt is, is de back-end voorlopig klaar.

## 2 Front-end like
Aan de front-end kant staan er nog geen aantal likes bij de artikelen. Die moeten er natuurlijk wel staan.

De HTML van de pagina staat in `client/src/app/app.component.html`, de bijbehorende TypeScript in `client/src/app/app.component.ts`. Kijk even door deze files heen en lees de comments.

> #2.1 Vervang de '...' door het daadwerkelijk aantal likes. Als je nu vanuit de Api Explorer een artikel liked en de pagina ververst, is de extra like dan verschenen?

De volgende stap is om een artikel te liken vanuit de front-end. De knop is er al, maar deze doet nu nog niets.

> #2.2 Gebruik google en de Angular documentatie om een klik-event te binden aan de knop en zorg dat deze de betreffende functie in de TypeScript uitvoert.

>TIP: Je kan `console.log()` gebruiken om te testen wat er gebeurt. De logs, de argumenten van `console.log`, verschijnen in je browser in de developer tools, voor Chrome/Firefox open je deze met F12 en dan het tabje console.

Tot slot moet deze functie de `like` method op het artikel uitvoeren middels de betreffend API endpoint, gebruik hier de `ArticleApi` voor zoals beschreven in de file.

> #2.3 Voer de `like`-method uit. Gebruik eventueel de console om de response te zien, is het gelukt? Je kan ook het network-tabje van de developer tools gebruiken in je browser om de request te zien.

Als het gelukt is zie je de nieuwe hoeveelheid likes als je de pagina ververst. Natuurlijk is het wel netjes als dat ook gebeurt zonder te verversen.

> #2.4 Kan je de functie zo aanpassen dat na een succesvolle like, de hoeveelheid likes van dat artikel (of van allemaal) gelijk geupdatet wordt (dus zonder de pagina te verversen)?

Als dit allemaal werkt dan, mooi, de like functionaliteit is toegevoegd! Eventueel zijn hieronder nog een drietal opdrachten die wat vrijer zijn en meer uitzoekwerk vergen.

## 3 Front-end aantal artikelen
Het is aardig om te weten hoeveel artikelen er geplaatst zijn.

> #3.1 Voeg een totaal aantal artikelen toe bovenaan de pagina. Bedenk hoe je het aantal bepaalt. Dit kan zowel binnen de front-end of via de back-end.

## 4 Front-end artikel toevoegen
Via de front-end kunnen nog geen artikelen toegevoegd worden. Dit zou een leuke toevoeging zijn.

> #4.1 Maak middels HTML een formulier voor een nieuw artikel, dus een invoerveld voor de titel, body en een knop om te verzenden.

Dit formulier moet verzonden kunnen worden. Er zijn verschillende manieren om dit te doen. Voor het uitlezen van de data kan gebruikt gemaakt worden van [Angular Reactive Forms](https://angular.io/guide/reactive-forms) of via simpele model binding met invoervelden. Vervolgens kan het verzenden via dezelfde `ArticleApi`.

> #4.2 Implementeer een functie die de waarden van het formulier haalt en verzendt naar de back-end.

En uiteraard, voor de netheid:

> #4.3 Zorg ervoor dat het nieuw gemaakte artikel direct wordt toegevoegd aan de lijst. En maak bijvoorbeeld het formulier weer leeg voor een volgend artikel.

## 5 Voeg reacties toe
Dit is gelijk een grote stap verder, voor als het voorgaande erg makkelijk ging. Het zou leuk zijn reacties te hebben op de artikelen. Hiervoor dient een nieuw model te worden gemaakt, namelijk `Reply`.

> #5.1 Voeg een nieuw model toe: `Reply`. Zoek hiervoor door de Loopback documentatie of probeer het `Article` model over te nemen en aan te passen. TIP: het model `Article` wordt niet alleen gedefinieerd in `article.json` en `article.js`, ook nog ergens anders. Zie ook https://loopback.io/doc/en/lb3/Attaching-models-to-data-sources.html.

Deze moet gekoppeld zijn aan het model `Article`, ofwel, een reply hoort bij een specifiek artikel.

> #5.2 Leg een relatie tussen het `Article` en het `Reply` model. Zie ook https://loopback.io/doc/en/lb3/Creating-model-relations.html.

Aan de front-end moeten natuurlijk ook dingen gebeuren:

> #5.3 Voeg een formulier toe (eventueel eerst verborgen, totdat deze opengeklapt wordt) aan elk artikel voor een reactie. Deze moet ook verzonden kunnen worden.

> #5.4 Toon alle reacties bij alle artikelen.

## 6 Verdere ideeën
Als je verder nog wil spelen en oefenen met dit projectje zijn hier nog wat ideeën die je zou kunnen uitproberen:

* Als datasource wordt nu memory gebruikt, oftewel na een server restart is alle data weg. Probeer dat te vervangen door een database als MongoDB of MySQL
* Styling toevoegen voor de front-end, bijvoorbeeld door gebruik te maken van [Bootstrap](https://getbootstrap.com/)
* Voorkomen dat iemand meerdere keren hetzelfde artikel kan liken
* De front-end uitbreiden met meerdere pagina's en routing
* Tijd/datum en auteur toevoegen aan artikelen/reacties
* Paginering of inifiniscroll toevoegen aan de lijst artikelen
* Inloggen, bijvoorbeeld alleen artikelen kunnen toevoegen als je ingelogd bent, maar altijd reageren/liken.
