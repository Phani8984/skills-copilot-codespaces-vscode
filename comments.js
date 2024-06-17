// Create web server and listen on port 3000
// Import express and body-parser
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Use body-parser to parse JSON data
app.use(bodyParser.json());

// Create empty array to store comments
const comments = [];

// Get request to /comments
app.get('/comments', (req, res) => {
    // Send comments array as response
    res.send(comments);
});

// Post request to /comments
app.post('/comments', (req, res) => {
    // Get comment from request
    const comment = req.body.comment;
    // Add comment to comments array
    comments.push(comment);
    // Send success message as response
    res.send({message: 'Comment added successfully'});
});

// Listen on port 3000
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

// Run app with `node comments.js` command
// Open Postman and send a POST request to http://localhost:3000/comments with a JSON body like {"comment": "This is a comment"}
// Send a GET request to http://localhost:3000/comments to see the added comment