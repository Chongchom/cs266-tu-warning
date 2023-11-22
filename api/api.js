var express = require('express')
var cors = require('cors')
var app = express()

app.use(cors())
app.use(express.json());
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'person'
});
 
connection.connect();

app.get('/personlist', function (req, res, next) {
    connection.query('SELECT * FROM personlist', function (error, results, fields) {
        if (error) throw error;
        res.json(results)
      });

})

app.get('/locationlist', function (req, res, next) {
    connection.query('SELECT * FROM locationlist', function (error, results, fields) {
        if (error) throw error;
        res.json(results)
      });

})

app.post('/locationSend', function (req, res, next) {
    var name = req.body.name;
    var detail = req.body.detail;
    console.log(name, detail)
    connection.query('INSERT INTO locationlist (name, detail) VALUES (?, ?)',
      [name, detail],
      function (error, results) {
        if (error) {
          console.error('Error in /personSend:', error);
          return res.status(500).json({ error: 'Internal Server Error' });
        }
  
        //res.json(results);
      });
  });

app.post('/personSend', function (req, res, next) {
    var name = req.body.name;
    var detail = req.body.detail;
    var coverimage = req.body.coverimage;
    console.log(name, detail, coverimage)
    connection.query('INSERT INTO personlist (name, detail, coverimage) VALUES (?, ?, ?)',
      [name, detail, coverimage],
      function (error, results) {
        if (error) {
          console.error('Error in /personSend:', error);
          return res.status(500).json({ error: 'Internal Server Error' });
        }
  
        //res.json(results);
      });
  });
// app.post('/personSend', function (req, res, next) {
//     var name = req.body.name; // Assuming the name, detail, coverimage are sent in the request body
//     var detail = req.body.detail;
//     var coverimage = req.body.coverimage;
  
//     connection.query('INSERT INTO personlist (name, detail, coverimage) VALUES (?, ?, ?)',
//       [name, detail, coverimage],
//       function (error, results, fields) {
//         if (error) throw error;
//         res.json(results);
//       });
//   });


app.listen(3333, function () {
  console.log('CORS-enabled web server listening on port 3333')
})