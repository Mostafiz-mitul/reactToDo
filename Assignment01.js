
// Assignment-1
// Question 1: Value Detective
// "string | truthy"
// "string | falsy"
// describeValue("hello")

function describeValue(pValue) {
    let vTypeOf = typeof(pValue);
    let vIsTruly = null;

    if (pValue) {
        vIsTruly = 'truthy';
    } else {
        vIsTruly = 'falsy';
    }

    return `"${vTypeOf} | ${vIsTruly}"`;
}


console.log(describeValue("hello"));
console.log(describeValue(""));
console.log(describeValue(25));
console.log(describeValue(0));
console.log(describeValue(true));
console.log(describeValue(null));
console.log(describeValue(undefined));



