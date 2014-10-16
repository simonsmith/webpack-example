var flight =      require('flightjs');
var withRequest = require('flight-request');

module.exports = flight.component(componentUI, withRequest);

function componentUI() {
  this.attributes({
    text: 'Hello, I\'m a Flight component'
  });

  this.after('initialize', function() {
    this.$node.text(this.attr.text);
  });
}
