import "./App.css";

import { Article, Brand, Cta, Feature, Navbar } from "./components";
import {
  Blog,
  Footer,
  Features,
  Header,
  WhatGPT3,
  Possibility,
} from "./containers";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
