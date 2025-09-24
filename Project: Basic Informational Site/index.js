const express_module = require('express');
const path = require("path");

const server = express_module();

//serve static file from public folder
server.use(express_module.static(path.join(__dirname,'public')));

require("dotenv").config();

// console.log(process.env.NODE_ENV);
// console.log(process.env.VIDEO_URL);
const PORT = process.env.PORT || 4594;


server.get("/", (req,res) =>{
  res.sendFile(path.join(__dirname,'public','index.html'));
})

server.get("/about", (req,res) =>{
  res.sendFile(path.join(__dirname,'public','about.html'));
})

server.get("/contact", (req,res) =>{
  res.sendFile(path.join(__dirname,'public','contact-me.html'));
})

//routes
server.get("/message{s}", (req,res)=>{
  res.send("This route works for either 'message' or 'messages' ");
})


server.get("/message{s}/{*splat}/chat", (req,res)=>{
  res.send("This route works for either messages/{anything}/chat or /message/chat")
})

server.get("/user/:userId", (req,res) =>{
  res.send(`You have reached the call for User with the id of: ${req.params.userId}`)
  console.log(req.params)
  res.end();
})


server.get("/:userId/messages", (req,res) =>{
  console.log(req.params);
  res.json(req.params)
  res.end();
})


server.get("/:userId/messages/:messageId", (req,res) =>{
  console.log(req.params)
  res.json(req.params)
  res.end;
})


server.get("/{*splat}", (req,res)=>{
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));

})



// 404 handler (catch-all) - should be last
server.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});


server.listen(PORT, (error) => {
          if(error){
            throw error
          }
        console.log(`server running on port: ${PORT}`);
      });