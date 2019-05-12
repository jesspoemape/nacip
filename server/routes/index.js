const express = require("express");
const fs = require("fs");
const paymentApi = require("./payment");

const configureRoutes = app => {
    paymentApi(app);
    app.use('/app', express.static('../build')); // serving static files (react app)
    app.get('/*', (req, res) => {
        fs.readFile('../build/index.html', (err, data) => {
            if (err) {
                console.error(err);
                res.status(404);
                res.render('error', { error: 'NoT FoUnd!' });
            } else {
                res.type('html');
                res.send(data);
            }
        });
    });
};

module.exports = configureRoutes;
