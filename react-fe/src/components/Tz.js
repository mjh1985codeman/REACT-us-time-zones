import React, {useState, useEffect} from 'react';

export default function Tz() {

    const timeZones = ['America/New_York', 'America/Chicago', 'America/Denver', 'America/Los_Angeles'];
    
     function getTimeObj() {
        const time = new Date();
        const timeObj = {
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
    <div className="times">
        <div className="time-slot">
            <h3 className="tz">Eastern (EST):</h3>
            <p className="tz-slot-dt">{time.estTime}</p>
        </div>
        <div className="time-slot">
            <h3 className="tz">Central (CST):</h3>
            <p className="tz-slot-dt">{time.cstTime}</p>
        </div>
        <div className="time-slot">
            <h3 className="tz">Mountain (MST):</h3>
            <p className="tz-slot-dt">{time.mstTime}</p>
        </div>
        <div className="time-slot">
            <h3 className="tz">Pacific (PST):</h3>
            <p className="tz-slot-dt">{time.pstTime}</p>
        </div>
    </div>
    </>
  )
}
