import Current from "./components/Current";
import Tz from "./components/Tz";
import React, {useState, useEffect} from 'react';
import './App.css';

const timeZones = ['America/New_York', 'America/Chicago', 'America/Denver', 'America/Los_Angeles'];

function App() {
    function getTimeObj() {
      const time = new Date();
      const timeObj = {
          local:time.toLocaleString(),
          estTime:time.toLocaleString('en-US', {
              timeZone: timeZones[0]
          }),
          cstTime:time.toLocaleString('en-US', {
              timeZone: timeZones[1]
          }),
          mstTime:time.toLocaleString('en-US', {
              timeZone: timeZones[2]
          }),
          pstTime:time.toLocaleString('en-US', {
              timeZone: timeZones[3]
          })
      }
     return timeObj
  }
  

  const [time, setTime] = useState({getTimeObj});
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTimeObj);
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <>
    <Current time={getTimeObj()}/>
    <Tz time={getTimeObj()}/>
    </>
  );
}

export default App;
