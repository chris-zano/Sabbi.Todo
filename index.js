const express = require('express');
const DataStore = require('nedb')

const app = express();

const port = process.env.PORT || 3000
app.listen(port, () => { console.log(`listening to port ${port} `); });

const database = new DataStore('database.db')
database.loadDatabase();

const dataHouse = new DataStore('dataHouse.db')
dataHouse.loadDatabase();

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
app.post('/tabbisubmit', (req, res) => {
  const body = req.body
  dataHouse.insert(body)
  res.json({
      status: 'success',
  });
})

app.post('/api', (req, res) => {
    const body = req.body
    const date = new Date()
    database.insert(body)
    res.json({
        status: 'success',
        runtime: date.getMilliseconds() + 'ms'
    });
})