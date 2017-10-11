## Chrome Extension Boilerplate [![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](http://opensource.org/licenses/MIT)

A boilerplate template for building extensions for Chrome.
This template allow you start your Chrome extension fast and also work with a organized code structure.


#### Starting:
* Open the `manifestet.json` file and change the `matches` URL to match exactly with the URL you want you script load.
* You can add more than one URL at the same time, or add a Regex rule, like:
```javascript
"matches": ["https://google.com/*"],
```

#### Locales:
* You are able to translate your extension, just go to the `_locales` folder and create the respective language folder.
* This boilerplate starts with two folder examples, like `en` to English (as default language) and `pt` to Portuguese.
* After create the new language folder, you must create a `messages.json` file and insert inside:
```javascript
{
  "keyName": {
    "message": "Value translatable",
    "description": "Description of translatable value"
  }
}
```

#### Handler:
* Your script that will handle the page or tab should be inserted inside the `main.js` file.

#### Installing
1. Visit `chrome://extensions/` in Chrome;
2. Enable the **Developer mode**;
3. Click on **Load unpacked extension**;
4. Select the folder `chrome-extension-boilerplate` or the folder name you changed.
