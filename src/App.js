import React from "react"
import { About } from "./components/about";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";
import {PcHead} from "./components/header";
import { Products } from "./components/products";
import {Top} from "./components/top";

export const App = () => {
  return(
    <>
    <PcHead />
    <Top />
    <About/>
    <Products/>
    <Contact />
    <Footer />
    </>
  );
};
