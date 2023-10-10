import React from 'react';
import ReactDom from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import client from './client';

import './App.css';
import { Outlet } from 'react-router-dom';

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
//document.getElementById('root')

import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
