var express = require('express');
var router = express.Router();
const translate = require('google-translate-api');

/* GET home page. */
router.get('/', function(req, res, next) {


res.render('index', {title: 'Translator'});


});



router.post('/', function(req,res,next){

	var text = req.body.text;

	translate(text, {to: 'hi'}).then(result => {
  
   	res.send(result);
    
}).catch(err => {
    console.error(err);
});
});



module.exports = router;
