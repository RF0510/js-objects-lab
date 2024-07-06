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

/*
Exercise 13
1. Create a `gymStatus` method in `game` to tally completed and incomplete gyms.
2. How will you iterate through the `gyms` array and update the tally? Remember to log the final tally.

This method should:
  - Not accept any arguments.
  - Initially create a constant `gymTally`, which is an object that has two 
    properties: `completed` and `incomplete`, both of which are initially set to 0.
  - Iterate through the objects in the `game.gyms` array and update the 
    properties on `gymTally` as follows: 
    - `completed` should count how many gyms in the array have a value of `true` 
      for their `completed` property. 
    - `incomplete` should count how many gyms in the array have a value of 
      `false` for their `completed` property.
  - Log the value of `gymTally`.
  - The method should not return anything.

For example, if five gym objects have a value of `true` on their `completed` property and three gym objects have a value of `false` on their `completed` property, the logged value would be: `{ completed: 5, incomplete: 3 }`.

Solve Exercise 13 here:
*/
//UsedCHATGPT
completeGymsBelowDifficulty: function(difficultyThreshold) {
    this.gyms.forEach(gym => {
        if (gym.difficulty < difficultyThreshold) {
            gym.completed = true;
        }
    });
},
gymStatus: function() {
    const gymTally = {
        completed: 0,
        incomplete: 0
    };

    this.gyms.forEach(gym => {
        if (gym.completed) {
            gymTally.completed++;
        } else {
            gymTally.incomplete++;
        }
    });

    console.log("Gym Tally:", gymTally);
}
};

game.completeGymsBelowDifficulty(6); 
game.gymStatus();

console.log("gmy status tally")

