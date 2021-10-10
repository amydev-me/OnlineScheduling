const express = require('express')
const app = express();
const port = process.env.PORT || 3000;

require("./config/database")
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set('view engine','ejs')

app.use(express.static('public'))
app.use(require("./routes/index"))


app.listen(port, function () {
    console.log('Server started on port ' + port);
});