import { selector } from 'utils/Selector.js'
import { runtime } from 'utils/Runtime.js'

import 'styles/popup.scss'

class Popup {
  constructor () {
    selector(document).ready(this.bind())
  }

  bind () {
    /**
     * Open options dropown list.
     */
    selector('.open-options').click(() => {
      // Toggle options list with 'show' class.
      selector('.menu-options').toggle('show')
    })

    /**
     * Open the settings page.
     */
    selector('.open-settings').click(() => {
      if (runtime.api('runtime').openOptionsPage) {
        // New way to open options pages, if supported (Chrome 42+).
        runtime.api('runtime').openOptionsPage()
      } else {
        // Reasonable fallback.
        window.open(runtime.api('runtime').getURL('options.html'))
      }
    })
  }
}

export const popup = new Popup()
