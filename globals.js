import process from 'process';
import {Buffer} from 'buffer';

global.Buffer = Buffer;
global.process = process;
global.location = {protocol: 'file:'};
global.navigator.userAgent = 'React Native';

global.loggy = m => {
  console.info(JSON.stringify(m, null, 4));
};

if (typeof global.btoa === 'undefined') {
  global.btoa = str => new Buffer(str, 'binary').toString('base64');
}

if (typeof global.atob === 'undefined') {
  global.atob = str => new Buffer(str, 'base64').toString('binary');
}

if (!Object.values) {
  Object.values = function(obj) {
    return Object.keys(obj).map(o => obj[o]);
  };
}

if (!Object.entries) {
  Object.entries = function(obj) {
    return Object.keys(obj).map(o => [o, obj[o]]);
  };
}
