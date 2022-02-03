"use strict";
//VARIABLE DEL TIPO NULL EXPLICITA
let nullVariable;
nullVariable = null;
let otherVariable = null;
otherVariable = "Hola";
console.log("null variable", nullVariable);
console.log("other variable", otherVariable);
// UNDEFINED EXPLICITO- IMPLICITO
let undefinedVariable = undefined;
// undefinedVariable="hola";  // error de  tipo
let otherUndefined = undefined;
otherUndefined = 2;
console.log("undefinedVariable", undefinedVariable);
console.log("otherUndefined", otherUndefined);
// VARIABLE NULL UNDEFINED COMO SUBTIPOS
// ----strictNullChecks
let albumName;
/*albumName=null;
albumName=undefined;*/
