import React, { ReactElement, ReactNode } from "react";

interface InLayout {
   children : ReactNode
};

const Layout = ({children}: InLayout):ReactElement => {
   console.log(`../public/bg${Math.floor(Math.random()*(Math.floor(3) - Math.ceil(1)+1)+Math.ceil(1)).toString()}.jpg`);
   
   
   return (
      <main className={`bg-[url('../public/bg${Math.floor(Math.random()*(Math.floor(4) - Math.ceil(1)+1)+Math.ceil(1)).toString()}.jpg')]  bg-cover`}>
         {children}
      </main>
   )
};

export default Layout;