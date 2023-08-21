const express = require('express');
const app = express();
const port = 8000;
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/contact', async (req, res) => {

    const { name, email } = req.body;
    const contact = { name, email };

    await contactsCollection.insertOne(contact);

    res.redirect('/');
});

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
