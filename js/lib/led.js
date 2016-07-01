/*eslint-env es6 */

Atm.led = {
  disco: () => {
  HueHue.Hue.__.lights[1].setHsv({h: 0, s: 1, v: 1});
    HueHue.Hue.__.lights[1].setEffect("hsvloop", 1);
  },

  reset: () => {
    // HueHue.Hue.__.lights[1].on();
    HueHue.Hue.__.lights[1].setHsv({h: 0, s: 0, v: 1});
    HueHue.Hue.__.lights[1].setEffect("none", 1);
  }
};
