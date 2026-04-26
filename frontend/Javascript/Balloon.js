let coins = 30

//ID Element selectors
const video = document.getElementById("video-id")
const videoContainer = document.getElementById("container-id")
const counter = document.getElementById("counter-id")
const question = document.getElementById("ask-id")
const form = document.getElementById("form-id")
const balance = document.getElementById("balance-id")
const winAmount = document.getElementById("win-amount")
const loseAmount = document.getElementById("lose-amount")
const winDiv = document.getElementById("win-id")
const loseDiv = document.getElementById("lose-id")

const winBtn = document.getElementById("win-btn")
const loseBtn = document.getElementById("lose-btn")



//HIDE WIN AND LOSE DIVS 
winDiv.style.display = "none"
loseDiv.style.display = "none"


//REDIRECTS FROM WIN OR LOSE PAGE BACK TO THE MAIN PAGE
function redirect() {
    winDiv.style.display = "none"
    loseDiv.style.display = "none"

    question.style.display = "flex"
    form.style.display = "flex"
}

//SHOW AND UPDATE BALANCE
function showBalance() {
    balance.textContent = `Coins:🪙${coins}`
}
showBalance()




// LISTENS TO THE FORM FOR "HOW HIGH DO YOU WANT TO GO" 
form.addEventListener("submit", function (e) {
    e.preventDefault()

    const input = document.getElementById("input-id").value


    if (input > coins) {
        return
    }
    if (!input) {
        return
    }

    animateCounter(input)

    question.style.display = "none"
    form.style.display = "none"

    videoContainer.style.display = "flex"
    video.currentTime = 0
    video.play()


    e.target.reset()
})






// GENERATES FINAL NUMBER, ANIMATES COUNTER, DECIDES GAME LOGIC
async function animateCounter(userInput) {
    const finalNumber = Number(Math.floor(Math.random() * 100))
    const finalInput = Number(userInput)
    let current = 0


    const interval = setInterval(() => {
        current++
        counter.textContent = current + " Meters"

        // WIN
        if (current === finalInput) {
            coins = coins + finalInput
            videoContainer.style.display = "none"
            winDiv.style.display = "flex"
            showBalance()

        }


        // HARD STOP (safety)
        else if (current >= finalNumber) {
            clearInterval(interval)

            // LOSE (counter passed user's guess)
            if (current < finalInput) {
                clearInterval(interval)
                coins = coins - finalInput
                videoContainer.style.display = "none"
                loseDiv.style.display = "flex"
                showBalance()
            }

            //IF USER LOSSES ALL COINS AND ACCOUNT IS EMPTY
            if (coins <= 0) {
                balance.textContent = `Coins:🪙0`
            }

        }
    }, 200)


}


// WIN SCREEN
