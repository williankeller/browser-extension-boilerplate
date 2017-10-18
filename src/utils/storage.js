/*!
 * Chrome Extension Boilerplate 1.0 (https://github.com/williankeller/chrome-extension-boilerplate)
 * Copyright 2017 "Chrome Extension Boilerplate" Authors (https://github.com/williankeller/chrome-extension-boilerplate/graphs/contributors)
 * Licensed under MIT (https://github.com/williankeller/chrome-extension-boilerplate/blob/master/LICENSE)
 */
/**
 * Define Chrome storage settings.
 * @type Function
 */
var Storage = {

  /**
   * Make sure we are initializing the storage.
   *
   * @returns {chrome.storage.local|chrome.storage.sync}
   */
  syncronize: function () {
    chrome = chrome || {};
    return (chrome.storage.sync ? chrome.storage.sync : chrome.storage.local);
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
   * @param {Object} defaults
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