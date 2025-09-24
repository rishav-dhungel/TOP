const express_module = require('express');
const authorRouter = require("./routes/authorRouter");
const userRouter = require("./routes/userRouter");
const messageRouter = require("./routes/messageRouter");

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

//
server.use("/authors", authorRouter);
server.use("/user{s}", userRouter);
server.use("/message{s}",messageRouter);

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