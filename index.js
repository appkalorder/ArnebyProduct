import express from 'express';
import { handler as ssrHandler } from './dist/server/entry.mjs';

const PORT = process.env.PORT ?? 2999;

const app = express();
// Change this based on your astro.config.mjs, `base` option.
// They should match. The default value is "/".
const base = '/';
app.use(base, express.static('dist/client/'));
console.log(`Server listening on port ${PORT}`);
app.use(ssrHandler);

app.listen(PORT);