
import './App.css';
import React, { useEffect } from 'react';
import { history } from './Core/Store';
import Routes from './Core/Routes';
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import 'primeicons/primeicons.css';
import { setBaseUrl } from "../src/Services/HttpService"


function App() {
  React.useEffect(() => {
    // console.log = console.warn = console.error = () => {};
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
      });
  }, []);
  return (
    <div className="App">
      <PrimeReactProvider>
        <Routes history={history} />
      </PrimeReactProvider>
    </div>
  );
}

export default App;
