/*!
 * Chrome Extension Boilerplate - Storage 1.2
 * https://github.com/williankeller/chrome-extension-boilerplate/blob/master/src/utils/storage.min.js
 * Copyright 2017 "Chrome Extension Boilerplate"
 * Licensed under MIT
 */

/* global chrome, browser */

/**
 * Define Chrome storage settings.
 * @type Function
 */
var Storage = {

  /**
   * Make sure we are initializing the storage.
   *
   * @returns {chrome.storage.local|window.storage.local|Window.storage.local|browser.storage.local|chrome.storage.sync}
   */
  synchronize: function () {
    var section = {};
    // Try to request as Chrome.
    try {
      if (chrome.storage) {
        // Check if exist sync session.
        if (chrome.storage.sync) {
          section = chrome.storage.sync;
        }
        // Else, get local value.
        else {
          section = chrome.storage.local;
        }
      }
    }
    catch (e) {}
    // Try to request as Window.
    try {
      if (window.storage) {
        section = window.storage.local;
      }
    }
    catch (e) {}
    // Try to request as Browser.
    try {
      if (browser.storage) {
        section = browser.storage.local;
      }
    }
    catch (e) {}

    // Return element of session.
    return section;
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
    this.synchronize().set(keys, status || null);
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
    this.synchronize().get(keys, function (items) {
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
    this.synchronize().remove(keys, function (items) {
      callback(items);
    });
  }
};
