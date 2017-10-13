(function (document, Selector, Storage) {
  'use strict';

  /**
   * Predefined values.
   *
   * @type Object
   */
  var defaults = {
    messageSuccess: 'Options saved successfully!',
    messageError: 'Please fill all items in the form.',
    messageTime: 2000
  };

  /**
   * Get values from the selectors and return as callback.
   *
   * @param {Callback} callback
   */
  var get = function (callback) {
    callback({
      standard: Selector.element('#default-input').value,
      checkbox: Selector.element('#default-checkbox').checked
    });
  };

  /**
   * Retrieve values from Chrome storage and set as default value.
   */
  var set = function () {
    Storage.get({
      standard: '',
      checkbox: false
    }, function (storage) {
      // Set degault values or saved options.
      Selector.element('#default-input').value = storage.standard;
      Selector.element('#default-checkbox').checked = storage.checkbox;
    });
  };

  /**
   * Store values to the Chrome storage.
   *
   * @param {Object} options
   * @param {Function} response
   */
  var store = function (options, response) {
    Storage.save(options, response);
  };

  /**
   * Set message to the options container.
   *
   * @param {String} message
   * @param {String} classname
   */
  var response = function (message, classname) {
    // Set text message.
    Selector.element('.response').textContent = message;
    // Add provided class.
    Selector.addClass('.response', classname);

    // Remove class after defined time.
    setTimeout(function () {
      Selector.removeClass('.response', classname);
    }, defaults.messageTime);
  };

  /**
   * Detect click action under save button.
   */
  Selector.click('.save-options', null, function () {
    // Get filled options as callback.
    get(function (options) {
      // Check if exists some field filled.
      if (! options.standard) {
        // Set error message.
        response(defaults.messageError, 'error');

        // Kill function.
        return false;
      }
      // If all is okay, proceed and save options.
      store(options, response(defaults.messageSuccess, 'success'));
    });
  });

  // Set default options or saved options already.
  document.addEventListener('DOMContentLoaded', set);

})(document, Selector, Storage);