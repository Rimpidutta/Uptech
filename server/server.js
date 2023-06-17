const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());
const dbConfig = require('./config/dbConfig');
const port = process.env.PORT || 5000;


app.listen(port, () => console.log(`Node/Express server started on port ${port}`));