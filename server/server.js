const express = require('express');
const cors = require(('cors'));
const app = express();
app.use(cors({
    origin: '*'
}));
app.use(express.json());
require('dotenv').config();
const dbConfig = require('./config/dbConfig');
const port = process.env.PORT || 5000;

const usersRoute = require('./routes/usersRoute');

app.use('/api/users', usersRoute);

app.listen(port, () => console.log(`Node/Express Server started on port ${port}`));