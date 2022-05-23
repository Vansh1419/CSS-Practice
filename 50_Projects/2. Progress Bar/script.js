let activeProgressBar = document.querySelector(".active")
let circles = document.querySelectorAll(".circle")
let activeCircle = document.querySelector(".activated")
let progressBar = document.querySelector(".progress-bar")
let buttons = document.querySelector(".buttons")
let prev = document.querySelector(".prev")
let next = document.querySelector(".next")
let counter1 = 1;
// console.log(circles.length)
// console.log(activeCircle)
buttons.addEventListener("click", (e) => {
    console.log(e)
    if (e.target.classList.contains("next")) {
        counter1++
        if(counter1>circles.length){
            counter1=circles.length
        }
        update()
        let marking = ((counter1 - 1) / (circles.length - 1)) * 100
        activeProgressBar.style.width = `${marking}%`
    }
    if (e.target.classList.contains("prev")) {
        counter1--
        if(counter1<1){
            counter1=1
        }
        update()
        console.log(counter1)
        let marking2 = (((counter1 - 1) / (circles.length - 1)) * 100)
        activeProgressBar.style.width = `${marking2}%`
        console.log(counter1,marking2)
    }
    function update(){
        circles.forEach((circle,index)=>{
            if(index<counter1){
                circle.classList.add("activated")
            }else{
                circle.classList.remove("activated")
            }
        })

    }
    if (counter1 >= circles.length) {
        next.disabled = true
        next.style.cursor = "not-allowed"
    }
     if (counter1 < circles.length) {
        prev.disabled = false
        prev.style.cursor = "pointer"
        next.disabled = false
        next.style.cursor = "pointer"
    }
     if (counter1 === 1) {
        prev.disabled = true
        prev.style.cursor = "not-allowed"
    }
})
