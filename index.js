const express = require('express');
const DataStore = require('nedb')

const app = express();

const port = process.env.PORT || 3000
app.listen(port, () => { console.log(`listening to port ${port} `); });

const database = new DataStore('DataHouse/database.db')
database.loadDatabase();

const dataHouse = new DataStore('DataHouse/dataHouse.db')
dataHouse.loadDatabase();

const userCredentials = new DataStore('DataHouse/dataLog.db')
userCredentials.loadDatabase();

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
app.get('/tabbisubmit', (req, res) => {
    dataHouse.find({},( err, data ) => {
        if(err) {
            res.end();
            return;
        }
        else {
            res.json(data)
        }
    })
} )
app.get('/loginData', (req, res) => {
    userCredentials.find({},( err, data ) => {
        if(err) {
            res.end();
            return;
        }
        else {
            res.json(data)
        }
    })
})
app.get('/checkLog', (req, res) => {
    userCredentials.find({},( err, data ) => {
        if(err) {
            res.end();
            return;
        }
        else {
            res.json(data)
        }
    })
})
app.get('/UIDapi', (req, res) => {
    userCredentials.find({},( err, data ) => {
        if(err) {
            res.end();
            return;
        }
        else {
            for(var i=0; i< data.length; i++){
                const id = data[i].userID
                res.json(id)
            }
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
app.post('/loginData', (req, res) => {
  const body = req.body
  userCredentials.insert(body)
  res.json({
      body :body,
      status: 'success'
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