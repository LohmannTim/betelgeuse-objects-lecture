console.log('JS is sourced!');


//[name, favoriteAnimal]
var people = [
    {
    name: 'Tim',
    favoritAnimal: 'dog'
    },
    {
    name: 'Charly',
    favoritAnimal: 'cat'
    },
    {
    name: 'Bobby',
    favoritAnimal: 'mouse'
    },
    {
    name: 'Steve',
    favoritAnimal: 'mouse'
    },
];
console.log(people);

//log person's fav animal is fav anim
for (var i= 0; i < people.length; i++) {
    var person = people[i];
    console.log(person[0] + "'s favorite animal is the " + person[1]);
}
