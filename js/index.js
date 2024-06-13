const cursor = document.querySelector(".cursor")
let timeout;
const sobremi = document.querySelector(".container-sobre-mi")
const preUno = document.querySelector(".preuno")
const parrafos = document.querySelectorAll(".parrafo")

document.addEventListener("mousemove", (e) => {
  let x = e.pageX
  let y = e.pageY

  cursor.style.top = y + "px"
  cursor.style.left = x + "px"
  cursor.style.display = "block"

  function mouseStopped() {
    cursor.style.display="none"
  }

  /* clearTimeout(timeout) */
  timeout= setTimeout(mouseStopped, 1000)
})

document.addEventListener("mouseout", () => {
  cursor.style.display ="none"
})

window.addEventListener("mouseover", (e) => {
   
  if (e.target === sobremi) {
    
    preUno.classList.add("sobremi")
  } else {
    preUno.classList.remove("sobremi")
  }
  
})

