const button = document.querySelector("#button")
const paragarph = document.querySelector("#para")

button.addEventListener("click",async ()=>{
    paragarph.innerText= await jokeTaker()
})

async function jokeTaker(){
        const data = await fetch('https://jsonplaceholder.typicode.com/todos/'+Math.floor(Math.random()*10).toString())
        const {title} = await data.json()
        return title
}