const express = require('express');
const path = require('path');

const app = express()
const PORT = process.env.PORT || 3000;
const public = path.join(__dirname, 'public');

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})

app.set('view engine', 'pug');
app.set('views', './src/pages');
app.use(express.static(public));

app.get('/', (req, res) => {
  const options = { title: 'Hey', message: 'Hello there!' };
  res.render('index', options);
});

app.get('/about', (req, res) => {
  res.render('about')
});
