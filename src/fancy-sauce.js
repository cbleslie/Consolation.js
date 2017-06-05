const enviromentCheck = new Function("try {return this === global;}catch(e){return false;}");
const enviroment = enviromentCheck();

const makeLog = enviroment => (title, color) => message => {

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
const makeLogWithEnviromentSet = makeLog(enviroment);
const error = makeLogWithEnviromentSet('Error', '#F44336');
const warning = makeLogWithEnviromentSet('Warning', '#FFC107');
const info = makeLogWithEnviromentSet('Info', '#2196F3');

export {
  error,
  warning,
  info,
  makeLog,
  makeLogWithEnviromentSet
};

/*
Example
-------
import * as FancySauce from 'fancy-sauce.js';
FancySauce.error("This is an error.");
FancySauce.warning("This is a warning.");
FancySauce.info("This is informational.");
*/
