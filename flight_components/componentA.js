var flight = require('flightjs');

module.exports = flight.component(componentA);

function componentA() {
  this.after('initialize', function() {
    console.log('componentA is ready!');
  });
}
