
import express from 'express';

const app = express();
app.get('/',  (req, res) => {
const a = req.query.a;
const b = req.query.b;
var Message;

if ( (typeof a == "undefined" && typeof b == "undefined")||( +a == 0 &&  +b == 0)  )
  Message='Переменных <a> и <b>  не существует - Сумма = 0';

else if ((typeof a == "undefined" && +b == 0)||(typeof b == "undefined" && +a == 0))
  Message='Переменных <a> и <b>  не существует - Сумма = 0';

else  if (!isNaN(a) +a !=0 && (+b==0||typeof b == "undefined")){
  var Sum = +a;
  Message='Сумма = '+Sum;
  }

else  if (!isNaN(b) && +b !=0 && (+a==0||typeof a == "undefined")){
  var Sum = +b;
  Message='Сумма = '+Sum;
    }

else {
  var Sum = +a + +b;
  Sum =Number(Sum);

  if ( isNaN(Sum) )
    Message='В переменных есть литеры Введите число';
  else
    Message='Сумма = '+Sum;
}



 res.json({
Message,
  });
//  res.send('Hello World!');
})

app.listen(3000,  () => {
  console.log('Example app listening on port 3000!');
})

/*function canonize(url) {
  const re = new RegExp('([a-z]*)');
  const  username =url.match(re);
  return username;
}

const array = ['https://vk.com/kolenval2013',
'https://twitter.com/suvorovigor',
'https://telegram.me/skillbranch',
'https://vk.com/skillbranch?w=wall-117903599_1076',
'https://vk.com/julia.lusenko',
'https://www.facebook.com/elena.kostenko',
'http://www.mamba.ru/mb1679212039'
];
array.forEach((url) => {
  const  username = canonize(url);
  console.log(username);
});
*/
