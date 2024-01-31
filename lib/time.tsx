'use client'
import { createContext, useState, ReactNode, useEffect } from "react";

export function getCurrentTimeIn24HourFormat() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
  
    // Ensure that hours and minutes always have two digits
    const formattedHours = hours < 10 ? `0${hours}` : hours;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  
    // Combine the formatted time components
    return `${formattedHours}:${formattedMinutes}`;
  }

type TimeContextType = {
    currentTime: string;
  };

export const TimeContext = createContext<TimeContextType>(
    {
        currentTime: "",
    }
);

  
   const TimeProvider: React.FC<{ children :ReactNode }> = ({ children }) => {
    const [currentTime, setCurrentTime] = useState<string>("");
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        const formattedTime = getCurrentTimeIn24HourFormat();
        setCurrentTime(formattedTime);
      }, 1000);
  
      return () => clearInterval(intervalId);
    }, []);
  
    return (
      <TimeContext.Provider value={{ currentTime }}>
        {children}
      </TimeContext.Provider>
    );
  };

    export default TimeProvider;