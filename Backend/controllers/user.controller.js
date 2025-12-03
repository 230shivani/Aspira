const userModel = require("../models/user.model")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


module.exports.registerUser = async (req, res) => {

    const { name, userId, email, password } = req.body;
    const isUserExist = await userModel.findOne({
        $or: [{ userId: userId }, { email: email }]
    });
    if (isUserExist) {
        return res.status(400).json({
            message: "User already exists"
        })
    }


    const user = await userModel.create({
        name,
        userId,
        email,
        password: bcrypt.hashSync(password, 8)
    });
    res.status(201).json({ user })
}

module.exports.loginUser = async (req, res) => {

    const { identifier, password } = req.body;
    const user = await userModel.findOne({
        $or: [{ userId: identifier }, { email: identifier }]
    });

    if (!user) {
        return res.status(401).json({
            message: "Invalid credentials"
        })
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(401).json({
            message: "Invalid credentials"
        });
    }

    const token = jwt.sign(
        { id: user._id },
        process.env.JWT_SECRET,
        { expiresIn: "30d" }
    );



    return res.status(200).json({
        message: "Login successful",
        userId: user.userId,
        token: token,
    });


}