const cursor = document.querySelector(".cursor")


document.addEventListener("mouseover", (e) => {
  let x = e.pageX
  let y = e.pageY

  cursor.style.top = y + "px"
  cursor.style.left = x + "px"
  cursor.style.display = "block"
})

document.addEventListener("mouseout", () => {
  cursor.style.display ="none"
})
