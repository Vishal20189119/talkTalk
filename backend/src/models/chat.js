'use strict'

import crypto from 'crypto'
import bcypt from 'bcrypt';

module.exports = (sequelize, DataTypes)=>{
    const Chat = sequelize.define('Chat', {
        chatName: DataTypes.STRING,
        isGroupChat: DataTypes.BOOLEAN,
        groupAdmin: DataTypes.UUID
    },{
        timestamps: true,
    })
    
    Chat.associate = function (models){
        models.Chat.hasMany(models.Message, {foreignKey: 'chatId'});
        models.Chat.belongsTo(models.User, {foreignKey: 'groupAdmin'});
        models.Chat.hasMany(models.ChatUser, {foreignKey: 'chatId'});
        models.Chat.belongsToMany(models.User, {through: models.ChatUser});
    }
    return Chat;
}
