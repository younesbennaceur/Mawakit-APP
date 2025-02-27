
import express from 'express';
import path from 'path';
const app = express();
const port = 5000;
import cors from 'cors';
app.use(cors());
// Serve the cities.json file
app.get('/cities', (req, res) => {
  res.sendFile(path.join(__dirname, 'data', 'cities.json'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});