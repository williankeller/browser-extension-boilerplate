/*!
 * Chrome Extension Boilerplate - Storage 1.1
 * https://github.com/williankeller/chrome-extension-boilerplate/blob/master/src/utils/storage.js
 * Copyright 2017 "Chrome Extension Boilerplate"
 * Licensed under MIT
 */

/**
 * Define Chrome storage settings.
 * @type Function
 */
var Storage = {

  /**
   * Make sure we are initializing the storage.
   *
   * @returns {storage.local|storage.sync}
   */
  syncronize: function () {
    var section = {};
    // Try to request as Chrome.
    try {
      if (chrome.storage) {
        section = chrome.storage;
      }
    }
    catch (e) {}
    // Try to request as Window.
    try {
      if (window.storage) {
        section = window.storage;
      }
    }
    catch (e) {}
    // Try to request as Browser.
    try {
      if (browser.storage) {
        section = browser.storage;
      }
    }
    catch (e) {}
    // Try to request as extension in browser.
    try {
      section = browser.extension.storage;
    }
    catch (e) {}

    return (section.sync ? section.sync : section.local);
  },

  /**
   * Save values under Chrome Storage.
   * An object which gives each key/value pair to update storage with.
   * Any other key/value pairs in storage will not be affected.
   *
   * @param {Object} keys
   * @param {Function} status
   */
  save: function (keys, status) {
    this.syncronize().set(keys, status || null);
  },

  /**
   * Gets one or more items from storage.
   * A single key to get, list of keys to get, or a dictionary specifying 
   * default values (see description of the object).
   * An empty list or object will return an empty result object. 
   * Pass in null to get the entire contents of storage.
   *
   * @param {Object} keys
   * @param {Function} callback
   * @returns {callback}
   */
  get: function (keys, callback) {
    this.syncronize().get(keys, function (items) {
      callback(items);
    });
  },

  /**
   * Removes one or more items from storage.
   *
   * @param {Object} keys
   * @param {Function} callback
   * @returns {callback}
   */
  remove: function (keys, callback) {
    this.syncronize().remove(keys, function (items) {
      callback(items);
    });
  }
};