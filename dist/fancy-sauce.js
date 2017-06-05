'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Checking for node enviroment ttps://stackoverflow.com/questions/17575790/environment-detection-node-js-or-browser
 * @return {boolean}
 */
var enviromentCheck = new Function("try {return this === global;}catch(e){return false;}");
var enviroment = enviromentCheck();

var makeLog = function makeLog(enviroment) {
  return function (title, color) {
    return function (message) {

      if (enviroment) {
        console.log(title + ': ', message);
      } else {
        console.log('%c' + title + '\n%c' + message,
        //Title Style
        'background-color: ' + color + ';\n   color: white;\n   font-family: sans-serif;\n   line-height: 1.4rem;\n   padding: .1rem .5rem;',
        //Message Style
        'background-color: white;\n   font-family: sans-serif;\n   line-height: 1.4rem;');
      }
    };
  };
};
var makeLogWithEnviromentSet = makeLog(enviroment);
var error = makeLogWithEnviromentSet('Error', '#F44336');
var warning = makeLogWithEnviromentSet('Warning', '#FFC107');
var info = makeLogWithEnviromentSet('Info', '#2196F3');



/*
Example
-------
import * as FancySauce from 'consolation.js';
FancySauce.error("This is an error.");
FancySauce.warning("This is a warning.");
FancySauce.info("This is informational.");
*/

exports.error = error;
exports.warning = warning;
exports.info = info;
exports.makeLog = makeLog;
exports.makeLogWithEnviromentSet = makeLogWithEnviromentSet;
