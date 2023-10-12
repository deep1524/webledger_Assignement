const express = require("express")
const axios = require("axios")
const authRouter = express.Router()

const {UserModel} = require("../Models/User")

authRouter.post("/signup",async(req,res)=>{

    const {googleAccessToken} = req.body;

    axios
        .get("https://www.googleapis.com/oauth2/v3/userinfo", {
        headers: {
            "Authorization": `Bearer ${googleAccessToken}`
        }
    })
        .then(async response => {
            const email = response.data.email;
            const Name = response.data.name
            const existingUser = await User.findOne({email})

            if (existingUser){
                return res.json({message: "User already exist!"})
            }

            const result = await UserModel.create({Name,email})

            const token = jwt.sign({
                email: result.email,
                id: result._id
            }, config.get("JWT_SECRET"), {expiresIn: "5h"})

            res.json({result, token})
        })
        .catch(err => {
            res.json({message: "Invalid access token!"})
        })
})

authRouter.post("/signin",async(req,res)=>{
    const {googleAccessToken} = req.body;

        axios
            .get("https://www.googleapis.com/oauth2/v3/userinfo", {
            headers: {
                "Authorization": `Bearer ${googleAccessToken}`
            }
        })
            .then(async response => {
                const email = response.data.email;

                const existingUser = await UserModel.findOne({email})

                if (!existingUser) 
                return res.json({message: "User don't exist!"})

                const token = jwt.sign({
                    email: existingUser.email,
                    id: existingUser._id
                }, config.get("JWT_SECRET"), {expiresIn: "5h"})
        
                res.json({result: existingUser, token})
                    
            })
            .catch(err => {
                res.json({message: "Invalid access token!"})
            })
})

module.exports = {authRouter}