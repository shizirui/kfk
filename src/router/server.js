const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const fs = require('fs');


app.use(cors());
app.get('/api/data', (req, res) => {
    fs.readFile('../vue-takeaway/src/assets/foods.json', 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(404).send('读取文件错误');
            
        }
        res.json(JSON.parse(data));
    });

});

app.get('/api/information', (req, res) => {
    fs.readFile('../vue-takeaway/src/assets/information.json', 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(404).send('读取文件错误');
            
        }
        res.json(JSON.parse(data));
    });

});

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});