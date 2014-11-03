var flight = require('flightjs');

module.exports = flight.component(componentUI);

function componentUI() {
  this.after('initialize', function() {
    console.log('Ready!');
  });
}
