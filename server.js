var express = require('express');
var app = express();

app.use(express.static(__dirname +'/public'));

app.listen(3000, function(err){
   if (err) {
      console.log(err);
   } else {
      console.log('runnin');
   }
});
