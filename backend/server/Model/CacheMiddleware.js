
const NodeCache = require('node-cache');
const Request = require("request");
// stdTTL: time to live in seconds for every generated cache element.
const cache = new NodeCache({ stdTTL: 5 * 60 });

function getUrlFromRequest(req) {
  let url = req.protocol + '://' + req.headers.host + req.originalUrl;
  return url
}

function getBody(req) {
    Request.get(getUrlFromRequest(req), (error, response, body) => {
        if (error) {
            return console.dir(error);
        }
        console.dir(JSON.parse(body));
        return body;
    });
}

function set(req, res, next) {
    if (undefined !== req.headers['access_token'] && null !== req.headers['access_token'] && undefined !== req.headers['token']&& null!==req.headers['token']) {
        cache.set(req.headers['access_token'], req.headers['token']);
              return next();

        } else{
          return res.status(401).send(new Error('Unauthorized'));
        }


}

function get(req, res, next) {
   // cache.set('test',req.headers['host']);
  const content = cache.get(req.headers['access_token']);
  if (content) {
   return next();
  }
  else if (content===undefined || null===content){
      return res.status(401).send(new Error('Unauthorized'));
  }

}

module.exports = { get, set };


