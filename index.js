const express = require('express'),
    consolidate = require('consolidate'),
    app = express();


app.engine('hbs', consolidate.handlebars);
app.set('views', './views');
app.set('view engine', 'hbs');

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/producto", (req, res) => {
    res.render("producto");
});

app.get("/contacto", (req, res) => {
    app.render("contacto");
});

app.listen(1234, () => {
    console.log("Funca en el pureto 1234");
});