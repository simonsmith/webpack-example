var React = require('react');

module.exports = React.createClass({
  getDefaultProps: function() {
    return {
      imgSrc: 'https://avatars1.githubusercontent.com/u/360703?v=2&s=100'
    };
  },

  render: function() {
    return (
      <div className="Avatar">
        <img className="Avatar-img" src={this.props.imgSrc} alt="" />
      </div>
      )
  }
});
