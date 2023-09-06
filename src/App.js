import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Newscomp from "./components/Newscomp";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import LoadingBar from 'react-top-loading-bar'

function App() {
  const [progress, setProgress] = useState(0);
  const [pagem, setPage] = useState("technology");

  useEffect(() => {
    document.body.style.background = "#1F1B24";
  }, []);

  function pgchange(page) {
    if (page === "technology") {
      setPage("technology");
    } else if (page === "sports") {
      setPage("sports");
    } else {
      setPage("politics");
    }
  }
  function changepro(progress){
    setProgress(progress);
  }
  return (
    <>
      <Navbar pgchange={pgchange}></Navbar>
      <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Newscomp page={pagem} changepro={changepro}></Newscomp>
    </>
  );
}

export default App;
