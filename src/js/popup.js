(function (chrome, window, Runtime, Selector) {
  'use strict';

  /**
   * Open options dropown list.
   */
  Selector.click('.open-options', null, function () {
    // Toggle options list with 'show' class.
    Selector.toggle('.menu-options', 'show');
  });

  /**
   * Open the settings page.
   */
  Selector.click('.open-settings', null, function () {
    if (Runtime.api('runtime').openOptionsPage) {
      // New way to open options pages, if supported (Chrome 42+).
      Runtime.api('runtime').openOptionsPage();
    }
    else {
      // Reasonable fallback.
      window.open(chrome.runtime.getURL('options.html'));
    }
  });

})(chrome, window, Runtime, Selector);