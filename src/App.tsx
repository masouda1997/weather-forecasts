import React from 'react';
import logo from './logo.svg';
import './index.css';
import { Counter } from './components/Counter';
import Layout from './layouts/layout';
import SearchBox from './components/SearchBox';
import main from "./assets/styles/main.module.css"


function App() {
  return (
    <Layout>
      {/* <Counter/> */}
      <main className='flex justify-between items-center flex-col h-screen'>
        <SearchBox/>
        <section className={`${main.container} w-full  h-[90%]`}>
          <section className={`${main.ti}`}>1</section>
          <section className={`${main.wdf} `}>2</section>
          <section className={`${main.mo} `}>3</section>
          <section className={`${main.map} `}>4</section>
        </section>
      </main>
    </Layout>
  );
}

export default App;
