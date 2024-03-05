const express = require('express');
const app = express()
const port = 3000;

const model= require('./Database');
const deleteApi = require('./APIS/deleteApi');
const updateApi = require('./APIS/updateApi');

app.use('/delete/', deleteApi);
app.use('/edit', updateApi);







app.listen(port, ()=>{
    console.log(`server running on port ${port}`);
})