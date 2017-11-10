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
export class Storage {
  /**
   * Make sure we are initializing the storage.
   *
   * @returns {chrome.storage.local|window.storage.local|Window.storage.local|browser.storage.local|chrome.storage.sync}
   */
  synchronize () {
    let section = {}

    // Try to request as Chrome.
    try {
      if (chrome.storage) {
        // Check if exist sync session.
        if (chrome.storage.sync) {
          section = chrome.storage.sync
        } else { // Else, get local value.
          section = chrome.storage.local
        }
      }
    } catch (e) {}

    // Try to request as Window.
    try {
      if (window.storage) {
        section = window.storage.local
      }
    } catch (e) {}

    // Try to request as Browser.
    try {
      if (browser.storage) {
        section = browser.storage.local
      }
    } catch (e) {}

    // Return element of session.
    return section
  }

  /**
   * Save values under Chrome Storage.
   * An object which gives each key/value pair to update storage with.
   * Any other key/value pairs in storage will not be affected.
   *
   * @param {Object} keys
   * @return {Primise}
   */
  save (keys) {
    return new Promise(resolve => {
      this.synchronize().set(keys, () => {
        resolve(true)
      })
    })
  }

  /**
   * Gets one or more items from storage.
   * A single key to get, list of keys to get, or a dictionary specifying
   * default values (see description of the object).
   * An empty list or object will return an empty result object.
   * Pass in null to get the entire contents of storage.
   *
   * @param {Object} keys
   * @return {Primise}
   */
  get (keys) {
    return new Promise(resolve => {
      this.synchronize().get(keys, items => {
        resolve(items)
      })
    })
  }

  /**
   * Removes one or more items from storage.
   *
   * @param {Object} keys
   * @return {Primise}
   */
  remove (keys) {
    return new Promise(resolve => {
      this.synchronize().remove(keys, items => {
        resolve(items)
      })
    })
  }
}

export const storage = new Storage()
