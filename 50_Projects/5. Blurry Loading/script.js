let body = document.querySelector(".body")
let content = document.querySelector(".counter")
console.log(content.innerText);

for (let i=0; i <= 101; i++) {
    setTimeout(() => {
        // console.log(i);
        content.innerText=`${i}%`
    }, 20*i)
}
setTimeout(()=>{
    content.style.display="none"
},2000)