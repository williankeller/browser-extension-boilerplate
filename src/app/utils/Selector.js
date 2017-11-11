/*!
 * Chrome Extension Boilerplate - Selector 1.0
 * https://github.com/williankeller/chrome-extension-boilerplate/blob/master/src/utils/selector.js
 * Copyright 2017 "Chrome Extension Boilerplate"
 * Licensed under MIT
 */

 /**
 * Define Selector functions.
 * @type Class
 */
export class Selector {
  /**
   * Get current provided selector.
   *
   * @param {string|object} selector
   * @param {string} type [null|querySelector|querySelectorAll]
   */
  constructor (selector, type) {
    // Check selector is Document or Window
    if (typeof selector === 'object') {
      this.element = selector
      return
    }

    // Define default type as 'querySelector.
    let selectorType = type || 'querySelector'

    // Check if is an ID.
    if (selector.indexOf('#') === 0) {
      selectorType = 'getElementById'
      selector = selector.substr(1, selector.length)
    }

    this.element = document[selectorType](selector)
  }

  /**
   * Validate if element found in page
   *
   * @returns {Boolean}
   */
  validElement () {
    if (this.element === null) return false

    return true
  }

  /**
   * Get an element click.
   *
   * @param {Function} callback
   * @returns {void}
   */
  click (callback) {
    this.element.addEventListener('click', callback)
  }

  /**
   * Add new class element to a selector.
   *
   * @param {string} style
   * @returns {void}
   */
  addClass (style) {
    this.element.classList.add(style)
  }

  /**
   * Remove class element from a selector.
   *
   * @param {string} style
   * @returns {void}
   */
  removeClass (style) {
    this.element.classList.remove(style)
  }

  /**
   * Toggle action under a selector.
   *
   * @param {string} style
   * @returns {void}
   */
  toggle (style) {
    this.element.classList.toggle(style)
  }

  /**
   * Set or Get value
   *
   * @param {string} value
   * @returns {string}
   */
  val (value) {
    if (typeof value !== 'undefined') {
      this.element.value = value

      return value
    }

    return this.element.value
  }

  /**
   * Set or Get checked
   *
   * @param {string} value
   * @returns {string}
   */
  checked (value) {
    if (typeof value !== 'undefined') {
      this.element.checked = value

      return value
    }

    return this.element.checked
  }

  /**
   * DOM Content Loaded
   *
   * @param {Function} callback
   * @returns {void}
   */
  ready (callback) {
    this.element.addEventListener('DOMContentLoaded', callback)
  }

  /**
   * Set or Get textContent
   *
   * @param {string} value
   * @returns {string}
   */
  text (value) {
    if (typeof value !== 'undefined') {
      this.element.textContent = value

      return value
    }

    return this.element.textContent
  }
}

export const selector = (selector) => {
  return new Selector(selector)
}
