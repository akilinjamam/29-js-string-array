// use of slice

// showing specific numbers from an array, slice is used to do it. to specify the numbers , use the positon of numbers which is starts from 0.
// n.b : slice will juct show the specific elements which you selected for show. but it doesnt cut any element.

const number = [1, 3, 5, 7, 13, 15, 18, 21, 25];

// const numberSlice = number.slice(4, 8);

// console.log(numberSlice);


// splice

// the major difference between slice and splice is , slice makes copy specified elements from array it just shows but splice will show cutting the elements from array and it will not exist in the array anymore. it just cut doesnt copy

// const spliced = number.splice(4, 3);

// console.log(spliced, number);

// using splice you can delete any element and also can add elements from any positon 

const spliced2 = number.splice(3, 2, 99, 100, 200, 300);

console.log(spliced2, number);