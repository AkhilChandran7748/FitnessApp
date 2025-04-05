
import './App.css';
import React, { useEffect, useState } from 'react';
import { history } from './Core/Store';
import Routes from './Core/Routes';
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import 'primeicons/primeicons.css';
import { setBaseUrl } from "../src/Services/HttpService"


function App() {

  const [configLoaded, setConfigLoaded] = useState(false);

  React.useEffect(() => {
    // console.log = console.warn = console.error = () => {};

    console.log("STATE",configLoaded)

    if (!configLoaded) {
      console.log(">>>>>APP JS>>>>");
      let headers = new Headers();
      headers.append("Content-Type", "application/json");
      let init = {
        method: "GET",
        headers: headers,
      };
      fetch("/appConfig.json", init)
        .then((response) => {
          return response.json();
        })
        .then((obj) => {
          setBaseUrl(obj.baseUrl);
          setConfigLoaded(true);
        });
    }
  }, [configLoaded]);


  return (
    <div className="App">
      <PrimeReactProvider>
        <Routes history={history} />
      </PrimeReactProvider>
    </div>
  );
}

export default App;
