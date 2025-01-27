// Import the express module
const express = require('express');

// Create an instance of the express application
const app = express();

// Set the port number where the server will listen
const PORT = process.env.PORT || 3000;

// Simple middleware to handle JSON requests
app.use(express.json());

// Basic route to check if the server is working
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// A sample route to handle GET requests
app.get('/api', (req, res) => {
  res.json({
    message: "Welcome to the Node.js API",
  });
});

// Start the server and listen on the defined port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
