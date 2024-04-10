//it will create a message


import express from 'express';
import jwtStrategy from '../../strategy/auth/jwtauth';
import db from '../../models';


let controller = async (req, res, next)=>{
    const {chatId, content} = req.body;
    
    try{
        // console.log(`\x1b[32m db.chat: ${db} \x1b[0m`);
        
        const message = await db.Message.create({
            chatId, content
        })
        // console.log(`\x1b[32m chat: ${chat} \x1b[0m`);
        
        res.status(201).json({
            success: true,
            messages: 'chat created successfully'
        });
    }catch(error){
        // console.log(`\x1b[34m The error is coming \x1b[0m`);
        next(error);
    }
}

const apiRouter = express.Router();
apiRouter.route('/').post(jwtStrategy, controller);
export default apiRouter;

