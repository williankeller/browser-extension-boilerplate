/*!
 * Chrome Extension Boilerplate - Runtime 1.0
 * https://github.com/williankeller/chrome-extension-boilerplate/blob/master/src/utils/runtime.js
 * Copyright 2017 "Chrome Extension Boilerplate"
 * Licensed under MIT
 */

 /**
 * Define browser runtime API settings.
 * @type Class
 */
export class Runtime {
  /**
   * Find the right request API to instance as object.
   *
   * @param {String} api
   * @returns {Runtime.api.extension}
   */
  api (method) {
    try {
      if (chrome[method]) {
        return chrome[method]
      }
    } catch (e) {}

    // Try to request as Window.
    try {
      if (window[method]) {
        return window[method]
      }
    } catch (e) {}

    // Try to request as Browser.
    try {
      if (browser[method]) {
        return browser[method]
      }
    } catch (e) {}

    // Try to request as extension in browser.
    try {
      return browser.extension[method]
    } catch (e) {}
  }
}

export const runtime = new Runtime()
