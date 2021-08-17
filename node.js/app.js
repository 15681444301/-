const express = require("express");
const app = express();
app.all("*", function (req, res, next) {
  //设置允许跨域的域名，*代表允许任意域名跨域
  res.header("Access-Control-Allow-Origin", "*");
  //允许的header类型
  res.header("Access-Control-Allow-Headers", "content-type");
  //跨域允许的请求方式
  res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
  if (req.method.toLowerCase() == "options") res.send(200);
  //让options尝试请求快速结束
  else next();
});

const bodyparser = require("body-parser");
const port = process.env.PORT || 5000;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send({ msg: "server is works" });
});

const Users = require("./routes/Users");
app.use("/api/v1", Users);

app.listen(port, () => {
  console.log("sever is running on port" + port);
});
