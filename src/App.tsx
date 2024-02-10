import React from 'react';
import Investments from './components/Investments';
import data from './data.json';
import { InvestmentsReport } from './Types';

const reports = (data.reports as InvestmentsReport[]).sort((a, b) => {
  if (a.month > b.month) return 1;
  if (a.month < b.month) return -1;
  return 0;
});

function App() {
  return <Investments investments={data.investments} reports={reports} />;
}

export default App;
