// Create web server with express
// Create a route to handle POST requests to /comments
// Send back a JSON object with the comment and the time created
// Start the server on port 3000

const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/comments', (req, res) => {
    const { comment } = req.body;
    const date = new Date();

    res.json({
        comment,
        date
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
