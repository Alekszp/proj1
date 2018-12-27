import express from 'express';
import bodyParser from 'body-parser';
import * as db from './utils/DataBaseUtils.js';

db.setUpConnection();

const app = express();
app.use(bodyParser.json());

app.get('/notes', (req, res) => {
    db.listNotes().then(data => res.send(data));
});

app.post('/notes', (req, res) => {
    db.createNote().then(data => res.send(data));
});

app.delete('/notes/:id', (req, res) => {
    db.deleteNote().then(data => res.send(data))
});

const server = app.listen(8080, () => {
    console.log('Serever is up an running on port 8080')
});