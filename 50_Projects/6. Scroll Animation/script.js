let content = document.querySelectorAll(".content")
const trigger = window.innerHeight / 5 * 4
window.addEventListener("scroll", () => {
    content.forEach((box)=>{
        const boxTop = box.getBoundingClientRect().top
        if (boxTop<trigger) {
            box.classList.add("show")
        }
        else{
            box.classList.remove("show")

        }
    })
})

