let inputs = document.querySelectorAll("input")
console.log(inputs)
inputs.forEach((input) => {
    input.addEventListener("click", (e) => {
        let count;
        if (e.explicitOriginalTarget.classList.contains("inp1")) {
            e.explicitOriginalTarget.nextElementSibling.classList.add("jump1")
            if (e.explicitOriginalTarget.parentElement.nextElementSibling.children[0].value === "") {
                e.explicitOriginalTarget.parentElement.nextElementSibling.children[1].classList.remove("jump2")
            }
        }
        else if (e.explicitOriginalTarget.classList.contains("inp2")) {
            e.explicitOriginalTarget.nextElementSibling.classList.add("jump2")
            if (e.explicitOriginalTarget.parentElement.previousElementSibling.children[0].value === "") {
                e.explicitOriginalTarget.parentElement.previousElementSibling.children[1].classList.remove("jump1")
            }
        }
        console.log(e.explicitOriginalTarget.parentElement.nextElementSibling.children[0]);
    })
})