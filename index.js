import express from 'express';
import cookieParser from 'cookie-parser';
import app from './app.js';

const PORT = process.env.PORT ?? 3000;
console.log(`Port: ${PORT}`);

app.listen(PORT, (err, res) => {
  console.log(`Server listening on port ${PORT}`)
});