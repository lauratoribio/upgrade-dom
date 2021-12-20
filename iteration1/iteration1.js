
window.onload = () => {

// 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
let clase1 = document.querySelector(".showme")
console.log(clase1)

// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
let h1Pillado = document.querySelector("#pillado")
console.log(h1Pillado)

// 1.3 Usa querySelector para mostrar por consola todos los p
let paragraphs = document.querySelectorAll("p")
console.log(paragraphs)

// 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon
let pokemons = document.querySelectorAll(".pokemon")
console.log(pokemons)

// 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo 
// data-function="testMe".

let data = document.querySelectorAll('[data-function="testMe"]')
console.log(data)

// 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
// data-function="testMe".

console.log(data[2])

}