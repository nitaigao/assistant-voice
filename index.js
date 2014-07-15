 var say      = require('say'),
     settings = require('env-settings'),
     faye     = require('faye');

 var client = new faye.Client(settings.detection + '/');
 client.subscribe('/responses', function(message) {
   console.log("Saying: " + message);
   say.speak('Samantha', message);
 });
