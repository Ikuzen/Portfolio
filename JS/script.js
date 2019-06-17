let start = document.getElementById("start")
let header = document.getElementsByTagName("header")
let content = document.getElementById("content")
console.log(header[0])
function reveal() {
    content.classList.remove("future")
    content.classList.add("present") 
    header[0].classList.remove("present")
    header[0].classList.add("past")
}
start.addEventListener("click", reveal)