const Router = require("express");
const User = require("../models/User")
const bcrypt = require("bcryptjs")
const config = require("config")
const jwt = require("jsonwebtoken")
const {check, validationResult} = require("express-validator")
const router = new Router()
const authMiddleware = require('../middleware/auth.middleware')

const mailer =  require('nodemailer')

router.post('/registration',
    [
        check('email', "Uncorrect email").isEmail(),
        check('password', 'Password must be longer than 3 and shorter than 12').isLength({min:3, max:12})
    ],
    async (req, res) => {
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({message: "Uncorrect request", errors})
        }
        const {email, password} = req.body
        const candidate = await User.findOne({email})
        if(candidate) {
            return res.status(400).json({message: `User with email ${email} already exist`})
        }
        const hashPassword = await bcrypt.hash(password, 8)
        const user = new User({email, password: hashPassword})
        await user.save()
        res.json({message: "User was created"})
    } catch (e) {
        console.log(e)
        res.send({message: "Server error"})
    }
})


router.post('/login',
    async (req, res) => {
        try {
            const {email, password} = req.body
            const user = await User.findOne({email})
            if (!user) {
                return res.status(404).json({message: "User not found"})
            }
            const isPassValid = bcrypt.compareSync(password, user.password)
            if (!isPassValid) {
                return res.status(400).json({message: "Invalid password"})
            }
            const token = jwt.sign({id: user.id}, config.get("secretKey"), {expiresIn: "1h"})
            return res.json({
                token,
                user: {
                    id: user.id,
                    email: user.email,
                    diskSpace: user.diskSpace,
                    usedSpace: user.usedSpace,
                    avatar: user.avatar
                }
            })
        } catch (e) {
            console.log(e)
            res.send({message: "Server error"})
        }
    })

router.get('/auth', authMiddleware,
    async (req, res) => {
        try {
            const user = await User.findOne({_id: req.user.id})
            const token = jwt.sign({id: user.id}, config.get("secretKey"), {expiresIn: "1h"})
            return res.json({
                token,
                user: {
                    id: user.id,
                    email: user.email,
                    diskSpace: user.diskSpace,
                    usedSpace: user.usedSpace,
                    avatar: user.avatar
                }
            })
        } catch (e) {
            console.log(e)
            res.send({message: "Server error"})
        }
    })
router.post('/mail',  (req,res)  =>  {
  const {number} = req.body
  let transporter = mailer.createTransport({
    service:'gmail',
    auth:{
      user:"muhammed.ert777@gmail.com",
      pass:"rfyfn022402"
    }
  })
  let mailOptions={
    from:'muhammed.ert777@gmail.com',
    to:'buhfinova@gmail.com',
    subject:"Номер клента",
    text:number
  }


  transporter.sendMail(mailOptions,function(err,data) {
    if(err){
      console.log("error:",err);
    }
    else {
      console.log("email sent!!!");
    }
  })
})
router.post('/mail-info',  (req,res)  =>  {
  const {number,name,email} = req.body
  let transporter = mailer.createTransport({
    service:'gmail',
    auth:{
      user:config.get("user"),
      pass:config.get("passw")
    }
  })
  let mailOptions={
    from:'muhammed.ert777@gmail.com',
    to:'buhfinova@gmail.com',
    subject:"Номер клента",
    text:name,
    html: `номер телфона клиента:${number}<br/>Имя клиента:${name}<br/>Email Клиента:${email}`,

  }


  transporter.sendMail(mailOptions,function(err,data) {
    if(err){
      console.log("error:",err);
    }
    else {
      console.log("email sent!!!");
    }
  })
})

module.exports = router
