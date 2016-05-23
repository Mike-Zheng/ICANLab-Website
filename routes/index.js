module.exports = function(app) {

    //router
    app.get('/', function(req, res) {
        res.sendfile('./view/index.html');
        // res.send('Hello world!');
    });
    app.get('/member', function(req, res) {
        res.sendfile('./view/member.html');
    });

    app.get('/research', function(req, res) {
        res.sendfile('./view/research.html');
    });


    //api
    app.get('/api1', function(req, res) {
        res.json(200, { name: "mike", age: 20 });
    });
    app.get('/api2', function(req, res) {
        res.json(200, { name: "mike", age: 20 });
    });
}
