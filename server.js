const express = require('express');
const connectDb = require('./config/db');

const app = express();

//connect database
connectDb();

app.use(express.json({ extended: false }));

app.use('/api/users', require('./routes/api/users'));
app.use('/api/quiz', require('./routes/api/quiz'));

app.get('/', (req, res) => res.send('Test'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
