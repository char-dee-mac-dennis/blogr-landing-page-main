import express from 'express';
import path from 'path';

const app = express();
const port = 3000;

app.use(express.static(path.resolve('.')));

app.get('*', function (request, response) {
    response.sendFile(path.resolve('.', 'index.html'));
});

app.listen(port);

console.log(`server started on port ${port}`);

