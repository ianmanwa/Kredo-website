// HTML SELECTORS
const form = document.getElementById("Signup-id")
const number = document.getElementById("phone-id")
const key = document.getElementById("password-id")
const url = "http://localhost:5000/games/signUp"


form.addEventListener("submit", function (e) {

    e.preventDefault()

    const phone = number.value
    const password = key.value

    e.target.reset()
    console.log({ phone, password })

    signUp(phone, password)
})


//Signup function
async function signUp(phone, password) {

    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ phone, password })
    })
        .then(res => res.json())
        .then(data => {
            localStorage.setItem("token", data.token)
            window.location.replace("Dashboard.html")
        })



}

