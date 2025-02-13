---
title: Don't Repeat yourself
description: Hier documenteer ik wat ik heb geleerd in sprint 16.
date: '2024-11-11'
categories:
  - Semester 3
  - Sprint 16
published: true
status: true
value: 1
---

<script>
  import TNR from '$lib/assets/the-new-responsive.png'
</script>

## Component Libraries
Met behulp van component libraries kan je verschillende structuren toepassen op je project. Het zijn eigenlijk mapjes
waarin je je componenten neerzet en kan gebruiken en hergebruiken wanneer dat nodig is. 
<br>
Het voordeel van component libraries is dat je elementen makkelijk kan hergebruiken, je product krijgt een consistente uitstraling,
efficientie binnen een project gaat omhoog en snel nieuwe functies kunnen toevoegen terwijl de kwaliteit behouden blijft. Ook kan je je eigen library uploaden, zodat het door andere developers gebruikt kan worden.



## Conventies binnen libraries
- Naamgeving van componenten 
- Naamgeving van variaties van componenten.
- Naamgeving van properties binnen componenten.
<br>
<br>

**Metanaamgeving**: Een hiërarchische benadering om het over bepaalde soorten componenten te hebben.
- Pages: Volledige pagina's of schermen met een specifieke context bestaand uit sections. Bijvoorbeeld de homepage.

- Sections: Secties van een pagina bestaand uit componenten. Bijvoorbeeld een her-banner, een content-secie, een footer.

- Components: Herbruikbare componenten binnen de sections. Bijvoorbeeld knoppen, formulieren, kaarten.

### Lego structuur
Libraries kan je ook aanzien als Lego steentjes van kleine stukjes, naar de zeer grote stukken.

- Bricks: kleine, niet herbruikbare componenten als icoontjes of een tekstblok.
- Blocks: Herbruikbare basiscomponenten, zoals knoppen of afbeeldingen.
- Assemblages: Componenten die zijn gecombineerd tot 1 geheel en die een specifieke functie hebben, zoals een formulier met knop.
- Constructions: complexe pagina-sections of templates, dashboards.

### Atomic Design

- Atoms: De basis bouwblokken van je pagina, HTML elementen.
- Molecules: een groep atoms bij elkaar.
- Organism: een groep molecules bij elkaar.
- Templates: een groep organismen bij elkaar.
- Pages: een template met specifieke content.

### Presenter container

- Presentational components: Een component die alleen de presentatie regelt. Bijvoorbeeld een afbeelding.
- Container components: Een component die de inhoud presenteert en de structuur regelt.
- Compositions: Een groep presentational en container components die pagina-secties vormen.

## RAPPE Websites
Deze sprint heb ik ook een nieuwe term geleerd over hoe je projecten oplevert, namelijk 
- Responsive
- Accessible
- Performance
- Progressive
- Enhanced

Websites. hierin staan de overdrachtdocumenten en alle code netjes geschreven aan de hand van opgestelde conventies.

## Morphological charts

Een methode om onverwachte alternatieven te bedenken voor complexe designs. Dit doe je door een diagram te maken van alle mogelijke componenten die je nodig hebt.

Je hebt verschillende vragen waar je 3 oplossingen voor moet hebben, denk bijvoorbeeld aan problemen voor in een verhaal: COVID, Verliefdheid of een Botbreuk. Hierbij kun je alle vragen combineren waardoor je onverwachte alternatieven krijgt voor een verhaal.

## The new responsive
Fluid grids, flexible images, and media queries are three technical ingredients for responsive web design, but it also requires a different way of thinking.

- Ethan Marcote
<br>
<br>
<img alt="The new responsive chart" src={TNR} />


## Media query features
<strong>Level 3:<span>New Features since 21 May 2024</span></strong>

- width
- height
- grid
- scan
- device-height
- device-width
- resolution
- monochrome
- orientation
- aspect-ratio
- device-aspect-ratio
- color
- color-index

<strong>Level 4 <span>New Features since 25 December 2021</span></strong>

- update
- overflow-block
- overflow-inline
- color-gamut
- pointer 
- hover
- any-pointer
- any-hover

<strong>Level 5<span>New Features since 18 December 2021</span></strong>

- environment-blending
- dynamic-range
- inverted-colors
- nav-controls
- scripting
- prefers-color-sheme
- forced-colors
- prefers-contrast
- prefers-reduced-transparency
- prefers-reduced-motion
- prefers-reduced-data

## Gestalt Principes
Gestalt principes zijn een set van regels die helpen bij het ontwerpen van een samenhangend design.

- **De wet van nabijheid:** <br>
We groeperen figuren die dicht bij elkaar staan. Onze hersenen vinden dat deze bij elkaar horen.

- **De wet van continuïteit:** <br>
We zien losse figuren die naast elkaar in een lijn of bocht lopen als geheel.

- **De wet van gelijkheid:** <br>
Onze hersenen vinden dat figuren die er hetzelfde uitzien bij elkaar horen.

- **De wet van geslotenheid:** <br>
Onze hersenen maken figuren af waarbij een stukje ontbreekt.

- **De wet van overeenkomst:** <br>
Figuren die in dezelfde richting bewegen geven onze hersenen het gevoel dat ze bij elkaar horen. 

- **De wet van voor- en achtergrond:** <br>
Onze hersenen onderscheiden vormen die op een achtergrond staan als losstaand figuur.

- **De wet van symmetrie:** <br>
Symmetrische figuren geven onze hersenen het idee dat dingen geordend zijn. Het geeft rust.

### Wat is de Law of Proximity?
Objecten die dicht bij elkaar staan hebben de neiging om gegroepeerd te worden door ons brein. Wat zijn hier de voordelen van?
- Het helpt de gebruiker om informatie sneller en efficienter te gebruiken
- Het helpt een relatie te creeëren met objecten in de buurt
- De objecten hebben vaak dezelfde eigenschappen of functionaliteiten

## State Management
Toestand van je applicatie of component.

Shared persistent state:
Je wilt voorkomen dat aanpassingen in je website, voor iedereen aangepast worden.

- Non shared persistent state:

- Non shared non persistent state:

- Non shared semi persistent state:

persistent is of de waarde wordt behouden of niet

Svelte persistent stores

Shared state:
alle gebruikers delen dezelfde states.

