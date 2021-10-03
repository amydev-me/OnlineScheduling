const router = require('express').Router();

router.get('/' ,(req, res) => {
    res.render('Home')
});

router.get('/test', function (req, res) {
    data ={ message: 'GET request to the homepage' };
    res.send(data);
});

module.exports = router;