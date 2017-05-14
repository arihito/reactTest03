var Evaluator = React.createClass({
	render: function() {
		return React.DOM.h2(null, eval(this.props.text));
	}
});

ReactDOM.render(
  React.createElement(
    Evaluator,
    {
    	text: '5 / 4'
    }),
  document.getElementById('content')
);
