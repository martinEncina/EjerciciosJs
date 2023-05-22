// Ejercicio 1 >>>>>>>>>>>>>>>>>>>>

// Usa un bucle forof para recorrer todos los destinos del array. Imprime en un console log sus valores.

// const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar']

// for(let lugares of placesToTravel){

//     console.log(lugares);
// }


// Ejercicio 2 >>>>>>>>>>>>>>>>>>>>

// Usa un foin para imprimir por consola los datos del alienigena.

// const alien = {
//     name: 'Wormuck',
//     race: 'Cucusumusu',
//     planet: 'Eden',
//     weight: '259kg'
// }

// for (let extraterrestre in alien){
//     console.log(extraterrestre + " : " + alien[extraterrestre])
// }


// Ejercicio 3 >>>>>>>>>>>>>>>>>>>>

// Usa un bucle for para recorrer todos los destinos del array y elimina los elementos que tengan 
// el id 11 y 40. Imprime en un console log el array.

// const placesToTravel = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'}, {id: 40, name: 'Santander'}, 
// {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}]

// for(let i = 0; i < placesToTravel.length; i++){
//     let lugares = placesToTravel[i]
//      if(lugares.id === 11 || lugares.id === 40){
//         placesToTravel.splice(i,1);
        
//      }
// }

// console.log(placesToTravel)


// Ejercicio 4 >>>>>>>>>>>>>>>>>>>>

// Usa un bucle forof para recorrer todos los juguetes y elimina los que incluyan la palabra `gato`. 
// Recuerda que puedes usar la función `.includes()` para comprobarlo.

// const toys = [{id: 5, name: 'Buzz MyYear'}, {id: 11, name: 'Action Woman'}, 
// {id: 23, name: 'Barbie Man'}, {id: 40, name: 'El gato con Guantes'},{id: 40, name: 'El gato felix'}]

// let juguete1 = [];
// let juguete2 = [];

// for(const juguetes of toys){
//     if(juguetes.name.includes("gato")){
//         juguete1.push(juguetes);
//     }
//     else{
//         juguete2.push(juguetes);
//     }
// }
// console.log(juguete1);

// // Ejercicio 5 >>>>>>>>>>>>>>>>>>>>

// Usa un bucle forof para recorrer todos los juguetes 
// y añade los que tengan más de 15 ventas (`sellCount`) al array `popularToys`. Imprimelo por consola.

// const popularToys = [];
// const toys = [{id: 5, name: 'Buzz MyYear', sellCount: 10}, {id: 11, name: 'Action Woman', sellCount: 24}, 
// {id: 23, name: 'Barbie Man', sellCount: 15}, {id: 40, name: 'El gato con Guantes', sellCount: 8},
// {id: 40, name: 'El gato felix', sellCount: 35}]

// for(let juguete of toys){
//    if (juguete.sellCount > 15){
//        popularToys.push(juguete)
//    }
// }
// console.log(popularToys);


