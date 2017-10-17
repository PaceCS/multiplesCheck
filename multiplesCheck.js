// multiplesCheck takes an input n and determines if it a multiple of 3, multiple of 5, or neither

































// -------------------------------------------------------------------------------
// Testing - DON'T CHANGE ANYTHING BELOW
const printme = console.log;
let out = [];
console.log = function log(d) {
    out.push(d);
};
multiplesCheck(2);
printme('Testing...');
printme(`\t did you properly return the user input?\t ${out[0] == 'You entered 2.'} `);
const a = [3.1, -3, 9, 11, 10, 45];
for (let i = 0; i < a.length; i += 1) {
    out = [];
    multiplesCheck(a[i]);
    const t3 = a[i] % 3 == 0;
    const t5 = a[i] % 5 == 0;
    if (parseInt(a[i]) != a[i]) {
        printme(`\t did you properly return a statement for non-integer values?\t ${out[1] == 'Your input is not an integer.'}`);
    } else if (a[i] < 0) {
        printme(`\t did you properly return a statement for negative values?\t ${out[1] == 'Your number is not a positive number.'}`);
    } else if (!t5) {
        if (t3) {
            printme(`\t did you properly return a statement for values that are multiples of 3 but not of 5?\t ${out[1] == 'Your number is a multiple of 3 but not a multiple of 5.'}`);
        } else {
            printme(`\t did you properly return a statement for values that are not multiples of 3 or 5?\t ${out[1] == 'Your number is not a multiple of 3 or 5.'}`);
        }
    } else if (!t3) {
        if (t5) {
            printme(`\t did you properly return a statement for values that are multiples of 5 but not of 3?\t ${out[1] == 'Your number is a multiple of 5 but not a multiple of 3.'}`);
        }
    } else {
        printme(`\t did you properly return a statement for values that are multiples of both 3 and 5?\t ${out[1] == 'Your number is a multiple of both 3 and 5.'}`);
    }
}
