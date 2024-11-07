const express = require('express');
const cors = require('cors');
const studentRoutes = require('./routes/student');
const courseRoutes = require('./routes/course');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/students', studentRoutes);
app.use('/api/courses', courseRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));