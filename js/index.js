const pantalla = document.querySelector("*")
pantalla.fillStyle = "#0f172ad9";
console.log(pantalla)

pantalla.addEventListener("mouseover", cambiaColorFondo)
function cambiaColorFondo(e) {
  console.clear()
  let x = e.clientX
  let y = e.clientY
  pantalla.fillStyle = "white"
  
  /* const x = e.pageX
  const y = e.pageY */
}