const express = require('express')
const app = express()
const port = 8080
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    
    
    next();
  });

app.get('/get-marks', (req, res) => {
  res.status(200).json({
      data : [
        {
            "name":"rajiv",
            "marks":{
                "Maths":"18",
                "English":"21",
                "Science":"45"
            },
            "rollNumber":"KV2017-5A2"
        },
        {
            "name":"abhishek",
            "marks":{
                "Maths":"43",
                "English":"30",
                "Science":"37"
            },
            "rollNumber":"KV2017-5A1"
        },
        {
            "name":"zoya",
            "marks":{
                "Maths":"42",
                "English":"31",
                "Science":"50"
            },
            "rollNumber":"KV2017-5A3"
        },
        { "name": "sanjiv",
            "marks": {
            "Maths": "18",
            "English": "21",
            "Science": "45"
            },
            "rollNumber": "KV2017-5A5"
            },
            { 
            "name": "abhishith",
            "marks": {
            "Maths": "43",
            "English": "30",
            "Science": "37"
            },
                "rollNumber": "KV2017-5A6"
            },
            { "name": "koya",
            "marks": {
            "Maths": "42",
            "English": "21",
            "Science": "50"
            },
            rollNumber: "KV2017-5A4"
        }
    ]
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})