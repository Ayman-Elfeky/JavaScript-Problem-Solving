// let arr = [1, 'a', true];

// // 21- Create an array and print all its elements

// // first way
// for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
// // second way
// arr.forEach((value, index, arr) => {
//     console.log(value);
// })
// // Third way
// const elements = arr.join(', '); 
// console.log(elements)



// // 22- find the length of an array
// // first way
// let arr = [1, 2, 3]
// console.log(arr.length);

// // second way
// let count = 0;
// arr.forEach((val) => {
//     count++;
// })
// console.log(count);
// // Or use normal for loop


// // 23- Access the first and last element in an array
// let arr = [1, 2, 3, 4]
// let first = arr[0];
// let last = arr[arr.length - 1];


// // 24- Add an element to the end of an array
// let arr = [1, 2, 3, 4]
// // First way
// arr.push("Added as the last element");
// // Second way
// arr[arr.length] = 'HHHh' 
// console.log(arr)


// // 25- Remove the last element of an array
// let arr = [1, 2, 3, 4]
// // First way
// arr.pop();

// // second way (Using splice method)
// arr.splice(-1, 1) // splice(startIndex, delete count (How many elements you want to delete from that position));
// console.log(arr);

// // third way (Using slice method) // without modifying the original array
// let array = [1, 2, 3, 4, 5];
// let newArr = array.slice(0, -1);

// // Fourth way using length property 
// array.length = array.length - 1;
// console.log(array)

// console.log(newArr)


// // 26- Add an element to the beginning of an array
// let arrrr = [1, 2, 3];

// // Modifying the original array
// arrrr.unshift(0)   // you can add many parameters as you want : arrr.unshift(0, 1, 2) all of them will be added at the beginning of the array
// console.log(arrrr)

// // without modifying the original array
// const newArray = [1, ...arrrr]  // Using spread operator
// console.log(newArray)

// const newww = [1].concat(newArray) // using concat method
// console.log(newww)


// // 27- Remove the first element of an array
// // Using shift method (Change the )
// let newaryay = [2, 'a', 3, "J"];
// newaryay.shift()  // shift()

// // Using slice method (Without changing the original array)
// console.log(newaryay.slice(1))

// // Using Splice method 
// newaryay.splice(0, 1);
// console.log(newaryay)

// // 28- find the index of an element in an array
// let arrind = [1, 2, 9, 'f', 'a'];
// console.log(arrind.indexOf('f'))


// // 29- check if an element exists in an array
// // We didn't use foreach because it doesn't include (break) keyword or (continue) keyword
// for(let i = 0; i < arrind.length; i++) {
//     if(arrind[i] === 'f') {
//         console.log('Found')
//         break;
//     }
// }

// // Second way
// if(arrind.includes('f')) {
//     console.log('Found')
// }

// // Third way
// if(arrind.indexOf('f') !== -1) {   // it will returns -1 if it is not found
//     console.log('Found');
// }


// // 30- Reverse an array
// console.log('The array before got reveresed: ' + arrind);
// // Using reverse();
// console.log(arrind.reverse())

// Using spread operator and reduce() (wihtout changing the original array);
// arrind.reduce()

// polyfill (reverse)
// Array.prototype.myReverse = function() {
//     let first = 0;
//     let last = this.length - 1;

//     for(let i = 0; i < this.length; i++) {
//         if(first <= last) {
//             let temp = this[first]
//             this[first] = this[last]
//             this[last] = temp

//             first++;
//             last--;
//         }
//     }

//     return this;
// }


// let ayman = [1, 2, 3]

// console.log(ayman.myReverse())



// 31- Sort an array in ascending order
// const arr = [5, 4, 2, 9, 0, 1, 80]
// arr.sort((a, b) => {
//     return a - b;
// })
// console.log(arr)

// The call back function (Compare function) will return:
// negative: a
// positive: b
// 0: nothing change
// -1 : reverse the array


// 32- Sort an array in descending order
// const arr = [1, 70, 80, 4, 9, 2, 5, 100];
// arr.sort((a,b) => b - a)


// 33- find the sum of all elements of an array
// // reduce method takes (accumulate, value, index, arr)
// // accumulate is the previous value

// const arr = [1, 2, 3, 4, 5]
// let sum = arr.reduce((acc, value) => acc + value)
// console.log(sum)



// 34- find the average of all the elements of an array
// const arr = [1, 2, 3, 6]

// let sum = arr.reduce((acc, value) => acc + value);
// let result = sum / parseFloat(arr.length)
// console.log(result)



// 35- find the largest number in an array
// const arr = [1, 2, 4, 5, 90, 0]
// let max = arr[0]
// arr.forEach(value => {
//     if(max < value)
//         max = value
// });

// console.log(max)




// 36- find the smallest number in an array

// const arr = [1, 2, 4, 5, 90, 0]
// let small = arr[0];
// arr.forEach((value) => {
//     if(small > value) 
//         small = value
// })

// console.log(small)



// 37- Remove duplicates from an array
// first way using filter method
// const arr = [1, 2, 3, 4, 5, 5, 5, 3, 4, 2, 4, 1, 3, 2, 1];
// const arrayFiltered = arr.filter((ele, index) => arr.indexOf(ele) === index);
// console.log(arrayFiltered)

// // second way using memoization and foreach method
// function filterArr(array) {
//     const x = {};
//     array.forEach(element => {
//         if(!x[element]) {
//             x[element] = true;
//         }
//     });

//     return Object.keys(x);
// }

// console.log(filterArr(arr))

// // Third way using map method
// function filterArrUsingMap(array) {
//     let x = [];

//     array.map((value) => !x.includes(value) ? x.push(value) : '');

//     return x;
// }

// console.log(filterArrUsingMap(arr));

// // fourth way using set
// console.log(Array.from(new Set(arr)));

// // 38- Merge two arrays
// const arr = ['one', 'three', 'five'];
// const arrSec = ['two', 'four', 'six'];
// // first way concat
// console.log('From buit-in concat method: ')
// console.log(arr.concat(arrSec))

// // second way using spread operator
// console.log('\nFrom spread operator: ')
//     console.log([...arr, ...arrSec])

// // third way using memoization
// function concat(arr1, arr2) {
//     let result = [];
//     let largestArray = Math.max(arr1.length, arr2.length);

//     for(let i = 0; i < largestArray; i++) {
//         result.push(arr1[i]);
//         result.push(arr2[i]);
//     }

//     return result;
// }
// console.log('\nFrom my method: ')
// console.log(concat(arr, arrSec))


// // 39- Find the intersection of two arrays
// const arr = [1, 2, 3, 4]
// const arrSec = [2, 5, 6, 9, 7, 3, 3, 3];

// function findIntersection(arr1, arr2) {
//     let smallestArr = [];
//     let largestArr = [];

//     arr1.length > arr2.length ? 
//     (largestArr = arr1, smallestArr = arr2):
//     (largestArr = arr2, smallestArr = arr1);

//     let res = largestArr.filter(element => {
//         return smallestArr.includes(element)
//     });
//     // It will return even the intersection wthout duplicat
//     return res.filter((ele, index) => res.indexOf(ele) === index)
// }

// console.log(findIntersection(arr, arrSec));

// 40- Find the union of two arrays
const arr = [1, 2, 3]
const arrSec = [3, 4, 5]
// Arrays are passed by reference, so that we will use spread operator
function union(arr1, arr2) {
    let res = [...arr1]
    arr2.filter(ele => {
        if(!arr1.includes(ele)) {
            res.push(ele);
        }
    })
    return res;
}

console.log(union(arr, arrSec))