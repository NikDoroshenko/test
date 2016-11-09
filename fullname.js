
import express from 'express';

const app = express();
app.get('/',  (req, res) => {
const str = req.query.fullname;
var mas = str.split(' ');
var message;
var result;
var cnt = mas.length;

if (cnt>3||str == '') message = "Invalid fullname";

switch (cnt) {
  case 1:
    result = mas[0];
    break;
  case 2:
    result = mas[1] + ' ' + mas[0].substr(0,1) + '.';
    break;
  case 3:
    result = mas[2] + ' ' + mas[0].substr(0,1) + '.' + mas[1].substr(0,1) + '.';
    break;
  default:
}

 res.json({
  cnt,
  result,
  message
  });

})

app.listen(3000,  () => {
  console.log('Example app listening on port 3000!');
})



