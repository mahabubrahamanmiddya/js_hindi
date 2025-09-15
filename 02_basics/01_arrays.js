const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "hanuman", "bheem", "arjun"]
const myArr2 = new Array(0, 1, 2, 3, 4) // (This is a anathor way to write Array)


// console.log (myArr[0])
// console.log(myHeros[2]);
// console.log(myArr2[2]);

// +++++++++ some methods of array ++++++++++++


// myArr.push(6)   (with the help of push we can add new value to array)
// myArr.push(7)
// myArr.pop()     (with the help of pop we can eleminate the last value of array) 


// myArr.unshift(9) (with the help of unshift we can add value in the bigining of the array)
// myArr.shift()    (with the help of shift we can remove the first element of the array)

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


//++++++++++++++ slice, splice +++++++++++++

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);


console.log(myArr);
