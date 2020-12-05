import { useEffect, useState, useRef} from 'react';

function Clock() {
    //retrieve date data and store them in using state hooks
    let date = new Date();
    const [year, setYear] = useState(date.getFullYear().toString().padStart(2, '0'));
    const [month, setMonth] = useState((date.getMonth() + 1).toString().padStart(2, '0'));
    const [day, setDay] = useState(date.getDate().toString().padStart(2, '0'));
    const [hour, setHour] = useState(date.getHours().toString().padStart(2, '0'));
    const [minute, setMinute] = useState(date.getMinutes().toString().padStart(2, '0'));
    const [second, setSecond] = useState(date.getSeconds().toString().padStart(2, '0'));
    let a = useEffect(() => {
        let timer =  setInterval(() => {
            //retrieve adn set date data each second
            let date = new Date();
            setYear(date.getFullYear().toString().padStart(2, '0'));
            setMonth((date.getMonth() + 1).toString().padStart(2, '0'));
            setDay(date.getDate().toString().padStart(2, '0'));
            setHour(date.getHours().toString().padStart(2, '0'));
            setMinute(date.getMinutes().toString().padStart(2, '0'));
            setSecond(date.getSeconds().toString().padStart(2, '0'));
        }, 1000);
        return () => clearInterval(timer);
    });

    //representing current time
    const [currentTime, setCurrentTime] = useState('');
    const handleOnGetTime = () =>{
        setCurrentTime(`${hour}:${minute}:${second}`);
    }

    //counter datas
    const [count, setCount] = useState('');
    const [countStarted, setCountStarted] = useState(false);
    const [countMinute, setCountMinute] = useState(0);
    const [countSecond, setCountSecond] = useState(0);
    const [countMilisecond, setCountMilisecond] = useState(0);
    //counter useEffect hook
    useEffect(() => {
        
        let counter;
        //check if counter is enabled
        if (countStarted){
            //tick the counter each second
            counter = setInterval(() => {
                setCountSecond(countSecond => countSecond + 1);
                if (countSecond  == 59){
                    setCountSecond(0);
                    setCountMinute(countMinute => countMinute + 1);
                } 
            }, 1000);

        }
        return () => clearInterval(counter);

    },[countStarted,countSecond]);

    //counter milisecond mimic, not accurate
    useEffect(() => {
        
        let counter;   
        if (countStarted){
            counter = setInterval(() => {
                setCountMilisecond(Math.floor(Math.random()*100));

            }, 5);
        }
        return () => clearInterval(counter);
    },[countStarted,countMilisecond]);

    const handleOnClear = () =>{
        setCountStarted(false);
        setCountMinute(0);
        setCountSecond(0);
        setCountMilisecond(0);
    }



    let counts = (
        `${countMinute.toString().padStart(2, '0')}:
        ${countSecond.toString().padStart(2, '0')}.
        ${countMilisecond.toString().padStart(2, '0')}`)
    
    //clock elements
    let clockDate =`${year}/${month}/${day}`;
    let clockTime = (date.getSeconds()%2) 
                    ? `${hour}:${minute}:${second}`
                    : `${hour} ${minute} ${second}`;
    return(
        <div className="clock container bg-light border-top-0 shadow py-2">
            <div className="date text-center  text-dark display-1 font-weight-bold">{clockDate}</div>
            <div className="time text-center text-dark  display-1 font-weight-bold pb-2">{clockTime}</div>
	    
            <div className="container row  no-gutters bg-light border shadow py-2 my-2">
                <h4 className='col-2 my-1 mx-3'>{currentTime}</h4>
                <button className='btn btn-primary' onClick={()=>handleOnGetTime()}>Get Time</button>
	        </div>

            <div className="container row  no-gutters bg-light border shadow py-2 my-2">
                <h4 className='col-2 my-1 mx-3'>{counts}</h4>
                <button className='btn btn-success mr-3' onClick={()=>setCountStarted(true)}>Start</button>
                <button className='btn btn-warning mr-3' onClick={()=>setCountStarted(false)}>Stop</button>
                <button className='btn btn-danger' onClick={()=>handleOnClear()}>Reset</button>

	        </div>
        </div>
        
    )

}

export default Clock