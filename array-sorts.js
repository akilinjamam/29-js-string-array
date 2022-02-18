// sort for number
// accending order from small number to large number using sort from array number

const number = [5, 3, 2, 4, 6, 9, 7];

// const theSort = number.sort();

// console.log(theSort);


// sort for string

const friends = ['kamal', 'jamal', 'belal', 'dalim', 'faruk', 'abir', 'chamak'];

// const sortString = friends.sort();

// console.log(sortString);

// sort can be used as a reversed way 

// const sortstringReversed = friends.reverse();

// console.log(sortstringReversed);

// const sorAndReversed = friends.sort().reverse();

// console.log(sorAndReversed);



// number sort if the first element starts from 10

const megaNumber = [11, 15, 18, 5, 2, 20, 37];

const sortedBigNumbers = megaNumber.sort(function (a, b) {
    return a - b;
})

console.log(sortedBigNumbers);

