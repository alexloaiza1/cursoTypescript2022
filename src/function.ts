// Crear una fotografía
type SquareSize = '100x100' | '500x500' | '1000x1000';

function createPicture(title: string, date: string, size: SquareSize) {
    console.log('creating picture ... result: ',title, date, size);
}
createPicture('MyPhoto','02-12-2020','500x500');


//Parámetros opcionales en funciones
function takePicture(title?: string, date?: string, size?: SquareSize) {
    console.log('creating picture ... result: ',title, date, size);
}
takePicture('newPost','03-12-2020', '500x500');
takePicture('newPost','03-12-2020');
takePicture('newPost','100x100');
takePicture('newPost');


//Fat Array Functions
let createPic = (title: string, date: string, size: SquareSize): object => {
    return {
        title,
        date,
        size
    };
}

let picture = createPic('Platzi session', '10-03-2020', '1000x1000');
console.log('picture ', picture);




//-----------RESUMEN--------------


// Tipo de retorno con TypeScript
function handleError(code: number, message: string): never | string {
    // Procesamiento del codigo, mensaje
    if (message === 'error') {
        throw new Error (`${message}. Code error: ${code}`);
    } else {
        return 'An error has ocurred';
    }
}

try {
    let result = handleError(200, 'OK'); // string
    console.log('result', result);
    result = handleError(404, 'error'); // never
    console.log('result', result);
} catch (error) { }