const User = require("../schemaModels/userSchema")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")


//SignUp logic
const signUp = async (req, res) => {
    const { phone, password } = req.body



    if (!phone || !password) {
        return res.status(400).json({ message: "Please enter all fields" });
    }

    coins = 0

    let user = await User.findOne({ phone })
    if (user) {
        return res.status(400).json({ message: "Phone number already exists" })
        
    }

    const hashPwd = await bcrypt.hash(password, 10)
    const newUser = await User.create({ phone, password: hashPwd, coins })

    let token = jwt.sign({ phone }, process.env.SECRET_KEY, { expiresIn: "1d" })
    return res.status(200).json({ token })

}


//Login logic
const login = async (req, res) => {
    const { phone, password } = req.body

    if (!phone || !password) {
        return res.status(400).json({ message: " Enter all fields " })
    }

    const user = await User.findOne({ phone })
    if (user && await bcrypt.compare(password, user.password)) {
        let token = jwt.sign({ phone }, process.env.SECRET_KEY, { expiresIn: "1d" })
        return res.status(200).json({ token, message: "Login Succcessful" })

        console.log(newUser)
    } else {
        return res.status(400).json({ message: "Wrong details. Try again" })
    }


}




module.exports = { signUp, login }