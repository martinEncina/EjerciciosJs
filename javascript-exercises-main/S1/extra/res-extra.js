// EJERCICIO 1 <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// Usa un bucle y dos condiciones para imprimir por consola el 
// nombre de los usuarios que sean menor de edad 
// precedidos del texto "Usuario menor de edad:" y otro que imprima a los usuarios 
// mayores de edad, precedido del texto "Usuario mayor de edad:".

// const users = [{name: "Abel", years: 43}, {name: "Maria", years: 18}, {name: "Pedro", years: 14}, {name: "Samantha", years: 32}, {name: "Raquel", years: 16}];

// for (let i = 0; i < users.length ; i++){
//     const usuario = users[i];
//     if(usuario.years >= 18){
//         console.log("Usuario mayor de edad:" + " " + usuario.name);
//     } else {
//         console.log("Usuario menor de edad:" + " " + usuario.name);
//     }
// }
    

// // EJERCICIO 2 <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// Usa un for para remplazar todas las comidas que no sean veganas con las comidas del array de frutas. 
// Recuerda no usar frutas duplicadas. Finalmente, imprime el array resultante.

// const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple'];
// const foodSchedule = [{name: "Salad", isVegan: true},{name: "Salmon", isVegan: false}, {name: "Tofu", isVegan: true}, {name: "Burger", isVegan: false}, {name: "Rice", isVegan: true}, {name: "Pasta", isVegan: true}];

// let indexDos = 0

// for (let i = 0; i < foodSchedule.length; i++){
//     let comida = foodSchedule[i]
//   if(comida.isVegan == false){
//        comida.name = fruits[indexDos]
//        indexDos++;
//   }
  
// }  

// console.log(foodSchedule);´

// // EJERCICIO 3 <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// Usa un bucle para crear 3 arrays de peliculas filtrados por categorias. Pelicula pequeña, 
// menos de 100 minutos, pelicula mediana, igual o mas de 100 minutos y menos de 200 y pelicula grande, 
// mas de 200 minutos. Imprime cada array por consola.

// const movies = [{name: "Your Name", durationInMinutes: 130},{name: "Pesadilla antes de navidad", durationInMinutes: 225}, {name: "Origen", durationInMinutes: 165}, {name: "El señor de los anillos", durationInMinutes: 967}, {name: "Solo en casa", durationInMinutes: 214}, {name: "El jardin de las palabras", durationInMinutes: 40}];

// let PeliculaPequeña = []
// let PeliculaMediano = []
// let PeliculaGrande = []

// for (let i = 0; i < movies.length; i++){
      
//      if (movies[i].durationInMinutes <= 100){
//         PeliculaPequeña.push(movies[i].name)
//      } 
//      else if (movies[i].durationInMinutes <= 200)
//         PeliculaMediano.push(movies[i].name)
//      else{
//       PeliculaGrande.push(movies[i].name)
//      } 
   
// }

// console.log(PeliculaPequeña + " Esta es una pelicula pequeña")
// console.log(PeliculaMediano + " Esta es una pelicula Mediano")
// console.log(PeliculaGrande + " Esta es una pelicula Grande")


// // EJERCICIO 4 <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// Usa un bucle para sumar el total de las ventas (`sellCount`) de todos los productos.
// const products = [{name: 'Gorra de rodilla', sellCount: 10},{name: 'Pantalón de pana', sellCount: 302},{name: 'Reloj de papel albal', sellCount: 23},{name: 'Inpar de zapatos', sellCount: 6}];

// let suma = 0

// for (let i = 0; i < products.length; i++){
//   suma += products[i].sellCount 
// }

// console.log(suma)

// EJERCICIO 5 <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


// Usa un bucle para sumar el total de las ventas (`sellCount`) de todos los productos 
// y mostrar por consola la media de ventas.

// const products = [{name: 'Gorra de rodilla', sellCount: 10},{name: 'Pantalón de pana', sellCount: 302},{name: 'Reloj de papel albal', sellCount: 23},{name: 'Inpar de zapatos', sellCount: 6}];

// let suma = 0

// for (let i = 0; i < products.length; i++){
//      suma += products[i].sellCount 
// }
//    console.log(suma / products.length)

// EJERCICIO 6 <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// Usa un bucle para recorrer el array de products (`movies`) y añade al array `goodProducts` 
// los que tengan más de 20 ventas (`sellCount`) y al array `badProducts` los que tengan menos.

// const goodProducts = [];
// const badProducts = [];
// const products = [{name: 'Gorra de rodilla', sellCount: 10},{name: 'Pantalón de pana', sellCount: 302},{name: 'Reloj de papel albal', sellCount: 23},{name: 'Inpar de zapatos', sellCount: 6}];

// for (let i = 0; i < products.length; i++){
//     if(products[i].sellCount > 20){
//       goodProducts.push(products[i])
//     }else{
//       badProducts.push(products[i])
//     }
      
//   }
//   console.log(goodProducts);
//   console.log(badProducts);

