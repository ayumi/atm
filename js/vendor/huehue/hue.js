/*eslint-env es6 */
// Entrypoint / Main controller for the app.
// It creates a HueApi object and uses it to load all the HueLights.
// HueLights are rendered via Ractive.js, which syncs data between
// Api and UI.

HueHue.Hue = {
  __ : {
    api : null,
    picker : null,
    lights : {}
  },

  config : {
    defaultApiRoot: "//localhost:80/api/mytoken",
    pollInterval: 5000
  },

  fn : {
    init: function(callback){
      HueHue.Hue.__.api = new HueHue.HueApi(HueHue.Hue.config.defaultApiRoot);

      // Sync server state, in case another app is modifying state
      setInterval( HueHue.Hue.fn.refreshLights, HueHue.Hue.config.pollInterval ),
      HueHue.Hue.fn.refreshLights(callback);
    },

    // Reload lights from API
    refreshLights: function(callback) {
      HueHue.Hue.__.api.getLights().then(
        function(response) {
          let apiLight;
          for (let id in response) {
            apiLight = response[id];
            if ( HueHue.Hue.__.lights[id] ) {
              HueHue.Hue.__.lights[id].sync(apiLight);
            } else {
              HueHue.Hue.__.lights[id] = new HueHue.HueLight({
                api: HueHue.Hue.__.api,
                id:  id,
                obj: apiLight,
                onSync: HueHue.Hue.fn.renderLights
              });
            }
          };
          // TODO: Update UI

          if (callback) { callback(); }
        },
        function(error) {
          console.log("Couldn't refresh lights.", error);
        }
      );
    }
  }
};
