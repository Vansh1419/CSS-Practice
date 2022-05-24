window.addEventListener("keydown", function (e) {
    const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = this.document.querySelector(`.btn[data-key="${e.keyCode}"]`);

    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add(`playing`);
})

function removeTransition(e) {
    if (e.propertyName !== 'transform') {//skip it if it is not transform
        return;
    }
    this.classList.remove("playing");
}
const buttons = document.querySelectorAll(".btn");
buttons.forEach(key => {
    key.addEventListener("transitionend", removeTransition)
})