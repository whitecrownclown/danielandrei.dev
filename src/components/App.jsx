import React from 'react';
import { hot } from 'react-hot-loader';
import './App.scss';
import ContactPage from 'components/ContactPage';
import Switcher from './ThemeSwitcher';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import '@zeit-ui/style';

class App extends React.PureComponent {
	render() {
		return (
			<BrowserRouter>
				<div className="app">
					<nav>
						<Link to="/">Home</Link> | <Link to="/contact">Contact</Link>
						<Switcher />
					</nav>
					<hr />
					<Route path="/contact" component={ContactPage} />
				</div>
			</BrowserRouter>
		);
	}
}

export default hot(module)(App);
