let imagen1 = document.getElementById("imagen1")
let gato = document.getElementById("gato")
let pizza = document.getElementById("pizza")
let boton1 = document.getElementById("boton1")
let boton2 = document.getElementById("boton2")
let boton3 = document.getElementById("boton3")

const ocultar = (imagen) => {
    imagen.style.visibility="hidden"
}

const aparecer = (imagen) => {
    imagen.style.visibility="visible"
}

imagen1.onmouseover = function () {
    ocultar(imagen1) 
    
}

boton1.onclick = function () {
    aparecer(imagen1)
    
}

gato.onmouseover = function () {
    ocultar(gato) 
    
}

boton2.onclick = function () {
    aparecer(gato)
    
}

pizza.onmouseover = function () {
    ocultar(pizza) 
    
}

boton3.onclick = function () {
    aparecer(pizza)
    
}