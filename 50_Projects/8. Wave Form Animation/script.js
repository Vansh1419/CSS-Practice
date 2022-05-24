let inputs = document.querySelectorAll("input")
console.log(inputs)
inputs.forEach((input) => {
    input.addEventListener("click", (e) => {
        console.log(e.target);
        if (e.target.classList.contains("inp1")) {
            for (let i = 0; i < e.target.nextElementSibling.children.length; i++) {
                setTimeout(() => {
                    e.target.nextElementSibling.children[i].classList.add("jump1")
                }, 50 * i);
            }
            if (e.target.parentElement.nextElementSibling.children[0].value === "") {
                for (let i = 0; i < e.target.parentElement.nextElementSibling.children[0].nextElementSibling.children.length; i++) {
                    setTimeout(() => {
                        e.target.parentElement.nextElementSibling.children[0].nextElementSibling.children[i].classList.remove("jump2")
                    }, 50 * i);
                }
            }
        }
        else if (e.target.classList.contains("inp2")) {
            for (let i = 0; i < e.target.nextElementSibling.children.length; i++) {
                setTimeout(() => {
                    e.target.nextElementSibling.children[i].classList.add("jump2")
                }, 50 * i);
            }
            if (e.target.parentElement.previousElementSibling.children[0].value === "") {
                for (let i = 0; i < e.target.parentElement.previousElementSibling.children[0].nextElementSibling.children.length; i++) {
                    setTimeout(() => {
                        e.target.parentElement.previousElementSibling.children[0].nextElementSibling.children[i].classList.remove("jump1")
                    }, 50 * i);
                }
            }
        }
    })
})