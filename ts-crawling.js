"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cheerio_1 = __importDefault(require("cheerio"));
var request_1 = __importDefault(require("request"));
var url = 'https://www.baristapaulbassett.co.kr/menu/List.pb?cid1=A';
request_1.default(url, function (err, response, body) {
    if (err)
        throw err;
    console.log('11111::', body);
    var $ = cheerio_1.default.load(body);
    console.log('22222::', $);
});
