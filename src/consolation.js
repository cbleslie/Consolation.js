// Checking for node enviroment
// https://stackoverflow.com/questions/17575790/environment-detection-node-js-or-browser
const enviromentCheck = new Function("try {return this === global;}catch(e){return false;}");
const enviroment = enviromentCheck();

const makeLog = (enviroment, title, color) => message => {

  if (enviroment) {
    console.log(`${title}: `, message);
  } else {
    console.log(
  `%c${title}
%c${message}`,
    //Title Style
  `background-color: ${color};
   color: white;
   font-family: sans-serif;
   line-height: 1.4rem;
   padding: .1rem .5rem;`,
  //Message Style
  `background-color: white;
   font-family: sans-serif;
   line-height: 1.4rem;`);
  }
}

const error = makeLog(enviroment,'Error', '#F44336');
const warning = makeLog(enviroment,'Warning', '#FFC107');
const info = makeLog(enviroment,'Info', '#2196F3');

export {
  error,
  warning,
  info,
  makeLog
};

/*
Example
-------
import * as C from 'consolation.js';
C.error("This is an error.");
C.warning("This is a warning.");
C.info("This is informational.");
*/
