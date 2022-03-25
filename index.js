const express = require('express');
const DataStore = require('nedb')
const app = express();
app.listen('3000', () => { console.log('listening to port 3000'); });

const database = new DataStore('database.db')
database.loadDatabase();
database.insert({name:"Chris", age: 22, job: "web developer"})

app.use(express.static('public'));
app.use(express.json({limit: '10mb'}));
app.post('/api', (req, res) => {
    const body = req.body
    const date = new Date()
    database.insert(body)
    console.log(database);
    res.json({
        status: 'success',
        runtime: date.getMilliseconds() + 'ms'
    });
})