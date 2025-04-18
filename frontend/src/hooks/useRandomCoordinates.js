import { useEffect, useState } from 'react'

const useRandomCoordinates = (min, max, time) => {
    const [randomCoordinates, setRandomCoordinates] = useState({
        x: Math.floor(Math.random() * (max - min + 1)) + min,
        y: Math.floor(Math.random() * (max - min + 1)) + min,
      });
     let newRandom;

    useEffect(() => {
        setInterval(() => {
          newRandom = {
            x: Math.floor(Math.random() * (max - min + 1)) + min,
            y: Math.floor(Math.random() * (max - min + 1)) + min,
          };
          setRandomCoordinates(newRandom);
        }, time);

      }, []);



    return (randomCoordinates)
}

export default useRandomCoordinates