'use strict'

import crypto from 'crypto'
import bcypt from 'bcrypt';

module.exports = (sequelize, DataTypes)=>{
    const MessUser = sequelize.define('MessUser', {
        messId: DataTypes.UUID,
        userId: DataTypes.UUID,
        readAt: DataTypes.UUID
    },{
        timestamps: true,
    })
    
    MessUser.associate = function (models){
        models.MessUser.belongsTo(models.Message, {foreignKey: 'messId'});
        models.MessUser.belongsTo(models.User, {foreignKey: 'userId'});
    }
    return MessUser;
}
