# Argumentation - Choix techniques Front-end

Élèves concernés :
- Arthur Barré
- Rémi Cakir
- Sarah Güngör

## React.js

Notre projet étant un webdocumentaire très fourni en contenu, une fois la structure de celui-ci déterminée nous avons rapidement décidé de nous diriger vers l’utilisation d’un framework front pour trois raisons :

- Faciliter le développement du projet à distance, grâce à une structure de composants autonomes
- Utiliser, dans la mesure du possible, une méthodologie d’Atomic Design 
> Exemple :
> le composant `Infos.jsx` est une molécule, composée de l’atome `Target.jsx` et de l’organisme `Card.jsx`
```
const Infos = ({ [list of props] }) => {
 return (
   <Container [list of props]> 	// Molecule
     <Target [list of props]/> 	// Atome
     <Card [list of props]/> 	// Organism
   </Container>
 );
};
```

- Découper et factoriser simplement notre code pour une lisibilité et une maintenabilité optimales.

Nous avons choisi React.js pour développer les connaissances/pratiques que nous avons assimilées tout au long de l’année ; à travers le projet fil rouge, entre autres. 

## Stylded Components

Nous avons utilisé cet outil de gestion de styles car il est facile à prendre en main, il nous permet de scoper notre style et permet également le passage direct de props. 

> Exemple : le composant `Infos.jsx` est utilisé plus d’une vingtaine de fois dans le site, il garde le même style mais sa position dans le viewport lui est propre à chaque utilisation.

```
<InfosContainer
topCard={ topCard }
bottomCard={ bottomCard }
rightCard={ rightCard }
leftCard={ leftCard }/>
```

```
const Container = styled.article`
  position: absolute;
  top: ${({ topCard }) => topCard}%;
  bottom: ${({ bottomCard }) => bottomCard}%;
  right: ${({ rightCard }) => rightCard}%;
  left: ${({ leftCard }) => leftCard}%;
`;
```

```
<Infos
bottom="30"
left="10"
topCard="-250"
leftCard="-460"
/>
```

De plus, `Styled Components` ne nous empêche pas d’utiliser la cascade de styles `scss` qui nous a été essentielle dans le développement de nos animations. 
Nous avons parfois utilisé des fichiers `scss` externes pour gérer nos `@keyframes` mais nous avons également découvert que `Stylded Components` proposait sa propre version.

> Exemple : 

```
import styled, { keyframes } from "styled-components";
```

```
const lighting = keyframes `
 from {
   background-color: rgba(0,0,0,0.4);
 } to {
   background-color: rgba(0, 0, 0, 0.267);
 }
`;
```

```
animation: ${lighting} .5s alternate infinite ease-out;
```

## Gsap

Cette librairie `JavaScript` d'animations est simple pour cibler les éléments du `DOM` et facilite la manipulation des animations grâce aux timelines (permet d'enchaîner successivement plusieurs animations sans se soucier des délais, ce qui est fastidieux à faire en utilisant les `@keyframes`).

La prise en main de cet outil n'a pas été homogène, certains d'entre nous ce sont plus facilement dirigé vers des animations scss pures.

## Hooks

### Store

Pour mutualiser les données de notre web-documentaire, nous avons préféré une solution `context` + `reducer` en utilisant les `hooks` (`useContext` et `useReducer`) plutôt que l’implémentation de `redux`, d’une part car de cette manière, nous instancions uniquement les fonctions dont nous avons besoin et d’une autre, nous comprenons exactement les différentes parties de celui-ci (de par sa simplicité).

### Context 

Pour “stocker” les données de notre application et les redistribuer ensuite à tous les composants enfants, nous utilisons le `context` de `React.js`. Instancié dans le fichier  source (`App.js`), et englobant les composants enfants, ceux-ci disposent des données nécessaires avec l’utilisation du `Hook` `useContext()`.

### Reducer

Pour muter les données, nous utilisons un `reducer`, nous déclarons diverses mutations et leurs actions sur le `state` puis retournons le nouveau `state`.
Ainsi, grace au `Hook` `useReducer()`, nous bénéficions de toutes les fonctions de mutations distribuées dans le `context` ( voir fichier `reducers.js`).

## Desktop First 
Format de prédilection pour le Web Documentaire, nous l'avons privilégié au mobile car notre site contient beaucoup de contenu et d'interactions à la souris.
Conscients que le mobile est un device bien plus naturellement utilisé, très nous avons décliner le site dans ce sens mais n'avons malheureusement pas pu le développer dans les temps impartis. 