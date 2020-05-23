import React from 'react';
import { hot } from 'react-hot-loader';
import './App.scss';
import Home from './pages/Home';
import Footer from './components/Footer';
import { BrowserRouter,  } from 'react-router-dom';
import '@zeit-ui/style';

class App extends React.PureComponent {
	render() {
		return (
			<BrowserRouter>
				<div className="app">
					<Home />
					<Footer />
				</div>
			</BrowserRouter>
		);
	}
}

export default hot(module)(App);
