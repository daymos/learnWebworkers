var worker = new Worker('twitterworker.js');

worker.addEventListener('message', function(e) {
    console.log('Worker said: ', e.data);
}, false);

// the mehtod postMessage is used to comunicate with the worker. Can take json.
worker.postMessage('Hello World'); // Send data to our worker.
