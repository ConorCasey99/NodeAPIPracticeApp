var express = require('express'),
    app = express(),
    port = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.send('working');
});
 
app.listen(port, () => {
    console.log('Server started on: ' + port);
});

