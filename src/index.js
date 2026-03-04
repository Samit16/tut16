import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';


root.render(
  <React.StrictMode>
    <Router>
      <Route path="/" component={App} />
    </Router>
    <App />
  </React.StrictMode>
);

