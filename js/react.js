var Evaluator = React.createClass({
	render: function() {
		return React.DOM.div (
		  null,
		  React.DOM.input({
		  	type: 'text'
		  }),
		  React.DOM.h2(null, 'result')
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
