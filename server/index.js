const express = require('express');
const bodyParse = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParse.json());
app.use(cors());

const posts = require('./routes/api/posts');

app.use('/api/posts', posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server start on port ${port}, BearSoft Inc.`))