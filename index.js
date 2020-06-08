
//모듈 추출
const request = require('request');
const cheerio = require('cheerio'); //request 모듈 사용
const url = 'https://www.baristapaulbassett.co.kr/menu/List.pb?cid1=A';

request(url, function(err, response, body) {
    if (err) throw error;
    const $ = cheerio.load(body);
    let data = $('div.menuList ul.listStyleB li');
    
    let arr = [];
    data.each(function(i,elem){
        arr[i] = $(this).find("a").children("div.txtArea").text();
    });
    console.log(arr);
});