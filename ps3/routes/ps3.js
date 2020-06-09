var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('ps3get',
        {
            title: 'PS3 - GET',
            lyric: '"Hey now, hey now!"'
        });
});

router.post('/', function(req,res,next) {
    res.render('ps3post',
        {
            title: 'PS3 - POST',
            lyric: `${req.body.lyric}`,
            lyriclength: `${req.body.lyric.length}`
        });
})

module.exports = router;