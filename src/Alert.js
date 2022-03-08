import React, { useEffect, useRef } from 'react'

const Alert = ({getAlert, setAlert, alertClass}) => {
    const displayAlert = useRef();

    useEffect(() => {
        const timer = setTimeout(() => {
            setAlert("");
                displayAlert.current.classList.remove("alert");
        }, 3000)
        
        return () => clearTimeout(timer);
    });

    

    return <h3 ref={displayAlert} className={`${alertClass}`}>{getAlert}</h3>
}

export default Alert;
