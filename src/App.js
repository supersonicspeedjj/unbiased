import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Newscomp from "./components/Newscomp";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";


export default function App() {
  const [pagem, setPage] = useState("technology"); // Using state hook to manage 'page' state

  function pgchange(page) {
    if (page === "technology") {
      setPage("technology"); // Update 'page' state when the function is called
    } else if(page==="sports") {
      setPage("sports");
    }
    else
    setPage("politics"); // Update 'page' state when the function is called
  }

  document.body.style.background = "#1F1B24";

  return (
    <>
   
      <Navbar  pgchange={pgchange}></Navbar>
      
      
      <Newscomp page={pagem}></Newscomp>
    </>
  );
}
