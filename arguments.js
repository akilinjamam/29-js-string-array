// arguments 
// to use more parameter arguments is used , use this arguments under loop with function. it sometimes work as like as array, but not fully array . it doesnt use in the regualar case.

/* function addNumbers() {
    // console.log(arguments[2])

    let result = 0;

    for (const num of arguments) {
        result = result + num;
    }
    return result
}

const finalResult = addNumbers(12, 25, 23, 18, 20);
console.log(finalResult); */




// adding names by using arguments


function addNames() {
    let names = '';
    for (const part of arguments) {
        names = names + part + ' ';
    }
    return names

}

const showFullNames = addNames('kamal', 'pasa', 'rayhan', 'bin', 'sabbir');

console.log(showFullNames);