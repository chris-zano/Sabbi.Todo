const express = require('express');
const DataStore = require('nedb')
const app = express();
app.listen('3000', () => { console.log('listening to port 3000'); });

const database = new DataStore('database.db')
database.loadDatabase();

app.use(express.static('public'));
app.use(express.json({limit: '10mb'}));

app.get('/api', (req, res) => {
    database.find({},( err, data ) => {
        if(err) {
            res.end();
            return;
        }
        else {
            res.json(data)
        }
    })
} )

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