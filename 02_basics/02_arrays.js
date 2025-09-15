const marvalHeros = ["thor", "ironman", "spiderman"]
const dcHeros = ["superman", "flash", "batman"]

// marvalHeros.push(dcHeros)

// console.log(marvalHeros);
// console.log(marvalHeros[3][1]);

// const allHeros = marvalHeros.concat(dcHeros)
// console.log(allHeros);


const allNewHeros = [...marvalHeros, ...dcHeros]
// console.log(allNewHeros);

const anotherArray = [1,2,3,[4,5],6,7,[1,2,[7,8]],9]
const realAnotherArray = anotherArray.flat(Infinity)
console.log(realAnotherArray);



console.log(Array.isArray("Mahabub"))
console.log(Array.from("Mahabub"))
console.log(Array.from({name: "mahabub"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

