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
    /*
Exercise 14
1. Add a `partyCount` method to `game` that counts the number of Pokémon in your party.

This method should:
  - Not accept any arguments.
  - Count the number of Pokemon in the party.
  - return the found number of Pokemon in the party.

Solve Exercise 14 here:
*/
// UsedChatGPT
    catchPokemon: function (pokemonObj) {
        this.party.push(pokemonObj);
        const pokeballItem = this.items.find(item => item.name === "pokeball");
        if (pokeballItem) { pokeballItem.quantity--; }
    },
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
    },
    partyCount: function() {
        return this.party.length;
    }
};

console.log("Number of Pokemon in the party:", game.partyCount());


