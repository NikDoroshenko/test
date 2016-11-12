
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.get('/task2B',  (req, res) => {
const str = req.query.fullname;
var result = "Invalid fullname";

if (str.length>0) {
var mas = str.split(' ');
var cnt = mas.length;

if (cnt>0 && cnt<4) {

    switch (cnt) {
      case 1:
        result = mas[0];
        break;
      case 2:
        result = mas[1] + ' ' + mas[0].substr(0,1) + '. ';
        break;
      case 3:
       var re = RegExp('([a-zA-Z])?([0-9] )');
      if (str.match(re)!= null) result = "Invalid fullname";
      else
        result = mas[2] + ' ' + mas[0].substr(0,1) + '. ' + mas[1].substr(0,1) + '.';
        break;


      }
}
}
else
   result = "Invalid fullname";

 res.send(result.trim());

})

app.listen(3000,  () => {
  console.log('Example app listening on port 3000!');
})
