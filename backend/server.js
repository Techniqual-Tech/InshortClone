const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());//allow cross platform request if node server and react clinet server both running on differnet port

let reqcount=0;
//for making api request 
//const axios=require('axios');

//import newapi module
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('e5a6fb40c8714bfbbb6d723fbfa84257');

const port = 8080;

app.get('/', (req, res) => {
  console.log("Get requrest");
})
app.get('/api', (req, res) => {
  reqcount++;
  const query = req.query.query ;
  newsapi.v2.everything({
    q: `${query}`,
    language: 'en',
  }).then(response => {
    res.json(response)
    console.log(response);
  });
  console.log("Requests count:- "+reqcount);
})
//weather random image
app.get('/weatherimg', (req, res) => {
  fetch(`https://api.unsplash.com/photos/random?query=weather&orientation=landscape&client_id=Wqur9OwiJvJMSs9PCoVDgCzNq2ob15pnQ2tQ2m-OMuo`)
  .then(response => {
    if (response.ok) {
      return response.json(); // Convert the response to JSON
    } else {
      throw new Error('Network response was not ok');
    }
  })
  .then(data => {
    res.json(data); // Send the JSON data as a response
  })
  .catch(error => {
    console.error('Fetch error:', error);
    res.status(500).json({ error: 'Error fetching data' }); // Handle errors
  });
});
//weather data
app.get('/weather', (req, res) => {
  const city=req.query.city;
  const country=req.query.country;
  console.log(`https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&id=524901&appid=8994a5584c49f1961832c07565ce92e3`);
  fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&id=524901&appid=8994a5584c49f1961832c07565ce92e3`)
  .then(response => {
    if (response.ok) {
      console.log("responseweather:-"+response)
      return response.json(); // Convert the response to JSON
    } else {
      throw new Error('Network response was not ok');
    }
  })
  .then(data => {
    res.json(data); // Send the JSON data as a response
  })
  .catch(error => {
    console.error('Fetch error:', error);
    res.status(500).json({ error: 'Error fetching data' }); // Handle errors
  });
});
//another news api
/* app.get('/api', (req, res) => {
  const query = req.query.query ;
  fetch(`https://gnews.io/api/v4/top-headlines?category=${query}&lang=en&country=in&max=10&apikey=696d9f3ff9cbba6f0d115047747ce766`)
  .then(response => {
    if (response.ok) {
      return response.json(); // Convert the response to JSON
    } else {
      throw new Error('Network response was not ok');
    }
  })
  .then(data => {
    res.json(data); // Send the JSON data as a response
  })
  .catch(error => {
    console.error('Fetch error:', error);
    res.status(500).json({ error: 'Error fetching data' }); // Handle errors
  });
});
 */

app.listen(port, () => {
  console.log(`Server listning at port ${port}`);
})