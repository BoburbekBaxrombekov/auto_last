const Admin = require('../models/user')

exports.AdminCreate = {
    add:async(req, res)=>{
       try {
        const user = new Admin({
            name: req.body.name,
            gmail: req.body.gmail,
            password: req.body.password,
            roles: req.body.roles
        })
        await user.save()
        res.status(200).json({
            success: true,
            data: user
        })
       } catch (e) {
           console.log(e, 'err')
       }
    },
    getById:async(req, res)=>{
        try {
            const {id} = req.params
            const getOne = await Admin.findById(id)
            res.status(200).json(getOne)
        } catch (e) {
            console.log(e, 'err')
        }
    },
    getAll:async(req, res)=>{
        try {
            const user = await Admin.find({
                role: { 
                    $in: ["dekan"]
                }
            })
            res.json(user)
        } catch (e) {
            console.log(e, 'err')
        }
    },
    updateOne:async(req, res)=>{
        try {
            const userUpdate = await Admin.findByIdAndUpdate({_id: req.params.id})
            userUpdate.name = req.body.name
            userUpdate.email = req.body.email
            userUpdate.password = req.body.password
            await talaUpdate.save()
            res.status(200).json(userUpdate)
        } catch (e) {
            console.log(e, 'err')
        }
    },
    deleteOne:async(req, res)=>{
        try {
            const {id} = req.params
            const deletOne = await Admin.findByIdAndDelete(id)
            res.json({
                success: true,
                data: []
            })
        } catch (e) {
            console.log(e, 'err')
        }
    },
    login:async(req, res)=>{
        try {
            const { gmail, password } = req.body;
            console.log(req.body);
            if (!gmail || !password) {
                res.status(400)
            }
            else if(gmail == "abc@gmail.com" && password == "parol123"){
                console.log('ok');
                res.status(200).json({success: true})
            }else{
                res.sendStatus(404)
            }
        } catch (e) {
            console.log(e, "err")
        }
    }
}