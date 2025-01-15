require('dotenv').config(); // Load environment variables

const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

app.use(express.static('static'));

app.get('/', (req, res) => {
  // Conditionally send different responses based on IS_ADMIN variable
  if (process.env.IS_ADMIN === 'true') {
    res.send({ message: "Welcome, Bhumit", data: ["Male", "19"] });
  } else {
    res.send({ message: "Welcome, Bhumigya", data: ["male", "19"] });
  }
});

app.listen(port, () => {
  console.log(` Server is running on port 3000: http://localhost:${port}`);
  
});