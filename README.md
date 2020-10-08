## Project Name

Pokedex

## Project Description

Before embarking on a quest to become the very best, you gotta know what's out there in the world of Pokemon! This Pokedex will let you search and find each and every Pokemon discovered thus far from every region of the globe so you know how to best your opponent in battle and, most importantly, how to Catch 'em All

## API and Data Sample

PokeAPI: https://pokeapi.co/docs/v2. An API sample of the Data using Pikachu as the name for the entry:
```
{
    "abilities": [
        {
            "ability": {
                "name": "static",
                "url": "https://pokeapi.co/api/v2/ability/9/"
            },
            "is_hidden": false,
            "slot": 1
        },
        {
            "ability": {
                "name": "lightning-rod",
                "url": "https://pokeapi.co/api/v2/ability/31/"
            },
            "is_hidden": true,
            "slot": 3
        }
    ],
    "base_experience": 112,
    "forms": [
        {
            "name": "pikachu",
            "url": "https://pokeapi.co/api/v2/pokemon-form/25/"
        }
    ],
}
```

## Wireframes

Results Page:
![Imgur](https://i.imgur.com/h8aB1F9.png)

**POST MVP**
Home Page:
![Imgur](https://i.imgur.com/U8kQjqX.png)

### MVP/PostMVP 

#### MVP 

- Implement the API with proper endpoints for each section of the results (i.e. Species, Type, Bio/Info, & Weight,)
- Proper styling in the results page so the layout won't break between mobile and desktop views  


#### PostMVP  

- Rewrite the JS in React!
- Have a working "Random Pokemon" button that will select a new Pokemon at random from the homepage
- Add background music
- Potentially add a button that will redirect users to Bulbopedia from the Results page
- Add a "landing page" for asthetic purposes

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|9/21| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|9/21| Project Approval | Approved
|9/24| Core Application Structure (HTML, CSS, etc.) | Complete
|9/25| MVP | Complete
|TBD| Post MVP/Styling | Incomplete
|9/25| Presentations | Complete

## Priority Matrix

![Imgur](https://i.imgur.com/PgV0QDX.png)

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Procuring Assests for project| H | 2hrs| 1hr 7min. | ? |
| Initial HTML document w/ Buttons, and Text-Inputs to set parameters for going through the API| H | 4hrs| 48min | ? |
| Implemmenting the API w proper Endpoints for JS in the console| H | 3hrs| 9hrs 43min| ? |
| Have JS push results to the DOM| H | 5hrs| ~7hrs | ? |
| Initial Homepage CSS-Styling | H | 5hrs| 3hrs | ? |
| CSS Mobile-Styling | L | 2hrs| 30min | ? |
| Finilizing the CSS design| H | 3hrs| 30min | ? |
| POST-MVP Adding Sounds/Music | L | 2hrs| ? | ? |
| POST-MVP Creating a Proper redirect button that takes results and sends user to Bulbapedia w/ results  | L | 2hrs| ? | ? |
| Total | H | 28hrs| 24.7hrs | ? |

## Code Snippet
```
function getflavorText(pokedexEntry) {
  for (let i = 0; i < pokedexEntry.length; i++) {
    if (pokedexEntry[i].language.name === 'en') {
      // console.log(pokedexEntry[i])
      return pokedexEntry[i].flavor_text;
    }
  }
}
```


## Change Log

 9/23/2020: 
 - Moved "Have a working "Random Pokemon" button that will select a new Pokemon at random from the homepage" to post MVP to ensure a better deliverable project
 - Added a "Weight" as a section. 
 - Moddified some wireframes to better reflect the newer experience 

 9/24/2020:
 - Appended new wireframe of the newer & asthetically better experience
 - Added a new background for the `@media` query breakpoint 
 
 10/7/2020:
 - Added a new Post-MVP: Rewrite in React!
