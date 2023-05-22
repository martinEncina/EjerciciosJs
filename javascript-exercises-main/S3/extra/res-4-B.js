// Basandote en el ejercicio anterior. 
// Crea un botón que elimine el último elemento de la lista.


const countries = 
[{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}];


for(let i = 0; i < countries.length; i++){
let divS$$ = document.createElement("div")
     document.body.appendChild(divS$$)

let h4$$ = document.createElement("h4")
       divS$$.appendChild(h4$$)
    h4$$.textContent = countries[i].title
    
let img$$ = document.createElement("img")
      divS$$.appendChild(img$$) 
    img$$.setAttribute("src", countries[i].imgUrl);
      
}      
 function borrar$$(){
    let allDiv$$ = document.querySelectorAll("div")
         allDiv$$[allDiv$$.length - 1].remove()       
       
 }
 
 document.querySelector("button").addEventListener("click", borrar$$)
    
 