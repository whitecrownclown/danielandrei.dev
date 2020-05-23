import React from 'react';
import { hot } from 'react-hot-loader';
import './App.scss';
import Home from './pages/Home';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import '@zeit-ui/style';

class App extends React.PureComponent {
	render() {
		return (
			<BrowserRouter>
				<div className="app">
					<Home />
				</div>
			</BrowserRouter>
		);
	}
}

export default hot(module)(App);
