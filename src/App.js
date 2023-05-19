import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import './App.css'
import { action, originals, comedy, horror } from './url'
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={originals} title='Netflix Originals' />
      <RowPost url={action} title='Action' isSmall />
      <RowPost url={comedy} title='Comedy' isSmall />
      <RowPost url={horror} title='Horror' isSmall />

    </div>
  );
}

export default App;
