import React, { useState, useEffect } from 'react';
import './contdown.css';

const Countdown = () => {
    const [time, setTime] = useState(600); // 10 minutes in seconds
    let intervalId;

    useEffect(() => {
        intervalId = setInterval(() => {
            setTime(prevTime => prevTime - 1);
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    useEffect(() => {
        if (time === 0) {
            clearInterval(intervalId);
            alert("Time's up!");
        }
    }, [time, intervalId]);

    const formatTime = () => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes}:${(seconds < 10 ? '0' : '')}${seconds}`;
    };

    return (
        <div className='countdownWrapper'>
            <div className='countdownBox'>
                <div className='countdownTimer'>
                    <span className='heading'>Countdown</span>
                    <div className='countdownTime'>{formatTime()}</div>
                </div>
            </div>
        </div>
    );
};

export default Countdown;
