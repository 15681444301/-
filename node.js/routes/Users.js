// 登录  注册接口

const express = require("express");
const users = express.Router();
// 数据库
const User = require("../models/User");

process.env.SECRET_KEY = "secret";

// 用户注册
users.post("/register", (req, res) => {
  console.log(req.body);
  const now = new Date();
  const userData = {
    name: req.body.name,
    password: req.body.password,
    created: now,
  };
  //   存之前  先查询
  User.findOne({ where: { name: req.body.name } })
    .then((user) => {
      if (!user) {
        User.create(userData).then((user) => {
          res.json({
            code: 1,
            msg: "注册成功",
          });
        });
      } else {
        // 数据库存在
        res.json({
          code: 0,
          msg: "用户已存在",
        });
      }
    })
    .catch((err) => {
      res.send(err + "error");
    });
});

// 登录

users.post("/login", (req, res) => {
  User.findOne({ where: { name: req.body.name } })
    .then((user) => {
      // 查到用户
      if (user) {
        //   匹配密码
        if (req.body.password == user.password) {
          const successData = {
            msg: "登录成功",
            code: 1, //1成功 /0失败
          };
          res.send(successData);
        } else {
          const errorData = {
            msg: "密码错误",
            code: 0, //1成功 /0失败
          };
          res.send(errorData);
        }
      }
    })
    .catch((err) => {
      res.status(400).json({ Error: "用户不存在" });
    });
});

module.exports = users;
