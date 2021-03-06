const User = require('../Models/user')

module.exports={
    createUser: async (req,res)=>{
        const body = req.body
        const displayname = body.username
        const email = body.email
        const password = body.password
        const userExist = await User.find()
        if(!userExist){
            res.status(409).json({
                msg:"User Already exist"
            })
        }else{
            const newUser = new User()
            newUser.displayname = displayname
            newUser.email = email
            newUser.password = newUser.hashPassword(password)
            await newUser.save()
            res.status(201).json({
                msg:"User Created"
            })
        }
    },
    login: async (req,res)=>{
        const body = req.body
        console.log(body)
        const email = body.email
        const password = body.password
        const data = await User.findOne({email:email})
        if(!data){
            res.status(200).json({
                msg:"User Not Exist"
            })
        }
        else {
            const passwordVaildation = data.validPassword(password)
            if(!passwordVaildation){
                res.status(200).json({
                    msg:"Password Mismatched"
                })
            }else {
                res.status(200).json({
                    msg:"Login Success"
                })
            }
        }
    }
}