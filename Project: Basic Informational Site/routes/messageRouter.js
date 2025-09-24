const{Router} = require("express");
const messageRouter = Router();

messageRouter.get("/", (req,res)=>{
  res.send("This route works for either 'message' or 'messages' ");
})


messageRouter.get("/{*splat}/chat", (req,res)=>{
  res.send("This route works for either messages/{anything}/chat or /message/chat")
})

module.exports = messageRouter;