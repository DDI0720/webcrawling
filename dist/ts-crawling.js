"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cheerio = require("cheerio");
var request_1 = __importDefault(require("request"));
var arr = [], arr2 = [];
var url = 'https://www.baristapaulbassett.co.kr/menu/List.pb?cid1=A';
request_1.default(url, function (err, response, body) {
    if (err)
        throw err;
    var $ = cheerio.load(body);
    var data = $('div.menuList ul.listStyleB li');
    data.each(function (i, elem) {
        arr[i] = cheerio(elem).find("a").children("div.txtArea").text();
    });
    response.read();
});
//# sourceMappingURL=ts-crawling.js.map