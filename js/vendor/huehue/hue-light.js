/*eslint-env es6 */
// The basic operable unit.
// Usually you'll do stuff to lights using this object.

// args
//   api: HueApi instance
//   id:  API light ID
//   obj: API response object
//   onSync: Callback after data syncs from API (e.g. render in view)
HueHue.HueLight = function(args) {
  this.api = args.api;
  this.id = args.id;
  this.onSync = args.onSync;
  this.sync( args.obj );

  // Setup buffered putState
  this.putStateBuffer = {};
  var _this = this;
  this.flushTimer = setInterval( function(){
    _this.flushPutStateBuffer();
  }, 250 );
};

// Update state from api response
HueHue.HueLight.prototype.sync = function(obj) {
  this.modelid   = obj.modelid;
  this.name      = obj.name;
  this.type      = obj.type;
  this.swversion = obj.swversion;
  this.state     = obj.state;
  this.pickerHsv = this.getHsv();
  this.putStateBuffer = {};

  if ( typeof this.onSync === 'function' ) {
    this.onSync.call();
  }
};

// Hue API has hue/sat/bri as 0-65535, 0-255, 0-255
// HSV for ColorPicker is 0-360, 0-1, 0-1
HueHue.HueLight.prototype.getHsv = function() {
  return {
    h: this.state.hue,
    s: this.state.sat / 255,
    v: this.state.bri / 255,
  };
};

// From HSV, set the state.hue, .sat, .bri
HueHue.HueLight.prototype.setHsv = function(hsv) {
  var newState = {
    hue: parseInt( hsv.h ),
    sat: parseInt( hsv.s * 255 ),
    bri: parseInt( hsv.v * 255 )
  };
  this.stateChanged(newState);
};

HueHue.HueLight.prototype.basePath = function() {
  return ( '/lights/' + this.id );
};

HueHue.HueLight.prototype.putState = function(state){
  var _this = this;
  this.api.put( this.basePath() + '/state', state ).then(
    function(apiLight) {
      _this.sync(apiLight);
    },
    function(error) {
      debugger;
      console.log('o darn');
    }
  );
};

// Avoid spamming network requests
HueHue.HueLight.prototype.bufferedPutState = function(newState){
  Object.assign(this.putStateBuffer, newState);
};

// Runs periodically to flush put state buffers
HueHue.HueLight.prototype.flushPutStateBuffer = function() {
  if ( Object.keys(this.putStateBuffer).length > 0 ) {
    clearInterval(this.flushTimer);
    this.putState( this.putStateBuffer );
    this.putStateBuffer = {};
    var _this = this;
    this.flushTimer = setInterval( function(){
      _this.flushPutStateBuffer();
    }, 250 );
  }
};

HueHue.HueLight.prototype.stateChanged = function(newState) {
  // If there's a difference, PUT to API
  var changes = {};
  let newVal;
  for (let key in newState) {
    newVal = newState[key]
    if (newVal !== this.state[key]) {
      changes[key] = newVal;
    }
  }
  if ( Object.keys(changes).length > 0 ){
    var normChanges = this.getNormState(changes);
    this.bufferedPutState(normChanges);
  }
};

// Sometimes it's necessary to add attributes onto state changes, e.g. for
// effect you need effectspread and transtiiontime.
HueHue.HueLight.prototype.getNormState = function(state) {
  var attrGroups = [ ['bri', 'effect', 'effectspread', 'transitiontime'] ];
  var stateAttrs = Object.keys(state);
  var _this = this;
  attrGroups.forEach(function(attrGroup) {
    var attrDiffGroupState = attrGroup.filter((item) => {
      return !(item in stateAttrs);
    });

    // grouped attrs present
    if ( attrDiffGroupState.length < attrGroup.length ) {
      attrDiffGroupState.forEach(function(missingAttr) {
        state[missingAttr] = _this.state[missingAttr];
      });
    }
  });
  return state;
};

HueHue.HueLight.prototype.on = function() {
  this.putState({on: true});
};

HueHue.HueLight.prototype.off = function() {
  // NOTE: Effect needs to 'none'
  this.putState({on: false});
};

HueHue.HueLight.prototype.setBrightness = function(bri) {
  this.putState({bri: bri});
};

HueHue.HueLight.prototype.setBri = function(bri) {
  this.setBrightness(bri);
};

HueHue.HueLight.prototype.setChromaticity = function(ct) {
  this.putState({ct: ct});
};

HueHue.HueLight.prototype.setCt = function(ct) {
  this.setChromaticity(ct);
};

HueHue.HueLight.prototype.setHue = function(hue) {
  this.putState({hue: hue});
};

HueHue.HueLight.prototype.setSat = function(sat) {
  this.putState({sat: sat});
};

HueHue.HueLight.prototype.setEffect = function(effect, transitionTime) {
  var newState = {effect: effect};
  if (transitionTime) {
    newState.transitionTime = transitionTime;
  }
  this.bufferedPutState(newState);
};

HueHue.HueLight.prototype.setXY = function(xyArr) {
  this.putState(xyArr);
};
