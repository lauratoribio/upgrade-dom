window.onload = () => {

let body = document.querySelector("body")
// 2.1 Inserta dinamicamente en un html un div vacio con javascript.
   let newDiv = document.createElement("div")
   body.appendChild(newDiv)

// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
   let newP = document.createElement("p")
   let newDivWithP = document.createElement("div")
   newDivWithP.appendChild(newP)
   body.appendChild(newDivWithP)

   let nuevoDiv = document.createElement("div")
   nuevoDiv.innerHTML = "<p>Soy un párrafo</p>"
   body.appendChild(nuevoDiv)
    
// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
    let div6P = document.createElement("div")
    for(let i = 0; i < 6; i++) {
        let p = document.createElement("p")
        p.innerText = i + 1
        div6P.appendChild(p)
    }
    body.appendChild(div6P)

// 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
    let newPWithText = document.createElement("p")
    newPWithText.innerText = "Soy dinámico!"
    body.appendChild(newPWithText)

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
   let insertTextH2 = document.querySelector("h2.fn-insert-here")
   insertTextH2.innerText = "Wubba Lubba dub dub"
   

// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
   const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

   let newUl = document.createElement("ul")
   apps.forEach((item) => {
    let li = document.createElement("li")
    li.innerText = item
    newUl.appendChild(li)
   })
   body.appendChild(newUl)

   //otra forma:
   let newOl = document.createElement("ol")
   let acumulador = ""
   apps.forEach((item) => {
       acumulador += '<li>${item}</li>'
   })
   newOl.innerHTML = acumulador
   body.appendChild(newOl)

// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
    let removeNode = document.querySelectorAll(".fn-remove-me")
    removeNode.forEach((value) => {
        value.remove()
    })

// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
//     Recuerda que no solo puedes insertar elementos con .appendChild.
    let allText = document.querySelectorAll("div")
    let pConTexto = document.createElement("p")
    pConTexto.innerText = "Voy en medio!"
    body.insertBefore(pConTexto, allText[1])

    //Otra forma:
    let buscar = document.querySelectorAll("div + div")

// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
   let allDivs = document.querySelectorAll("div.fn-insert-here")
   allDivs.forEach((item) => {
    let p = document.createElement("p")
    p.innerText = "Voy dentro!"
    item.appendChild(p)
   })
   
   


}