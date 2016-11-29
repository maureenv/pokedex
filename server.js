// do npm install express then do node server.js since express is installed in server.js. To view json data go to http://localhost:8000/pokemon to view all customers or /orders for orders. This is because express is using app.get for thos categories
var express = require('express'),
    app = express();

app.use(express.static(__dirname + '/'));

// app.get('/pokemon/:id', function(req, res) {
//     var pokemonId = parseInt(req.params.id);
//     var data = {};
//     for (var i=0,len=pokemon.length;i<len;i++) {
//         if (pokemon[i].id === pokemonId) {
//            data = pokemon[i];
//            break;
//         }
//     }
//     res.json(data);
// });

app.get('/pokemon', function(req, res) {
    res.json(pokemon);
    //res.json(500, { error: 'An error has occurred!' });
});

// app.get('/orders', function(req, res) {
//     var orders = [];
//     for (var i=0,len=customers.length;i<len;i++) {
//         if (customers[i].orders) {
//             for (var j=0,ordersLen=customers[i].orders.length;j<ordersLen;j++) {
//                 orders.push(customers[i].orders[j]);
//             }
//         }
//     }
//     res.json(orders);
// });
//
// app.delete('/pokemon/:id', function(req, res) {
//     var pokemonId = parseInt(req.params.id);
//     var data = { status: true };
//     for (var i=0,len=pokemon.length;i<len;i++) {
//         if (pokemon[i].id === pokemonId) {
//            pokemon.splice(i,1);
//            data = { status: true };
//            break;
//         }
//     }
//     res.json(data);
// });

app.listen(8000);

console.log('Express listening on port 8000');

var pokemon =
[
{
  "Number":"001",
  "Name":"Bulbasaur",
  "Classification":"Seed Pokèmon",
  "Image":"images/001.png",
  "Types":[
     "Grass",
     "Poison"
  ],
  "Resistant":[
     "Water",
     "Electric",
     "Grass",
     "Fighting",
     "Fairy"
  ],
  "Weaknesses":[
     "Fire",
     "Ice",
     "Flying",
     "Psychic"
  ],
  "Fast Attack(s)":[
     {
        "Name":"Tackle",
        "Type":"Normal",
        "Damage":12
     },
     {
        "Name":"Vine Whip",
        "Type":"Grass",
        "Damage":7
     }
  ],
  "Special Attack(s)":[
     {
        "Name":"Power Whip",
        "Type":"Grass",
        "Damage":70
     },
     {
        "Name":"Seed Bomb",
        "Type":"Grass",
        "Damage":40
     },
     {
        "Name":"Sludge Bomb",
        "Type":"Poison",
        "Damage":55
     }
  ],
  "Weight":{
     "Minimum":"6.04kg",
     "Maximum":"7.76kg"
  },
  "Height":{
     "Minimum":"0.61m",
     "Maximum":"0.79m"
  },
  "FleeRate":0.1,
  "Next Evolution Requirements":{
     "Amount":25,
     "Name":"Bulbasaur candies"
  },
  "Next evolution(s)":[
     {
        "Number":2,
        "Name":"Ivysaur"
     },
     {
        "Number":3,
        "Name":"Venusaur"
     }
  ],
  "MaxCP":951,
  "MaxHP":1071
},
{
  "Number":"002",
  "Name":"Ivysaur",
  "Classification":"Seed Pokèmon",
  "Image":"images/002.png",
  "Types":[
     "Grass",
     "Poison"
  ],
  "Resistant":[
     "Water",
     "Electric",
     "Grass",
     "Fighting",
     "Fairy"
  ],
  "Weaknesses":[
     "Fire",
     "Ice",
     "Flying",
     "Psychic"
  ],
  "Fast Attack(s)":[
     {
        "Name":"Razor Leaf",
        "Type":"Grass",
        "Damage":15
     },
     {
        "Name":"Vine Whip",
        "Type":"Grass",
        "Damage":7
     }
  ],
  "Special Attack(s)":[
     {
        "Name":"Power Whip",
        "Type":"Grass",
        "Damage":70
     },
     {
        "Name":"Sludge Bomb",
        "Type":"Poison",
        "Damage":55
     },
     {
        "Name":"Solar Beam",
        "Type":"Grass",
        "Damage":120
     }
  ],
  "Weight":{
     "Minimum":"11.38kg",
     "Maximum":"14.63kg"
  },
  "Height":{
     "Minimum":"0.88m",
     "Maximum":"1.13m"
  },
  "FleeRate":0.07,
  "Previous evolution(s)":[
     {
        "Number":1,
        "Name":"Bulbasaur"
     }
  ],
  "Next Evolution Requirements":{
     "Amount":100,
     "Name":"Bulbasaur candies"
  },
  "Next evolution(s)":[
     {
        "Number":3,
        "Name":"Venusaur"
     }
  ],
  "MaxCP":1483,
  "MaxHP":1632
},
{
  "Number":"003",
  "Name":"Venusaur",
  "Classification":"Seed Pokèmon",
  "Image":"images/003.png",
  "Types":[
     "Grass",
     "Poison"
  ],
  "Resistant":[
     "Water",
     "Electric",
     "Grass",
     "Fighting",
     "Fairy"
  ],
  "Weaknesses":[
     "Fire",
     "Ice",
     "Flying",
     "Psychic"
  ],
  "Fast Attack(s)":[
     {
        "Name":"Razor Leaf",
        "Type":"Grass",
        "Damage":15
     },
     {
        "Name":"Vine Whip",
        "Type":"Grass",
        "Damage":7
     }
  ],
  "Special Attack(s)":[
     {
        "Name":"Petal Blizzard",
        "Type":"Grass",
        "Damage":65
     },
     {
        "Name":"Sludge Bomb",
        "Type":"Poison",
        "Damage":55
     },
     {
        "Name":"Solar Beam",
        "Type":"Grass",
        "Damage":120
     }
  ],
  "Weight":{
     "Minimum":"87.5kg",
     "Maximum":"112.5kg"
  },
  "Height":{
     "Minimum":"1.75m",
     "Maximum":"2.25m"
  },
  "FleeRate":0.05,
  "Previous evolution(s)":[
     {
        "Number":1,
        "Name":"Bulbasaur"
     },
     {
        "Number":2,
        "Name":"Ivysaur"
     }
  ],
  "MaxCP":2392,
  "MaxHP":2580
},
{
  "Number":"004",
  "Name":"Charmander",
  "Classification":"Lizard Pokèmon",
  "Image":"images/004.png",
  "Types":[
     "Fire"
  ],
  "Resistant":[
     "Fire",
     "Grass",
     "Ice",
     "Bug",
     "Steel",
     "Fairy"
  ],
  "Weaknesses":[
     "Water",
     "Ground",
     "Rock"
  ],
  "Fast Attack(s)":[
     {
        "Name":"Ember",
        "Type":"Fire",
        "Damage":10
     },
     {
        "Name":"Scratch",
        "Type":"Normal",
        "Damage":6
     }
  ],
  "Special Attack(s)":[
     {
        "Name":"Flame Burst",
        "Type":"Fire",
        "Damage":30
     },
     {
        "Name":"Flame Charge",
        "Type":"Fire",
        "Damage":25
     },
     {
        "Name":"Flamethrower",
        "Type":"Fire",
        "Damage":55
     }
  ],
  "Weight":{
     "Minimum":"7.44kg",
     "Maximum":"9.56kg"
  },
  "Height":{
     "Minimum":"0.53m",
     "Maximum":"0.68m"
  },
  "FleeRate":0.1,
  "Next Evolution Requirements":{
     "Amount":25,
     "Name":"Charmander candies"
  },
  "Next evolution(s)":[
     {
        "Number":5,
        "Name":"Charmeleon"
     },
     {
        "Number":6,
        "Name":"Charizard"
     }
  ],
  "MaxCP":841,
  "MaxHP":955
},
{
  "Number":"005",
  "Name":"Charmeleon",
  "Classification":"Flame Pokèmon",
  "Image":"images/005.png",
  "Types":[
     "Fire"
  ],
  "Resistant":[
     "Fire",
     "Grass",
     "Ice",
     "Bug",
     "Steel",
     "Fairy"
  ],
  "Weaknesses":[
     "Water",
     "Ground",
     "Rock"
  ],
  "Fast Attack(s)":[
     {
        "Name":"Ember",
        "Type":"Fire",
        "Damage":10
     },
     {
        "Name":"Scratch",
        "Type":"Normal",
        "Damage":6
     }
  ],
  "Special Attack(s)":[
     {
        "Name":"Fire Punch",
        "Type":"Fire",
        "Damage":40
     },
     {
        "Name":"Flame Burst",
        "Type":"Fire",
        "Damage":30
     },
     {
        "Name":"Flamethrower",
        "Type":"Fire",
        "Damage":55
     }
  ],
  "Weight":{
     "Minimum":"16.63kg",
     "Maximum":"21.38kg"
  },
  "Height":{
     "Minimum":"0.96m",
     "Maximum":"1.24m"
  },
  "FleeRate":0.07,
  "Previous evolution(s)":[
     {
        "Number":4,
        "Name":"Charmander"
     }
  ],
  "Next Evolution Requirements":{
     "Amount":100,
     "Name":"Charmander candies"
  },
  "Next evolution(s)":[
     {
        "Number":6,
        "Name":"Charizard"
     }
  ],
  "MaxCP":1411,
  "MaxHP":1557
},
{
  "Number":"006",
  "Name":"Charizard",
  "Classification":"Flame Pokèmon",
  "Image":"images/006.png",
  "Types":[
     "Fire",
     "Flying"
  ],
  "Resistant":[
     "Fire",
     "Grass",
     "Fighting",
     "Bug",
     "Steel",
     "Fairy"
  ],
  "Weaknesses":[
     "Water",
     "Electric",
     "Rock"
  ],
  "Fast Attack(s)":[
     {
        "Name":"Ember",
        "Type":"Fire",
        "Damage":10
     },
     {
        "Name":"Wing Attack",
        "Type":"Flying",
        "Damage":9
     }
  ],
  "Special Attack(s)":[
     {
        "Name":"Dragon Claw",
        "Type":"Dragon",
        "Damage":35
     },
     {
        "Name":"Fire Blast",
        "Type":"Fire",
        "Damage":100
     },
     {
        "Name":"Flamethrower",
        "Type":"Fire",
        "Damage":55
     }
  ],
  "Weight":{
     "Minimum":"79.19kg",
     "Maximum":"101.81kg"
  },
  "Height":{
     "Minimum":"1.49m",
     "Maximum":"1.91m"
  },
  "FleeRate":0.05,
  "Previous evolution(s)":[
     {
        "Number":4,
        "Name":"Charmander"
     },
     {
        "Number":5,
        "Name":"Charmeleon"
     }
  ],
  "MaxCP":2413,
  "MaxHP":2602
},
{
  "Number":"007",
  "Name":"Squirtle",
  "Classification":"Tiny Turtle Pokèmon",
  "Image":"images/007.png",
  "Types":[
     "Water"
  ],
  "Resistant":[
     "Fire",
     "Water",
     "Ice",
     "Steel"
  ],
  "Weaknesses":[
     "Electric",
     "Grass"
  ],
  "Fast Attack(s)":[
     {
        "Name":"Bubble",
        "Type":"Water",
        "Damage":25
     },
     {
        "Name":"Tackle",
        "Type":"Normal",
        "Damage":12
     }
  ],
  "Special Attack(s)":[
     {
        "Name":"Aqua Jet",
        "Type":"Water",
        "Damage":25
     },
     {
        "Name":"Aqua Tail",
        "Type":"Water",
        "Damage":45
     },
     {
        "Name":"Water Pulse",
        "Type":"Water",
        "Damage":35
     }
  ],
  "Weight":{
     "Minimum":"7.88kg",
     "Maximum":"10.13kg"
  },
  "Height":{
     "Minimum":"0.44m",
     "Maximum":"0.56m"
  },
  "FleeRate":0.1,
  "Next Evolution Requirements":{
     "Amount":25,
     "Name":"Squirtle candies"
  },
  "Next evolution(s)":[
     {
        "Number":8,
        "Name":"Wartortle"
     },
     {
        "Number":9,
        "Name":"Blastoise"
     }
  ],
  "MaxCP":891,
  "MaxHP":1008
},
{
  "Number":"008",
  "Name":"Wartortle",
  "Classification":"Turtle Pokèmon",
  "Image":"images/008.png",
  "Types":[
     "Water"
  ],
  "Resistant":[
     "Fire",
     "Water",
     "Ice",
     "Steel"
  ],
  "Weaknesses":[
     "Electric",
     "Grass"
  ],
  "Fast Attack(s)":[
     {
        "Name":"Bite",
        "Type":"Dark",
        "Damage":6
     },
     {
        "Name":"Water Gun",
        "Type":"Water",
        "Damage":6
     }
  ],
  "Special Attack(s)":[
     {
        "Name":"Aqua Jet",
        "Type":"Water",
        "Damage":25
     },
     {
        "Name":"Gunk Shot",
        "Type":"Poison",
        "Damage":65
     },
     {
        "Name":"Hydro Pump",
        "Type":"Water",
        "Damage":90
     },
     {
        "Name":"Ice Beam",
        "Type":"Ice",
        "Damage":65
     }
  ],
  "Weight":{
     "Minimum":"19.69kg",
     "Maximum":"25.31kg"
  },
  "Height":{
     "Minimum":"0.88m",
     "Maximum":"1.13m"
  },
  "FleeRate":0.07,
  "Previous evolution(s)":[
     {
        "Number":7,
        "Name":"Squirtle"
     }
  ],
  "Next Evolution Requirements":{
     "Amount":100,
     "Name":"Squirtle candies"
  },
  "Next evolution(s)":[
     {
        "Number":9,
        "Name":"Blastoise"
     }
  ],
  "MaxCP":1435,
  "MaxHP":1582
},
{
  "Number":"009",
  "Name":"Blastoise",
  "Classification":"Shellfish Pokèmon",
  "Image":"images/009.png",
  "Types":[
     "Water"
  ],
  "Resistant":[
     "Fire",
     "Water",
     "Ice",
     "Steel"
  ],
  "Weaknesses":[
     "Electric",
     "Grass"
  ],
  "Fast Attack(s)":[
     {
        "Name":"Bite",
        "Type":"Dark",
        "Damage":6
     },
     {
        "Name":"Water Gun",
        "Type":"Water",
        "Damage":6
     }
  ],
  "Special Attack(s)":[
     {
        "Name":"Flash Cannon",
        "Type":"Steel",
        "Damage":60
     },
     {
        "Name":"Gunk Shot",
        "Type":"Poison",
        "Damage":65
     },
     {
        "Name":"Hydro Pump",
        "Type":"Water",
        "Damage":90
     },
     {
        "Name":"Ice Beam",
        "Type":"Ice",
        "Damage":65
     }
  ],
  "Weight":{
     "Minimum":"74.81kg",
     "Maximum":"96.19kg"
  },
  "Height":{
     "Minimum":"1.4m",
     "Maximum":"1.8m"
  },
  "FleeRate":0.05,
  "Previous evolution(s)":[
     {
        "Number":7,
        "Name":"Squirtle"
     },
     {
        "Number":8,
        "Name":"Wartortle"
     }
  ],
  "MaxCP":2355,
  "MaxHP":2542
},
{
"Number":"025",
"Name":"Pikachu",
"Classification":"Mouse Pokèmon",
"Image":"images/025.png",
"Types":[
  "Electric"
],
"Resistant":[
  "Electric",
  "Flying",
  "Steel"
],
"Weaknesses":[
  "Ground"
],
"Fast Attack(s)":[
  {
     "Name":"Quick Attack",
     "Type":"Normal",
     "Damage":10
  },
  {
     "Name":"Thunder Shock",
     "Type":"Electric",
     "Damage":5
  }
],
"Special Attack(s)":[
  {
     "Name":"Discharge",
     "Type":"Electric",
     "Damage":35
  },
  {
     "Name":"Thunder",
     "Type":"Electric",
     "Damage":100
  },
  {
     "Name":"Thunderbolt",
     "Type":"Electric",
     "Damage":55
  }
],
"Weight":{
  "Minimum":"5.25kg",
  "Maximum":"6.75kg"
},
"Height":{
  "Minimum":"0.35m",
  "Maximum":"0.45m"
},
"FleeRate":0.1,
"Next Evolution Requirements":{
  "Amount":50,
  "Name":"Pikachu candies"
},
"Next evolution(s)":[
  {
     "Number":26,
     "Name":"Raichu"
  }
],
"MaxCP":777,
"MaxHP":887
},
{
"Number":"026",
"Name":"Raichu",
"Classification":"Mouse Pokèmon",
"Image":"images/026.png",
"Types":[
  "Electric"
],
"Resistant":[
  "Electric",
  "Flying",
  "Steel"
],
"Weaknesses":[
  "Ground"
],
"Fast Attack(s)":[
  {
     "Name":"Spark",
     "Type":"Electric",
     "Damage":7
  },
  {
     "Name":"Thunder Shock",
     "Type":"Electric",
     "Damage":5
  }
],
"Special Attack(s)":[
  {
     "Name":"Brick Break",
     "Type":"Fighting",
     "Damage":30
  },
  {
     "Name":"Thunder",
     "Type":"Electric",
     "Damage":100
  },
  {
     "Name":"Thunder Punch",
     "Type":"Electric",
     "Damage":40
  }
],
"Weight":{
  "Minimum":"26.25kg",
  "Maximum":"33.75kg"
},
"Height":{
  "Minimum":"0.7m",
  "Maximum":"0.9m"
},
"FleeRate":0.06,
"Previous evolution(s)":[
  {
     "Number":25,
     "Name":"Pikachu"
  }
],
"MaxCP":1859,
"MaxHP":2028
}
];
