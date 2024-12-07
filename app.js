const modal = document.querySelector('article')
const main = document.querySelector('main')
const popButton = document.querySelector('.popover')

const emojis = ["😶‍🌫️", "😶‍🌫️", "😂", "😂", "🤑", "🤑", "😆", "😆", "😴", "😴", "😎", "😎", "😍", "😍", "🤯", "🤯"]
var shufEmojis = emojis.sort(() => (Math.random()> .5) ? 2 : -1)

for (var i=0; i<emojis.length; i++) {
    let box = document.createElement('div')
    box.className = 'item'
    box.innerHTML = shufEmojis[i]

    box.onclick = function() {
        this.classList.add('boxOpen')

        setTimeout(function(){
            if(document.querySelectorAll('.boxOpen').length > 1) {

                if(document.querySelectorAll('.boxOpen')[0].innerHTML == document.querySelectorAll('.boxOpen')[1].innerHTML) {

                    document.querySelectorAll('.boxOpen')[0].classList.add('boxMatch')
                    document.querySelectorAll('.boxOpen')[1].classList.add('boxMatch')

                    document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen')
                    document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen')

                    if(document.querySelectorAll('.boxMatch').length == emojis.length) {
                        modal.style.visibility = "visible"
                        main.style.filter = "blur(15px)"
                    } 
                } else {
                    document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen')
                    document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen')
                }
            }
        }, 500)
    }

    document.querySelector('.game').appendChild(box)
}

popButton.onclick = () => {
    modal.style.visibility = "hidden"
    main.style.filter = "none"
    window.location.reload()
}