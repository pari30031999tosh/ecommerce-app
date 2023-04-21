const db = require('../models')


const bcrypt = require('bcrypt');
const uuidv4 = require('uuid').v4;
const nodemailer = require('nodemailer')
const sendgridTransport = require('nodemailer-sendgrid-transport')


const transporter = nodemailer.createTransport(sendgridTransport({
    auth:{
        api_key: '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'
    }
}));

async function signupUser(req, res, next){
    
    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    let email = req.body.email;
    var password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(password,salt)
    
   
   try{
       
        
        let userData = {
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password,
            
        }


        var result = await db.Users.create(userData);
        
        transporter.sendMail({
            to: email,
            from: 'pari1999tosh.pandey@gmail.com',
            subject: 'signup succeed',
            html: '<h1>thanks for signing up</h1>'
        })
        return res.status(200).json({
            status: 200,
            message: "successfully created user",
            result: result
        })

    }catch(err){
        
        
        return res.status(300).json({
            status: 200,
            message: "server sode error",
            error: err
        })
    }
}

async function loginUser(req, res, next){
    var email = req.body.email;
    var password = req.body.password;
    
    //check if email is there
    try{
        var result = await db.Users.findOne({
            where:{
                email: email
            }
        })
    
        if(!result){
            res.send("email not registered")
        }
    
        var authresult = await bcrypt.compare(password, result.password)
        
        if(authresult){
            const sessionId = uuidv4();
            console.log("sessionid===========================", sessionId)
            res.set('Set-cookie',`session = ${sessionId}`)
            let sessionData = {
                sessionId: sessionId,
                email: email
            }
            await db.Sessions.create(sessionData)

            
            return res.status(200).json({
                status: 200,
                message: "successfully logged in",
                result: result
            })
        }else{
            return res.status(401).json({
                status: 401,
                message: "password is incorrect",
                
            })
        }

    }catch(err){
        return res.status(300).json({
            status: 300,
            message: "server side error"
        })
    }

}

async function logoutUser(req, res, next){
    let sessionId = req.headers.cookie?.split('=')[1];
    try{
        await db.Sessions.destroy({
            where:{
                sessionId: sessionId
            }
        })

        res.set('Set-cookie','session =;expires=Thu, 01 Jan 1970 00:00:00 GMT')

    
        return res.status(200).json({
            status: 200,
            message: "successfully logged out"
        })
    }catch(err){
        return res.status(300).json({
            status: 300,
            error: err
        })
    }
}



module.exports = { signupUser, loginUser, logoutUser }