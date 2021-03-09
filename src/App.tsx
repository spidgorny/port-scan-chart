import React, { useState, useEffect } from 'react';
import { FetchData } from './fetch-data';
import './App.css';
import { RenderData } from './render-data';

interface AppProps {}

function App({}: AppProps) {
  return (
    <div className="App">
      <FetchData>{(data) => <RenderData data={data} />}</FetchData>
    </div>
  );
}

export default App;
