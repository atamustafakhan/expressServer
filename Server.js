const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const dataSend = {
    "name": "John",
    "age": 30,
    "city": "New York"
}
let dataRecive = [];
//send
app.get('/GET', (req, res) => {
  
    res.send(JSON.stringify(dataSend));

})
//Recive
app.post((req, res) => {
    res.send('data received');
})
//Update row
app.put((req, res) => {
    res.send('row updated');
})
//server listen
app.listen(port, () => {
    console.log('server is listning on port' + port)
})
