"use strict";
// TIPO EXPLICITO
let idUser;
idUser = 1; // number
idUser = "2"; // string
console.log('idUser', idUser);
// TIPO INFERIDO
let otherId;
otherId = 1;
otherId = "1";
otherId = true;
console.log('otherId', otherId);
let surprise = "Hello Typescript";
//
const res = surprise.subStrin(6);
console.log("res", res);
