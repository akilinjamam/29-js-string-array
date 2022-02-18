// split is way where the one string divided into different parts depending on how many parts(word) exists in  the string.

const anthem = 'amar sonar bangla ami tomay valobashi';

/* const word = anthem.split(' ');
const withoutA = anthem.split('a');

console.log(withoutA); */


// slice

// slice will give you a specific elements from total elements which you want to show. it will show that specific only


/* const smallSlice = anthem.slice(5, 10);   //from positon 5 to position less then 10

console.log(smallSlice); */


// substr

// it will give you charecters from one charecter to another charecter counting the charecter position from 0. suppose you want charecter from 13, and want total 7 charecter from 13, then write in the first bracket at first positon 13, then write 7, this 7 is how many charecter you want from that strings. not the position of strings.


/* const anotherPart = anthem.substr(11, 6);
console.log(anotherPart); */



// substring

// this is as like as slice.

/* const anotheParts = anthem.substring(11, 18);

console.log(anotheParts); */


// concate

// joining one string with another string


const first = 'Amader';
const second = 'City';

// const fullString = first + second;


const fullString = first.concat(second).concat(' ').concat('khub sundor');
console.log(fullString);


// join

const word2 = ['a', 'b', 'c', 'd'];

// const allJoin = word2.join('');
// const allJoin = word2.join(' ');
const allJoin = word2.join(', ');

console.log(allJoin);





