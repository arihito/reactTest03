var Evaluator = React.createClass({
	getInitialState: function() {
		return {
			expression: ''
		};
	},
	reCalcValue: function(e) {
		if (e.key === 'Enter')
			this.setState({
				expression: e.target.value
			});
	},
	render: function() {
		return React.DOM.div (
		  null,
		  React.DOM.input({
		  	type: 'text',
		  	onKeyPress: this.reCalcValue
		  }),
		  React.DOM.h2(null, eval(this.state.expression))
		);
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
