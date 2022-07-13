const Sample = require("../model/sample");

module.exports = (app) => {
    
    // server routes ===========================================================
    // handle things like api calls
    // authentication routes

    // sample api route
    app.get('/api/show', function (req, res) {

        Sample.find(function (err, samples) {
            // if there is an error retrieving, send the error.
            // nothing after res.send(err) will execute
            if (err)
                res.send(err);
            console.log('samples', samples);
            res.status(200);
            res.json(samples);
        });
    });

    app.post('/api/insert', function (req, res) {
        //console.log(req.body.message);
        var rec = new Sample(req.body);
        rec.save(function (err, n) {
            if (err)
                console.log('saving failed');
            console.log('saved ' + n.message);
            res.status(201);
            res.json(n);
        });
    });

    // route to handle creating goes here (app.post)
    // route to handle delete goes here (app.delete)

    // frontend routes =========================================================
    // route to handle all angular requests
    app.get('/', function (req, res) {
        res.sendfile('/Users/shriyadikshith/Web-Design/Lab 8//Lab8new/index.html'); // load our public/index.html file
    });
}