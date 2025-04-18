import { useAnimate } from "framer-motion";
import { useEffect } from "react";

function useDelayAnimation(classe, animationToObj, addonsObj) {
    const [scope, animate] = useAnimate();

    useEffect(() => {
      animate(
        classe,
        animationToObj,
        addonsObj
      );
    }, []);
    return scope;
  }

  export default useDelayAnimation
