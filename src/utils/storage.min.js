/*!
 * Chrome Extension Boilerplate - Storage 1.1
 * https://github.com/williankeller/chrome-extension-boilerplate/blob/master/src/utils/storage.min.js
 * Copyright 2017 "Chrome Extension Boilerplate"
 * Licensed under MIT
 */
var Storage={syncronize:function(){var r={};try{chrome.storage&&(r=chrome.storage)}catch(r){}try{window.storage&&(r=window.storage)}catch(r){}try{browser.storage&&(r=browser.storage)}catch(r){}try{r=browser.extension.storage}catch(r){}return r.sync?r.sync:r.local},save:function(r,t){this.syncronize().set(r,t||null)},get:function(r,t){this.syncronize().get(r,function(r){t(r)})},remove:function(r,t){this.syncronize().remove(r,function(r){t(r)})}};