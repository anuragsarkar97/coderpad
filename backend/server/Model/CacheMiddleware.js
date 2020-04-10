
const NodeCache = require('node-cache');
const Request = require("request");
// stdTTL: time to live in seconds for every generated cache element.
const cache = new NodeCache({ stdTTL: 20000 * 60, checkperiod: 120  });

function set(req, res, next) {
    debugger;
    if (undefined !== req.headers['access_token'] && null !== req.headers['access_token'] && undefined !== req.headers['token']&& null!==req.headers['token']) {
        if(cache.has(req.headers['access_token'])){
            cache.flushAll();
             cache.set(req.headers['access_token'], req.headers['token'],15000*60);
              return next();
        }
        else{
             cache.set(req.headers['access_token'], req.headers['token'],15000*60);
              return next();
        }
    }   else{
          return res.status(401).send(new Error('Unauthorized'));
        }


}
function del(req,res,next) {
    if(undefined!==req.headers['access_token']){
        cache.del(req.headers['access_token']);
        cache.flushAll();
        return next();
    }
}
function get(req, res, next) {
    debugger;

  if (cache.has(req.headers['access_token'])) {
   return next();
  }
  else {
      return res.status(401).send(new Error('Unauthorized'));

  }

}

module.exports = { get, set};


