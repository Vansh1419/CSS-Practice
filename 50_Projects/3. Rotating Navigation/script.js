let icon2 = document.querySelector(".icon2")
let lines = document.querySelectorAll(".line")
let content = document.querySelector(".body")
let nav = document.querySelector("nav")

icon2.addEventListener("click",()=>{
    // console.log(content)
    content.classList.toggle("active");
    nav.classList.toggle("activated");
    // console.log(icon2)
    
})