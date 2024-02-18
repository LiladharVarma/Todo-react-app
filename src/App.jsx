import React , {useRef}from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Quote from "./components/Quote";

function App() {
  // const ref = useRef(null) ; 

  return (
    <>
      <div className=" flex flex-col h-screen customBackground"  >
        <Navbar />
        <Quote />
        <Hero  />
      </div>
    </>
  );
}

export default App;
