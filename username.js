
import express from 'express';
import cors from 'cors';


const app = express();
app.use(cors());
app.get('/task2C',  (req, res) => {
const url = req.query.username;

const reDom   = new RegExp('@?(https?:)?(\/\/)?((wwwwwwwwwwwwwwwwwwwww)[^\/]*\/)?([a-zA-Z0-9]*)', 'i');
var   cntDom  = url.match(reDom);
const rsltDom =  cntDom[cntDom.length-1];


const reAll   = new RegExp('@?(https?:)?(\/\/)?((' + rsltDom + ')[^\/]*\/)?([a-zA-Z0-9]*)', 'i');
var   cntAll  = url.match(reAll);
const rsltAll = '@' + cntAll[cntAll.length-1];

res.send(rsltAll);

})

app.listen(3000,  () => {
  console.log('Example app listening on port 3000!');
})
