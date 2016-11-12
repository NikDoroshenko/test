
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.get('/task2A',  (req, res) => {
const a = req.query.a;
const b = req.query.b;
var Message;

if ( (typeof a == "undefined" && typeof b == "undefined")||( +a == 0 &&  +b == 0)  )
  Message='0';

else if ((typeof a == "undefined" && +b == 0)||(typeof b == "undefined" && +a == 0))
  Message='0';

else  if (!isNaN(a) +a !=0 && (+b==0||typeof b == "undefined")){
  var Sum = +a;
  }

else  if (!isNaN(b) && +b !=0 && (+a==0||typeof a == "undefined")){
  var Sum = +b;
    }

else {
  var Sum = +a + +b;
  Sum =Number(Sum);

  if ( isNaN(Sum) )
    Message='0';
  else
    Message=Sum.toString();
}
  res.send(Message);
})

app.listen(3000,  () => {
  console.log('Example app listening on port 3000!');
})
