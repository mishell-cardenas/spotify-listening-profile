import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello, TypeScript Backend!');
});

app.listen(PORT, () => {
  console.log(`Server is running on [http://localhost:${PORT}](http://localhost:3000)`);
});
