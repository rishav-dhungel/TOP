// routes/authorRouter.js
const { Router } = require("express");

const userRouter = Router();


userRouter.get("/", (req,res) =>{res.send("User Route Reached")})

userRouter.get("/:userId", (req,res) =>{
  res.send(`You have reached the call for User with the id of: ${req.params.userId}`)
  console.log(req.params)
  res.end();
})


userRouter.get("/:userId/messages", (req,res) =>{
  console.log(req.params);
  res.json(req.params)
  res.end();
})


userRouter.get("/:userId/messages/:messageId", (req,res) =>{
  console.log(req.params)
  res.json(req.params)
  res.end;
})

module.exports = userRouter;