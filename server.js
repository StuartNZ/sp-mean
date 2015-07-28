var express = require('express'),
    app = express();

app.get('/', function(req, res) {
    res.send("Hello from Express");
});

app.listen(3000, function() {
    console.log("Server ready. Listening on port 3000");
});
