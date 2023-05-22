// Basandote en el siguiente html y javascript,inserta p con el 
// texto 'Voy dentro!', dentro de todos los div 
// con la clase .fn-insert-here


let classDiv$$ = ocument.querySelectorAll(".fn-inser-here")
    for(let div$$ of classDiv$$){     
      let p$$ = document.createElement("p")
        p$$.textContent = "Voy dentro!";
         div$$.appendChild(p$$)
    }
          

