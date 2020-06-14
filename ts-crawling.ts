import cheerio = require('cheerio');
import request from 'request';
let arr:string[] = [], arr2: string[] = [];
const url = 'https://www.baristapaulbassett.co.kr/menu/List.pb?cid1=A';

request(url, (err, response, body)=>{
    if(err) throw err;
    const $ = cheerio.load(body);
    let data = $('div.menuList ul.listStyleB li');
    data.each(function(i,elem){
        arr[i] = cheerio(elem).find("a").children("div.txtArea").text();
    });
})