import React from 'react';
import Investments from './components/Investments';
import data from './data.json';

function App() {
  return <Investments investments={data.investments} reports={data.reports} />;
}

export default App;
