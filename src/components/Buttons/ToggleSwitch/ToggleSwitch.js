import React, { useState } from 'react';

export default function ToggleSwitch(props) {
    const [toggle, setToggle] = useState(false);
    const toggleClass = " transform translate-x-5";

    React.useEffect(() => {
        props.handleToggle(toggle)
      });

    return (
     
        <div
        className="md:w-14 md:h-7 w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer"
        onClick={() => {
            setToggle(!toggle);
            }}
        >
            <div
                className={
                "bg-white dark:bg-black md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out" +
                (toggle && toggleClass)
                }
            ></div>
        </div>
        
    );
}
