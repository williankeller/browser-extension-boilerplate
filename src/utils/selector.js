/*!
 * Chrome Extension Boilerplate - Selector 1.0
 * https://github.com/williankeller/chrome-extension-boilerplate/blob/master/src/utils/selector.js
 * Copyright 2017 "Chrome Extension Boilerplate"
 * Licensed under MIT
 */

/**
 * Define Selector functions.
 * @type Function
 */
var Selector = {

  /**
   * Get current provided selector.
   *
   * @param {string} selector
   * @param {string} Mixed [null|querySelector|querySelectorAll]
   * @returns {NodeList|Element}
   */
  element: function (selector, type) {
    // Define default type as 'querySelector.
    var selectorType = type || 'querySelector';

    // Check if is an ID.
    if (selector.indexOf('#') === 0) {
      selectorType = 'getElementById';
      selector = selector.substr(1, selector.length);
    }
    return document[selectorType](selector);
  },

  /**
   * Get an element click.
   *
   * @param {string} selector
   * @param {Boolean} prevent
   * @param {Function} callback
   * @returns {Boolean|callback}
   */
  click: function (selector, prevent, callback) {
    var element = this.element(selector);
    if (! element) {
      return false;
    }
    // Capture click action.
    element.addEventListener('click', function (event) {
      // Check if prevent click is enabled.
      if (prevent || null) {
        event.preventDefault();
      }
      // Callback response.
      callback(element, event);
    });
  },

  /**
   * Add new class element to a selector.
   *
   * @param {Object} selector
   * @param {string} style
   */
  addClass: function (selector, style) {
    this.element(selector).classList.add(style);
  },

  /**
   * Remove class element from a selector.
   *
   * @param {string} selector
   * @param {string} style
   */
  removeClass: function (selector, style) {
    this.element(selector).classList.remove(style);
  },

  /**
   * Toggle action under a selector.
   *
   * @param {string} selector
   * @param {string} style
   */
  toggle: function (selector, style) {
    this.element(selector).classList.toggle(style);
  }
};
