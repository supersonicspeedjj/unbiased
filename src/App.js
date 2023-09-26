import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Newscomp from "./components/Newscomp";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import LoadingBar from 'react-top-loading-bar'
import clevertap from 'clevertap-web-sdk';
import Form from "./components/Form";
function App() {


  window.clevertap.notifications.push({
    "titleText":'Would you like to receive Push Notifications?',
    "bodyText":'We promise to only send you relevant content and give you updates on your transactions',
    "okButtonText":'Sign me up!',
    "rejectButtonText":'No thanks',
    "okButtonColor":'#f28046',
    "serviceWorkerPath": "/service-worker.js"
});

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
      {/* <Form></Form> */}
    </>
  );
}

export default App;
