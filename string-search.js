
// finding out the specific array through indexOf

const products = [
    'Dell hardcore i29 200GB leptop',
    'iphone 1TB camera flashlight phone',
    'yellow leptop with black camera',
    '1X59 Lenovo commercial yoga leptop',
    'LG super nova Leptop',
    'HTC low price phone',
    'purple color phone with Leptop'
];

const searching = 'dell';
const output = [];

/* for (const product of products) {
    if (product.toLowerCase().indexOf(searching.toLowerCase()) != -1) {
        output.push(product);
    }


} */

// console.log(output);


// use of includes.
// it works as like as indexof. 


/* for (const product of products) {
    if (product.toLowerCase().includes(searching.toLowerCase()) == -1) {
        output.push(product)
    }
} */

// console.log(output);



// use of startswith


for (const product of products) {
    if (product.toLowerCase().startsWith(searching.toLowerCase())) {
        output.push(product);
    }
}


console.log(output);
