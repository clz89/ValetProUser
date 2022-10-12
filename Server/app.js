const express = require('express');
const cors = require('cors');
const app = express();
require('./db/db');
app.use(express.json());
app.use(cors());

app.use('/subCars', require('./routes/subCars'));
app.use('/posts', require('./routes/posts'));
app.use('/pulls', require('./routes/pulls'));
app.use('/outnr', require('./routes/outnr'))
app.use('/completed', require('./routes/completed'))

app.listen(8000)