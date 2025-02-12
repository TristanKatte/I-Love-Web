---
title: User Needs
description: Hier documenteer ik wat ik heb geleerd in sprint 17.
date: '2024-12-02'
categories:
  - Semester 3
  - Sprint 17
published: true
status: true
value: 1
---



## Scroll driven animations & View Transitions
In de eerste week van sprint 17 heb ik kennis gemaakt met de termen 'scroll driven animations en view transitions'.
Scroll driven animations zijn er in verschillende vormen en tijdens deze sprint kregen we deze <a href="https://scroll-driven-animations.style/">bron</a>.
<br>

Om verder een beetje kennis te maken met scroll driven animations, heb ik ook een <a target=_blank href="https://www.youtube.com/watch?v=UmzFk68Bwdk">Youtube</a> tutorial gevolg om meer begrip te krijgen met het
prompt wat ik in de eerste week heb gekregen.
<br>

Daarnaast heb ik ook gezien wat een view transition is en hoe je het toepast binnen Svelte:
````ts
import { onNavigate } from '$app/navigation';

onNavigate((navigation) => {
	if (!document.startViewTransition) return;

	return new Promise((resolve) => {
		document.startViewTransition(async () => {
			resolve();
			await navigation.complete;
		});
	});
});
````

## Concept roulettes
In de eerste week van sprint 17 kreeg ik het prompt 'Liquid touch and feel scroll driven animation' als concept om een
scroll driven animatie te maken op de website voor mijn opdrachtgever. Helaas was dit niet helemaal gelukt om goed uit te voeren,
maar heb wel kunnen leren hoe scroll driven animaties te werk kunnen gaan.
<br>
In week 2 van de sprint heb ik kennis gemaakt met view transitions. Hier was mijn prompt crazy blurs and gradients view transition. Het effect wat ik had gemaakt werkte wel, maar de view transition werkte eerst niet. Maar na wat hulp van Krijn heb ik het werkend gekregen.
<br>
<br>
Tot slot mochten we in de 3e week kiezen tussen een scroll driven animation of view transition of beide. Ik heb die week gekozen voor een view transition
met als prompt: Geometrische kerst view transition, met over de top toeters en bellen. Naast dat dit een view transition was, heb ik ook geleerd over de

``WebAudioAPI`` en hoe je deze kan toepassen.

## Resultaten 
Hoewel ik begrijp hoe je een scroll driven animation kan maken, is het mij niet gelukt om het te maken met het concept dat ik had gekregen.
De andere 2 weken van deze sprint is het mij gelukt om view transitions te maken met de prompts die ik daar voor kreeg metConcept roulette.

<a target=_blank href="https://red-pers-jw99-git-crazy-blurs-and-fe342e-tristankattes-projects.vercel.app/">View transition crazy blurs and gradients</a>
<br>
<a target=_blank href="https://red-pers-jw99-git-feestelijke-geo-7d299a-tristankattes-projects.vercel.app/">View transition geometrische kerstsfeer</a>
<br>
<br>

Wat ik deze sprint geleerd heb is hoe je de behoeften van de eindgebruiker makkelijker kan maken door scroll driven animations of view transitions
toe te voegen om je website meer als 'app' te laten aanvoelen.

