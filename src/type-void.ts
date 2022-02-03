// VOID

// funcion explicita con tipo de dato any

function showInfo(userInfo: any): any{
    console.log("User Info", userInfo.idUser, userInfo.Username, userInfo.firstName );
    //return "hola";
}

showInfo({idUser:1, Username:"Alex", firstName: "Loaiza" });


// funcion de tipo inferido

function showFormattedInfo(user: any){
    console.log("User Info", `
    id: ${user.idUser}
    username: ${user.Username}
    fisrtname: ${user.firstName}
    ` 
    );
    
}

showFormattedInfo({idUser:1, Username:"Alex", firstName: "Loaiza" });

// VARIABLE DE TIPO VOID COMO TIPO DE DATO

let unusable: void;

//unusable= null; para que no marque error se debe desabilitar en el archovo tsconfig.json
unusable=undefined;
