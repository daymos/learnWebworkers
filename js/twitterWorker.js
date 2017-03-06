var a = require('myscript.js');
// this receive the content of postMessage in the parent script
self.addEventListener('message', function(e) {
  self.postMessage(e.data);// this line return something to the parent
}, false);
