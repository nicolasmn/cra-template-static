import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <nav className="App-nav">
            <Link className="App-link" to="/">Home</Link>
            <Link className="App-link" to="/about">About</Link>
          </nav>
        </header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route component={Error} />
        </Switch>
      </Router>
    </div>
  );
}

const Home = () => (
  <>
    <Helmet title="Home" />
    <h1>Home</h1>
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  </>
);

const About = () => (
  <>
    <Helmet title="About" />
    <h1>About</h1>
  </>
);

const Error = () => (
  <>
    <Helmet title="404" />
    <h1>404</h1>
    <p><Link to="/">Go back to home page</Link></p>
  </>
);

export default App;
