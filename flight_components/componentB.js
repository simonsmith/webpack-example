var flight = require('flightjs');

module.exports = flight.component(componentB);

function componentB() {
  this.after('initialize', function() {
    console.log('componentB is ready!');
  });
}
