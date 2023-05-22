// Dado el siguiente array de objetos. 
// Crea dinamicamente en el html una lista de div que contenga un elemento 
// h4 para el titulo y otro elemento img para la 
// imagen. 


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

