// // //  EJERCICIO 1 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
 
// // //  Dado el siguiente javascript usa forof para recorrer el array de películas, genera un nuevo array con las categorías
// // //  de las películas e imprime por consola el array de categorías. Ten en cuenta que las categorías no deberían repetirse.
// // // // Para filtrar las categorías puedes ayudarte de la función `.includes()`.


// // const movies = [
// //     {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
// //     {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
// //     {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
// //     {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
// // ]


// // let categorias = [];

// // for(let pelicula of movies){
// //    for(let categoria of pelicula.categories){
// //       if(!categorias.includes(categoria)){
// //         categorias.push(categoria)
// //       }
               
// // }
// // }

// // // // // }

// // // // console.log(categorias)

// //  EJERCICIO 2 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// // Dado el siguiente javascript usa forof y forin para hacer la media del 
// // volumen de todos los sonidos favoritos que tienen
// //  los usuarios.


// const users = [
//     {name: 'Manolo el del bombo',
//         favoritesSounds: {
//             waves: {format: 'mp3', volume: 50},
//             rain: {format: 'ogg', volume: 60},
//             firecamp: {format: 'mp3', volume: 80},
//         }
//     },
//     {name: 'Mortadelo',
//         favoritesSounds: {
//             waves: {format: 'mp3', volume: 30},
//             shower: {format: 'ogg', volume: 55},
//             train: {format: 'mp3', volume: 60},
//         }
//     },
//     {name: 'Super Lopez',
//         favoritesSounds: {
//             shower: {format: 'mp3', volume: 50},
//             train: {format: 'ogg', volume: 60},
//             firecamp: {format: 'mp3', volume: 80},
//         }
//     },
//     {name: 'El culebra',
//         favoritesSounds: {
//             waves: {format: 'mp3', volume: 67},
//             wind: {format: 'ogg', volume: 35},
//             firecamp: {format: 'mp3', volume: 60},
//         }
//     },
// ]

// let volumen = {totalDeVolumen: 0, cantidadVol: 0}

// for(let usuario of users){
//     for(let favoritos in usuario.favoritesSounds) {
//         let favorito = usuario.favoritesSounds[favoritos]

//            volumen.totalDeVolumen += favorito.volume
//            volumen.cantidadVol++
    
// }
// }
// let VolPromedio = volumen.totalDeVolumen / volumen.cantidadVol;

// console.log(VolPromedio);


// // // //  EJERCICIO 3 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// // // Dado el siguiente javascript usa forof y forin para saber cuantas veces ha sido cada sonido agregado por los usuarios a
// // // favorito. Para ello recorre la lista de usuarios y usa forin para recoger el nombre de los sonidos que el usuario tenga como favoritos.
// // // Una vez accedas a ellos piensa en la mejor forma de hacer un conteo de cada vez que ese sonido se repita como favorito en cada usuario.

// // // // Este ejercicio es un poco complicado con los conocimientos actuales pero...a la vez un buen reto y oportunidad para
// // // // comprender que hay muchas formas de hacer las cosas en javascript.

// // // const users = [
// // //     {name: 'Manolo el del bombo',
// // //         favoritesSounds: {
// // //             waves: {format: 'mp3', volume: 50},
// // //             rain: {format: 'ogg', volume: 60},
// // //             firecamp: {format: 'mp3', volume: 80},
// // //         }
// //     },
// //     {name: 'Mortadelo',
// //         favoritesSounds: {
// //             waves: {format: 'mp3', volume: 30},
// //             shower: {format: 'ogg', volume: 55},
// //             train: {format: 'mp3', volume: 60},
// //         }
// //     },
// //     {name: 'Super Lopez',
// //         favoritesSounds: {
// //             shower: {format: 'mp3', volume: 50},
// //             train: {format: 'ogg', volume: 60},
// //             firecamp: {format: 'mp3', volume: 80},
// //         }
// //     },
// //     {name: 'El culebra',
// //         favoritesSounds: {
// //             waves: {format: 'mp3', volume: 67},
// //             wind: {format: 'ogg', volume: 35},
// //             firecamp: {format: 'mp3', volume: 60},
// //         }
// //     },
// // ]

// // let sonidos = []

// // for(usuario of users){
// //     for(sonido in usuario.favoritesSounds){
// //         if (sonidos.length == 0){
// //            sonidos.push({nombre: sonido, veces: 1})   
// //         }else{
// //             let encontrado = false
// //             for(sonidosFavor of sonidos){
// //              if(sonidosFavor.nombre == sonido){
// //                 encontrado = true
// //                 sonidosFavor.veces++
// //              }
// //             }
// //             if(encontrado == false){
// //             sonidos.push({nombre: sonido, veces: 1})  
// //             }
// //         }
        
// //     }
       
// // }
// // console.log(sonidos)






//  EJERCICIO 4 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// Crea una función llamada `findArrayIndex` que reciba como parametros un array de textos y un texto y devuelve la 
// posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro.

// Haz varios ejemplos y compruebalos.

// Sugerencia de función:
// 

// function findArrayIndex(array, text) { 
//     for(let i = 0; i < array.length; i++){
//         if (array[i] == text){
//             return [i]
//         }
//     }
// }

// findArrayIndex(['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'], 'Ajolote');

// console.log(findArrayIndex(['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'], 'Ajolote'));


//  EJERCICIO 5 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Crea una función llamada ``rollDice()`` que reciba como parametro el numero de caras que queramos que tenga el dado 
// que deberá silumar el codigo dentro de la función. Como hemos dicho, que la función use el parametro para simular 
// una tirada de dado y retornar el resultado. Si no se te ocurre como hacer un numero aleatorio no te preocupes! busca 
// información sobre la función de javascript ``Math.random()``

// function rollDice(numCaras){
//  let resultado = Math.floor(Math.random() * numCaras) + 1;
//    return resultado

// }

// console.log(rollDice(10));


//  EJERCICIO 6 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

Crea una función llamada ``swap`` que reciba un array y dos parametros que sean indices del array. La función deberá 
intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Retorna el array 
resultante.

Sugerencia de array:

['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño']
````
function swap(array, para1, para2)
    let jugadores = array
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

