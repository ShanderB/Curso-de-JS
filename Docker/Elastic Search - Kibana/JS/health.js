var client = require('./connection.js');

/* client.ping({
    requestTimeout: 1000
  }, function (error) {
    if (error) {
      console.trace('elasticsearch cluster is down!');
    } else {
      console.log('All is well');
    }
  });  */

client.cluster.health({}, function (err, resp, status) {
    console.log("-- Client Health --", resp);
});