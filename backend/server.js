const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());


app.get('/',(req,res)=>{
    res.send(`Server is running on port 8000`);
});

app.listen(PORT,()=>{
    console.log(`Server well on running on http://localhost:${PORT}`);
});