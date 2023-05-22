
// Basandote en el ejercicio anterior. 
// Crea un botón para cada uno de los elementos 
// de las listas que elimine ese mismo elemento del html.


const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

let div$$ = document.createElement("div")
    document.body.appendChild(div$$)

let ul$$ = document.createElement("ul")
          div$$.appendChild(ul$$)

   for(let i = 0; i < cars.length;i++){
       let ps$$ = document.createElement("li")
     let autos$$ = ps$$.textContent = cars[i]
    let boton = document.createElement("button")
       boton.textContent ="X"
        ps$$.appendChild(boton)     
       ul$$.appendChild(ps$$)               
   }

   function borrar(){
       
   }