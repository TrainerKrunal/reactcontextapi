import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import toolkitStore from './ReduxDeepDrive/toolkitStore';
import store from './ReduxDeepDrive/store'; // Import Redux Basics store
import { ApolloProvider } from '@apollo/client';
import client from './GraphQL/ApolloClient';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Dynamically switch between stores based on the route
const currentStore = window.location.pathname.includes("toolkit")
  ? toolkitStore
  : window.location.pathname.includes("async-toolkit")
  ? asyncToolkitStore
  : store;

root.render(
  <React.StrictMode>
    <Provider store={currentStore}> {/* Use the appropriate store */}
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
