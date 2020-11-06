const db = require('../routes')
const path = require('path');

module.exports = (app) => {

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../fitnesstracker/index.html'));
});

app.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, '../fitnesstracker/exercise.html'));
});

app.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, '../fitnesstracker/stats.html'));
});
}