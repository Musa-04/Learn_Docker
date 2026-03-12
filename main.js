const express = require('express');
const app = express();
const PORT=process.env.PORT || 8000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});
app.get('/',(req,res)=>{
    return res.json({message:"Hello From Im Node JS in Container..."});
    
});