const pokemon = require('./data.js')
const game = {
    party: [],
    gyms: [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ],    
    catchPokemon: function(pokemonObj) {
        this.party.push(pokemonObj);
    
        const pokeballItem = this.items.find(item => item.name === "pokeball");
        if (pokeballItem) {
            pokeballItem.quantity--;
        }
    },
    completeGymsBelowDifficulty: function(difficultyThreshold) {
        this.gyms.forEach(gym => {
            if (gym.difficulty < difficultyThreshold) {
                gym.completed = true;
            }
        });
    }
};

/*
Exercise 12
1. Similar to Exercise 6, now complete gyms with a difficulty below 6. How will you approach this?
 (change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 12 here:
*/
// used ChatGPT
game.completeGymsBelowDifficulty(6);
console.log("Updated gyms:", game.gyms);




