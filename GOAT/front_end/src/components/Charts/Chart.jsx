//Dependencies
var React = require('react');
var d3Chart = require('./d3Chart');

//Component
var Chart = React.createClass({
  componentDidMount: function() {
    var el = this.getDOMNode();
    d3Chart.create(el, {
      width: '100%',
      height: '300px'
    }, this.getChartState());
  },

  componentDidUpdate: function() {
    var el = this.getDOMNode();
    d3Chart.update(el, this.getChartState());
  },

  getChartState: function() {
    return {
      data: this.props.data,
      domain: this.props.domain
    };
  },

  componentWillUnmount: function() {
    var el = this.getDOMNode();
    d3Chart.destroy(el);
  },

  render: function() {
    return (
      <div className="Chart"></div>
    );
  }
});

module.exports = Chart;