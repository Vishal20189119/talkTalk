import express from 'express';
import jwtStrategy from '../../strategy/auth/jwtauth';
import db from '../../models';

let controller = async (req, res, next)=>{
    const {chatName, isGroupChat} = req.body;

    try{
        const chat = await db.Chat.create({
            chatName, isGroupChat
        })
        res.status(201).json({
            data:chat,
            success: true,
            messages: 'chat created successfully'
        });
    }catch(error){
        console.log('error ', error);
        next(error);
    }
}

const apiRouter = express.Router();
apiRouter.route('/').post(jwtStrategy, controller);
export default apiRouter;

