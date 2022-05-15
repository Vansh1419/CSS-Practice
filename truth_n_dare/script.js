let form = document.querySelector("form")
let content = document.querySelector(".content")
let spin = document.querySelector(".spin-div")
form.addEventListener("submit", (e) => {
    e.preventDefault();
    // console.log(player1.value)
    // console.log(content.innerHTML)
    content.innerHTML = `<div class="player player-1">${player1.value}</div>
    <div class="player player-2">${player2.value}</div>
    <div class="player player-3">${player3.value}</div>
    <div class="player player-4">${player4.value}</div>`
})
spin.addEventListener("click", (e) => {
    console.log(content)
    let num = Math.floor(Math.random() * 100)
    if (num <= 25) {
        content.children[0].style.background = "red"
        content.children[3].style.background = "green"
        content.children[1].style.background = "yellow"
        content.children[1].style.color = "yellow"
        content.children[2].style.background = "yellow"
        content.children[2].style.color = "yellow"
    }
    else if (num > 25 && num < 50) {
        content.children[1].style.background = "red"
        content.children[2].style.background = "green"
        content.children[0].style.background = "yellow"
        content.children[0].style.color = "yellow"
        content.children[3].style.background = "yellow"
        content.children[3].style.color = "yellow"
    }
    else if (num > 50 && num < 75) {
        content.children[2].style.background = "red"
        content.children[1].style.background = "green"
        content.children[0].style.background = "yellow"
        content.children[0].style.color = "yellow"
        content.children[3].style.background = "yellow"
        content.children[3].style.color = "yellow"
    }
    else if (num > 75 && num < 100) {
        content.children[3].style.background = "red"
        content.children[0].style.background = "green"
        content.children[1].style.background = "yellow"
        content.children[1].style.color = "yellow"
        content.children[2].style.background = "yellow"
        content.children[2].style.color = "yellow"
    }
    console.log(num)
})


