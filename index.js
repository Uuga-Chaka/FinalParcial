const express = require('express'),
    consolidate = require('consolidate'),
    app = express(),
    fs = require('fs');


app.engine('hbs', consolidate.handlebars);
app.set('views', './views');
app.set('view engine', 'hbs');

app.use(express.static("public"));

var inicio = 0;
var producto = 0;
var contacto = 0;

app.get("/", (req, res) => {
    inicio += 1;
    fs.writeFileSync("logs.txt", "Inicio: " + inicio+"\n"+"Producto: " + producto+"\n"+"Contacto: " + contacto);
    res.render("index", {
        titulo: "Inicio"
    });
});

app.get("/producto", (req, res) => {
    producto += 1;
    fs.writeFileSync("logs.txt", "Inicio: " + inicio+"\n"+"Producto: " + producto+"\n"+"Contacto: " + contacto);
    res.render("producto", {
        titulo: "Producto"
    });
});

app.get("/contacto", (req, res) => {
    contacto += 1;
    fs.writeFileSync("logs.txt", "Inicio: " + inicio+"\n"+"Producto: " + producto+"\n"+"Contacto: " + contacto);
    res.render("contacto", {
        titulo: "Contacto"
    });
});

app.listen(1234, () => {
    console.log("Funca en el pureto 1234");
});