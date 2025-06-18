require('dotenv').config();
const port = process.env.port || 4001
const app = require('./app');
app.listen(port, () => console.log(`Server is running at http://localhost:${port}`));
