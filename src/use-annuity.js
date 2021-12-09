var m = require('./annuity');

console.log(m.v({ i_in: 0.04, term_in: 10 }));
console.log(m.a({ i_in: 0.04, term_in: 10 }));
console.log(m.a({ i_in: 0.04, term_in: 10 }) - 8.1109); // chk vs Pg 56 "Compound Interest" 4%  https://www.actuaries.org.uk/system/files/field/document/Formulae%20and%20Tables.pdf
console.log(m.P({ I$_in: 100000, i_in: 0.04, term_in: 10 }));
console.log(m.I({ P$_in: 10000, i_in: 0.04, term_in: 10 }));

// typings
