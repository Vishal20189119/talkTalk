import express from 'express';
import jwtStrategy from '../../strategy/auth/jwtauth';
import db from '../../models';

let controller = async (req, res, next)=>{
    const {chatName, isGroupChat} = req.body;
    
    try{
        // console.log(`\x1b[32m db.chat: ${db} \x1b[0m`);
        
        const chat = await db.Chat.create({
            chatName, isGroupChat: 0, 
        })
        // console.log(`\x1b[32m chat: ${chat} \x1b[0m`);
        console.log(chat);
        
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

