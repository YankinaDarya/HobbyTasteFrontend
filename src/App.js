import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Content from "./components/MainPage/Content/Content";

function App() {
  return (<div>
        <div className="app-wrapper">
          <Header />
          <div className="app-wrapper-content">
          <MainPage />
          {/*<SearchContainer />*/}
          <Content />

          </div>
        </div>
          <Footer />
          <div className="search">
          </div>
      </div>
  );
}



export default App;
