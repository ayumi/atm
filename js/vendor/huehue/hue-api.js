/*eslint-env es6 */
// Api interface -- lower level stuff.

HueHue.HueApi = function(apiRootPath) {
  this.rootPath = apiRootPath;
};

HueHue.HueApi.prototype.toUrl = function(path) {
  return ( this.rootPath + path );
};

HueHue.HueApi.prototype.httpReq = function(method, path, data) {
  var url = this.toUrl(path);
  return new Promise( function(resolve, reject) {
    var req = new XMLHttpRequest();

    // TODO: Do different method have different fn signatures?
    req.open( method, url );

    req.onload = function() {
      if ( req.status == 200 ) {
        var parsedResp = JSON.parse( req.response );
        resolve(parsedResp);
      } else {
        reject( Error(req.statusText) );
      }
    };

    req.onerror = function() {
      reject( Error("Network Error") );
    };

    if (data) {
      req.setRequestHeader( "Content-Type", "application/json;charset=UTF-8" );
      req.send( JSON.stringify(data) );
    } else {
      req.send();
    }
  });
};

// TODO: Query string
HueHue.HueApi.prototype.get = function(path) {
  return this.httpReq( 'GET', path );
};

HueHue.HueApi.prototype.put = function(path, data) {
  return this.httpReq( 'put', path, data );
};

// Return array of Lights
HueHue.HueApi.prototype.getLights = function() {
  return this.get('/lights');
};
