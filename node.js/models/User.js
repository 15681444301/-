const Sequelize=require('sequelize')
const db=require('../database/db')

module.exports=db.sequelize.define(
    'users',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{type:Sequelize.STRING,},
    password:{type:Sequelize.STRING,},
    created:{type:Sequelize.DATE, defaultValue:Sequelize.NOW,}
},{
  timestamps:false,
})