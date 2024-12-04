import React from 'react';
import logo from './logo.svg';
import './index.css';
import { Counter } from './components/Counter';
import Layout from './layouts/layout';
import SearchBox from './components/SearchBox';


function App() {
  return (
    <Layout>
      {/* <Counter/> */}
      <SearchBox/>
    </Layout>
  );
}

export default App;
