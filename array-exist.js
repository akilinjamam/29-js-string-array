// finding out the biggest array using for loop under function

function megaFriend(friends) {
    // to check the parameter is string or not,
    if (Array.isArray(friends) == false) {
        return 'please provide an array as string'
    }
    let mega = [0];
    for (const friend of friends) {
        if (friend.length > mega.length) {
            mega = friend
        }
    }

    return mega
}

const friends = ['kutub', 'lion', 'shamol', 'sabbirrahaman'];

const result = megaFriend(friends);

console.log(result);

// to check any element of array exist in or not using index of

if (friends.indexOf('lion') != -1) {
    console.log('yes lion exists');
}

// to check any element of array exist in or not using includes

if (friends.includes('kutubb') == true) {
    console.log('yes he is exist in the array');
}

else {

    console.log("no he doesn't exist in the array");
}


// use of concate

const first = [1, 2, 3, 4, 5];
const second = [6, 7, 8, 9, 10];

const combined = first.concat(second);

console.log(combined);