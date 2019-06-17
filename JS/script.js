

(function(){
let start = document.getElementById("start")
let header = document.getElementsByTagName("header")
let content = document.getElementById("content")
let canvas = document.getElementsByTagName("canvas")
function reveal() {
    content.classList.remove("future")
    content.classList.add("present") 
    header[0].classList.remove("present")
    header[0].classList.add("past")
    canvas[0].classList.add("past")
    cancelAnimationFrame(animate) /// cancels the animation ///
}
start.addEventListener("click", reveal)

})();