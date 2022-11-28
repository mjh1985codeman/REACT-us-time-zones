//Note you can type in 'rfc' which will create a react 'template' for your component.  Saves a lot of time! :) 

export default function Current(props) {

  return (
    <>
      <h1>US Time Zones</h1>
    <div className='current-div'>
      <h3>Your Current Date and Time</h3>
      <p>It is {props.time.local}</p>
    </div>
    </>
  )
}
