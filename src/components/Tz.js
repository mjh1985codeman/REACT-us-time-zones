export default function Tz(props) {

  return (
    <>
    <div className="times">
        <div className="time-slot">
            <h3 className="tz">Eastern (EST):</h3>
            <p className="tz-slot-dt">{props.time.estTime}</p>
        </div>
        <div className="time-slot">
            <h3 className="tz">Central (CST):</h3>
            <p className="tz-slot-dt">{props.time.cstTime}</p>
        </div>
        <div className="time-slot">
            <h3 className="tz">Mountain (MST):</h3>
            <p className="tz-slot-dt">{props.time.mstTime}</p>
        </div>
        <div className="time-slot">
            <h3 className="tz">Pacific (PST):</h3>
            <p className="tz-slot-dt">{props.time.pstTime}</p>
        </div>
    </div>
    </>
  )
}
