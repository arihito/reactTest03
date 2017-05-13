var HelloWorld = React.createClass({
	render: function() {
		return React.DOM.h2(null, 'Hello, React World!');
	}
});

ReactDOM.render(
  React.createElement(HelloWorld),
  document.getElementById('content')
);
