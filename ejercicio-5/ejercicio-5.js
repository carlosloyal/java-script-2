let cont = 0;
espacio = " ";

function creardiv() {
  let creardiv = document.createElement("div");

  //let b = document.querySelector("button");

  cont++;

  creardiv.innerHTML = "esto es un div" + espacio + cont;
  b.setAttribute("id", cont);
  document.getElementById("container").appendChild(creardiv);
}

let b = document.querySelector("button");
b.setAttribute("id", cont);