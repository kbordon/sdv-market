import React from 'react';
import Header from './Header';
import ScheduleTable from './ScheduleTable';
import SeasonalTable from './SeasonalTable';

function App(){
  const appStyle = {
    width: '100%',
    backgroundColor: 'lightyellow',
    margin: 0,
    padding: 0
  };
  return (
    <div style={appStyle}>
      <style jsx global>{`
      html, body {
        padding: 0;
        margin: 0;
        border-sizing: border-box;
      }
    `}</style>
      <Header/>
      <ScheduleTable/>
      <SeasonalTable/>
    </div>
  );
}

export default App;