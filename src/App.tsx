import React, { useState, useEffect } from 'react';
import {FetchData} from './fetch-data';
import {RenderData} from './render-data'
import './App.css';

interface AppProps {}

function App({}: AppProps) {
  return (
    <div className="App">
      <FetchData>{(data) => <RenderData data={data}/>}</FetchData>
    </div>
  );
}

export default App;
