const express = require('express')

const oldSchool = require('./models/oldSchool')
const newSchool = require('./models/newSchool')

const app = express();
const PORT = 3000

app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());


app.get('/', (req, res) => {
    res.send( '<h1>hey world</h1>' )
})

app.get('/home', (req, res) => {
    // res.send('<h1>home page</h1>')
    res.render('Home')
})

/**
 * Index Route: (returns a list of players)
 */
app.get('/oldschool/', (req, res) => {
    // res.send(oldSchool)
    res.render('OldIndex', {oldSchool: oldSchool})
})
app.get('/newschool/', (req, res) => {
    // res.send(newSchool)
    res.render('NewIndex', {newSchool: newSchool})
})

/**
 * Post method (accept data from the form)
 */
app.post('/oldschool/', (req, res) => {
    res.send('<h1>Old School Player Added</h1>')
})
app.post('/newschool/', (req, res) => {
    res.send('<h1>New School Player Added</h1>')
})

/**
 * Add Route: (returns a form to add a player)
 */
app.get('/oldschool/add', (req, res) => {
    res.render('AddOld')
})
app.get('/newschool/add', (req, res) => {
    res.render('AddNew')
})

/**
 * Show Route: (returns a single player)
 */
app.get('/oldschool/:indexOfOldSchoolArray', (req, res) => {
    console.log(req.params);
    // res.send(oldSchool[req.params.indexOfOldSchoolArray])
    res.render('OldShow', {oldSchool: oldSchool[req.params.indexOfOldSchoolArray]})
})

app.get('/newschool/:indexOfNewSchoolArray', (req, res) => {
    console.log(req.params);
    // res.send(newSchool[req.params.indexOfNewSchoolArray])
    res.render('NewShow', {newSchool: newSchool[req.params.indexOfNewSchoolArray]})
})



app.get('*', (req, res) => {
    res.render('404')
})

app.listen(3000, () => {
    console.log(`Listening to port ${PORT}`);
})