'use strict'

import crypto from 'crypto'
import bcypt from 'bcrypt';

module.exports = (sequelize, DataTypes)=>{
    const Message = sequelize.define('Message', {
        content: DataTypes.STRING,
        chatId: DataTypes.UUID
    },{
        timestamps: true
    })
    Message.associate = function (models){
        models.Message.hasMany(models.MessUser, {foreignKey: 'messId'});
        models.Message.belongsToMany(models.User, {through: models.MessUser});
        models.Message.belongsTo(models.Chat, {foreignKey: 'chatId'});
    }
    return Message;
}
