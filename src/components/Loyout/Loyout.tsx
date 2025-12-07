import { Outlet } from "react-router";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

import { useState } from "react";

const Loyout = () => {

  return (
    <div className={`app `} >
      <button  style={{zIndex: '9', position: 'relative'}}>+++++</button>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}
export{Loyout}