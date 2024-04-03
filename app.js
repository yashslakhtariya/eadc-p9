let express = require('express');
let app = express();

let port = process.env.PORT || 3000;
app.use(express.static('public'));

app.listen(port, function () {
    console.log('Server is listening on port 3000. Ready to accept requests!');
});