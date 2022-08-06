const express = require('express');

const app = express();

app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))

app.set('views', './views')
app.set('view engine', 'ejs')

app.get('', (req, res) => {
  res.render(__dirname + '/views/index.ejs');
});

app.listen(3000);