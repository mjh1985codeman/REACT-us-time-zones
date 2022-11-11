//Note you can type in 'rfc' which will create a react 'template' for your component.  Saves a lot of time! :) 
import React, {useState, useEffect} from 'react';

export default function Current() {

    function getTime() {
      const time = new Date().toLocaleString()
      return time
    }

    const [time, setTime] = useState("");

    useEffect(() => {
      const interval = setInterval(() => {
        setTime(getTime());
      }, 1000);
      return () => clearInterval(interval);
    }, []);


    //The return is what gets sent back to your app component which gets rendered to the page. 
  return (
    <>
      <h1>US Time Zones</h1>
    <div className='current-div'>
      <h3>Your Current Date and Time</h3>
      <p>It is {time}</p>
    </div>
    </>
  )
}
