// Dado el siguiente html y javascript. Utiliza el 
// // array para crear dinamicamente una lista ul > li 
// // de elementos en el div de html con el 
// // atributo data-function="printHere".


const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

let div$$ = document.querySelector('[data-function="printHere"]')

let ul$$ = document.createElement("ul")
          div$$.appendChild(ul$$)

   for(let i = 0; i < cars.length;i++){
       let ps$$ = document.createElement("li")
       ps$$.textContent = cars[i]
       ul$$.appendChild(ps$$)
   }



  