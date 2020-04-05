
const NodeCache = require('node-cache');
const Request = require("request");
// stdTTL: time to live in seconds for every generated cache element.
const cache = new NodeCache({ stdTTL: 5 * 60 });

function getUrlFromRequest(req) {
  const url = req.protocol + '://' + req.headers.host + req.originalUrl;
  return url
}


Request.get("http://httpbin.org/ip", (error, response, body) => {
    if(error) {
        return console.dir(error);
    }
    console.dir(JSON.parse(body));
});
function jsonParser(stringValue) {

       var string = JSON.stringify(stringValue);
       var objectValue = JSON.parse(string);
       return objectValue['mm'];
    }
function set(req, res, next) {
  const url = getUrlFromRequest(req);
  cache.set(url, res.locals.data);
  return next()
}

function get(req, res, next) {
  const url = getUrlFromRequest(req);
  const content = cache.get(url);
  if (content) {
    return res.status(200).send(content)
  }
 //or by default \404 error
  return next()
}

module.exports = { get, set };


