import React from 'react';
import { hot } from 'react-hot-loader';
import 'assets/scss/App.scss';
import ContactPage from 'components/ContactPage';
import { BrowserRouter, Route, Link } from 'react-router-dom';

class App extends React.PureComponent {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <nav>
            <Link to="/">Home</Link> | <Link to="/contact">Contact</Link>
          </nav>
          <hr />
          <Route path="/contact" component={ContactPage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default hot(module)(App);
