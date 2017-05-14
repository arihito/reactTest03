var HelloWorld = React.createClass({
	render: function() {
		return React.DOM.h2(null, 'Hello, ' + this.props.name + ' World!');
	}
});

ReactDOM.render(
  React.createElement(
    HelloWorld,
    {
    	name: 'React'
    }),
  document.getElementById('content')
);
