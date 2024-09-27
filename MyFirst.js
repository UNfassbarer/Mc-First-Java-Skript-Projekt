let Input = alert(„Insert Number (10):“);
let allow  = {
max: „20“;
min: „0“;
};
let right = input === 10;
function show_count (count) {
return count ;
if (allow.max >= input) {
console.log(„Your number ist: „ + count);
}
else if (allow.min <= input) {
console.log(„Your number ist: „ + count);
}
else {
console.log(„Your number is not correct“);
}
console.log(„Number is Right: “ + right );
};
show_count(input);