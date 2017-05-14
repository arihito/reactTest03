var Evaluator = React.createClass({
	componentWillMount: function () {
		// ①描画時に通知
		console.log('①描画時に通知 componentWillMount');
	},
	componentDidMount: function() {
		// ②コンポーネントの描画時に1度だけ通知
		console.log('②コンポーネントの描画時に1度だけ通知 componentDidMount');
	},
	componentWillReceiveProps: function(nextProps) {
		// 新たなPropsが設定される度に実行
		console.log('新たなPropsが設定される度に実行 componentWillReceiveProps:', nextProps);
	},
	shouldComponentUpdate: function(nextProps, nextState) {
		// ③PropsやStateを受け取る直前に更新を管理
		console.log('③PropsやStateを受け取る直前に更新を管理 shouldComponentUpdate:', nextProps, nextState);
		return true;
	},
	componentWillUpdate: function(prevProps, prevState) {
		// ④再描画直前に実行
		console.log('④再描画直前に実行 componentWillUpdate:', prevProps, prevState);
	},
	componentDidUpdate: function(prevProps, prevState) {
		// ⑤再描画直後に実行
		console.log('⑤再描画直後に実行 componentDidUpdate:', prevProps, prevState);
	},
	componentWillUnmount: function() {
		// ⑥閉じられる直前に後処理を実行
		console.log('⑥閉じられる直前に後処理を実行 componentWillUnmount:');
	},
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
  React.createElement(Evaluator),
  document.getElementById('content')
);
