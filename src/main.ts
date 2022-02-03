console.log("hola platzi");



//TIPO DE DATO NUMBER
// Explicito

let phone: number;

phone=1;
phone =3488283;

//phone="hola";  // error

let phoneNUmber=212920;

//phoneNUmber=true;   // ERROR POR TIPO

// HEXADECIMAL

let hex:number=0xf00d;
let binary:number=0b1010;

let octal:number=0o744;


//TIPO DE DATO BOOLEAN

let isPro:boolean;

isPro=true;

//isPro=1;  // error

let isUserPro=false;

isUserPro=true;


//TIPO DE DATO STRING

let userName: string;

userName="Alexander";

// CADENAS EN TYPESCRIPT, VARIABLES EMBEBIDAS, TEMPLATE STRING
// USO DEL CARACTER ESPECIAL BACK-TICK

let userInfo:string;

userInfo= `
 User Info:
 Username: ${userName}
 firstName: ${userName+ " Loaiza"}
phone: ${phone}
isPro: ${isPro}

`;

console.log("Informacion de usuario", userInfo);














