let inputs = document.querySelectorAll("input")
console.log(inputs)
inputs.forEach((input) => {
    input.addEventListener("click", (e) => {
        let count;
        console.log(e);
        if (e.target.classList.contains("inp1")) {
            e.target.nextElementSibling.classList.add("jump1")
            if (e.target.parentElement.nextElementSibling.children[0].value === "") {
                e.target.parentElement.nextElementSibling.children[1].classList.remove("jump2")
            }
        }
        else if (e.target.classList.contains("inp2")) {
            e.target.nextElementSibling.classList.add("jump2")
            if (e.target.parentElement.previousElementSibling.children[0].value === "") {
                e.target.parentElement.previousElementSibling.children[1].classList.remove("jump1")
            }
        }
    })
})