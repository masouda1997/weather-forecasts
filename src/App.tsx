import React from 'react';
import logo from './logo.svg';
import './index.css';
import { Counter } from './components/Counter';
import Layout from './layouts/layout';


function App() {
  return (
    <Layout>
      <Counter/>
    </Layout>
  );
}

export default App;
