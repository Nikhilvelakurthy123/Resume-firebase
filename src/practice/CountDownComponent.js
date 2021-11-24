import React, { useEffect, useState } from 'react'

function CountDownComponent() {
    var [displayTimer, setDisplayTimer] = useState()
    var [hours, setHours] = useState()
    var [minutes, setMinutes] = useState()
    var [seconds, setSeconds] = useState()
    var [amPm, setAmPm] = useState();

    var [dminutes, setDMinutes] = useState();
    var [dseconds, setDSeconds] = useState();

    const [disableState, setDisableState] = useState(false)

    const [stopWatch, setstopWatch] = useState(true)

    //var [seconds, setSeconds] = useState(0)
    let myInterval;

    useEffect(() => {

        CountUp();
        // setDMinutes(0);
        // setDSeconds(0);
        //CountDown();
        return () => {
            clearInterval(myInterval);
            setDisableState(false);
        };
    }, []);

    const CountUp = () => {
        setInterval(function () {
            var m = new Date().getMinutes();
            var minutes = m < 10 ? "0" + m : m;

            var s = new Date().getSeconds();
            var seconds = s < 10 ? "0" + s : s;
            //console.log(seconds)

            var amPm = new Date().getHours() > 12 ? "PM" : "AM";

            var h = new Date().getHours() % 12;
            var hours = (h) < 10 ? "0" + (h) : (h);

            // setDisplayTimer(hours + ":" + minutes + ":" + seconds + " " + amPm);
            setMinutes(minutes);
            setSeconds(seconds);
            setHours(hours);
            setAmPm(amPm);
        }, 1000);
    }

    const CountDown = () => {
        setDisableState(true)
        var duration = 60 * 5
        var timer = duration, minutes, seconds;

        myInterval = setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            console.log(minutes)
            console.log(seconds)

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            setDisplayTimer(minutes + ":" + seconds);

            setDMinutes(minutes);
            setDSeconds(seconds);

            if (--timer < 0) {
                timer = 0;
                setstopWatch(false);
            }
        }, 1000);

    }

    return (
        <div className="container-fluid " style={{ height: "100vh" }}>
            <div className="counter text-center" style={{ marginTop: "5vh" }}>
                <div className="row">
                    <h1>Counter</h1>
                    <h5>Count UP</h5>
                    <code style={{ fontSize: "6rem" }}>
                        {hours != null || hours != undefined ? (hours + ":" + minutes + ":" + seconds + " " + amPm) : "00:00:00 XX"}
                    </code>
                    <hr />
                    <h5>Count Down</h5>
                    <code style={{ fontSize: "6rem" }}>
                        {dseconds != null && stopWatch || dseconds != undefined ? dminutes + ":" + dseconds : "00:00"}
                        <br />
                        {/* {displayTimer} */}
                    </code>


                </div>
                <div className="d-row d-flex justify-content-center p-4">
                    <button className="btn btn-success w-25 mt-2 me-4" id="start" disabled={disableState} onClick={CountDown}>Start</button>
                    <button className="btn color-gray w-25 mt-2 btn-outline-dark" onClick={() => { setDMinutes(0); setDSeconds(0); clearInterval(myInterval); }}>End</button>
                </div>
            </div >
        </div>
    );
}

export default CountDownComponent;