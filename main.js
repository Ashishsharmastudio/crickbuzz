const url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595";
// venue date opponent result run balls fous sixes sr
//const request = require("id: string"); any
const request = require("request");
const cheerio = require("cheerio");
console.log("before");
request(url, cb);
function cb(err, request, html) {
    if (err) {
        console.log(err);
    } else {
        // console.log(html);
        extractLink(html);
    }
}

function extractLink(html) {
    let $ = cheerio.load(html);
    let elemArr = $("a[href="/series/ipl-2020-21-1210595/match-schedule-fixtures-and-results);
    let text = $(elemArr[1]).text();
    let htmldata = $(elemArr[1]).html();
    console.log("textdata", text);
    console.log("html data", htmldata);
}