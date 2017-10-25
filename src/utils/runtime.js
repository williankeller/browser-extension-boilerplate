/*!
 * Chrome Extension Boilerplate - Runtime 1.0
 * https://github.com/williankeller/chrome-extension-boilerplate/blob/master/src/utils/runtime.js
 * Copyright 2017 "Chrome Extension Boilerplate"
 * Licensed under MIT
 */

/**
 * Define browser runtime API settings.
 * @type Function
 */
var Runtime = {

  /**
   * Find the right request API to instance as object.
   *
   * @param {String} api
   * @returns {Runtime.api.extension}
   */
  api: function (api) {
    // Try to request as Chrome.
    try {
      if (chrome[api]) {
        return chrome[api];
      }
    } catch (e) {}
    // Try to request as Window.
    try {
      if (window[api]) {
        return window[api];
      }
    } catch (e) {}
    // Try to request as Browser.
    try {
      if (browser[api]) {
        return browser[api];
      }
    } catch (e) {}
    // Try to request as extension in browser.
    try {
      return browser.extension[api];
    } catch (e) {}
  }
};