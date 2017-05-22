const makeLog = (title, color) => message => console.log(
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
   line-height: 1.4rem;`
);
const error = makeLog('Error', '#F44336');
const warning = makeLog('Warning', '#FFC107');
const info = makeLog('Info', '#2196F3');

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
