function sonTodosArreglos(matriz) {
    for (const fila of matriz) {
        if (!(fila instanceof Array)) {
            return false;
        }
    }

    return true;
}


function esMatrizTriangularSuperior(matriz) {


    if (matriz instanceof Array) {
        if (sonTodosArreglos(matriz)) {
            if (matriz.length === matriz[0].length) {

                for (let i = 0; i < matriz.length; ++i) {
                    for(let j = 0; j < matriz[i].length; ++j) {
                        if(i > j && matriz[i][j] != 0){
                            
                            return false;

                        }
                    }
                }

            } else {
                throw Error('La matriz debe ser cuadrada.');
            }
        } else {
            throw TypeError('Todas las filas de la matriz deben ser arreglos.');
        }
    } else {
        throw TypeError('El argumento debe ser un arreglo.');
    }
}


// prueba

/*
[
  [1, 1, 1],
  [0, 1, 1],
  [0, 0, 1]
]
*/
if(esMatrizTriangularSuperior([[1, 1, 1], [0, 1, 1], [0, 0, 1]]) == false){

    console.log("La matriz no es triangular superior");

}else{

    console.log("La  matriz es triangular superior")
}


// prueba 2

/*
[
  [1, 1, 1],
  [1, 1, 1],
  [1, 1, 1]
]
*/



if(esMatrizTriangularSuperior([[1, 1, 1], [1, 1, 1], [1, 1  , 1]]) == false){

    console.log("La matriz no es triangular superior");

}else{
    
    console.log("La  matriz es triangular superior")
}