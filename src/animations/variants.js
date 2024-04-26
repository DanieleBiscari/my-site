const planetAnimationDuration = 30;

export const scaleUpMedium = {
  hidden: { scale: 0 },
  show: {
    scale: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

export const scaleUpFast = {
  hidden: { scale: 0 },
  show: {
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "linear",
      type: "spring",
      mass: 1.2,
    },
  },
};

//-> Animazioni dei pianeti
export const heartAnimation = {
  scaleUp: {
    scale: [0, 1],
    transition: {
      ease: "easeOut",
    },
  },
  heartScaleUp: {
    scale: 1.3,
  },
  resume: {
    x: 0,
    y: 0,
    scale: 1,
  },
  hidden: {
    scale: 0,
    x: 0,
    y: 0,
  },
  show: {
    scale: 1,
    x: [0, "40vw", 0, "-40vw", 0],
    y: [0, "30vh", "70vh", "30vh", 0],
    transition: {
      opacity: {
        duration: 1,
        ease: "easeInOut",
      },
      x: {
        delay: 0.5,
        repeat: Infinity,
        duration: planetAnimationDuration,
        ease: "linear",
      },
      y: {
        delay: 0.5,
        repeat: Infinity,
        duration: planetAnimationDuration,
        ease: "linear",
      },
    },
  },
};

export const marsAnimation = {
  scaleUp: {
    scale: [0, 1],
    transition: {
      ease: "easeOut",
    },
  },
  marsScaleUp: {
    scale: 1.3,
  },
  resume: {
    x: 0,
    y: 0,
    scale: 1,
  },
  hidden: {
    scale: 0,
    x: 0,
    y: 0,
  },
  show: {
    scale: 1,
    x: [0, "30vw", "70vw", "30vw", 0],
    y: [0, "-35vh", 0, "35vh", 0],
    transition: {
      opacity: {
        duration: 1,
        ease: "easeInOut",
      },
      x: {
        delay: 0.5,
        repeat: Infinity,
        duration: planetAnimationDuration,
        ease: "linear",
      },
      y: {
        delay: 0.5,
        repeat: Infinity,
        duration: planetAnimationDuration,
        ease: "linear",
      },
    },
  },
};

export const saturnAnimation = {
  scaleUp: {
    scale: [0, 1],
    transition: {
      ease: "easeOut",
    },
  },
  saturnScaleUp: {
    scale: 1.3,
  },
  resume: {
    x: 0,
    y: 0,
    scale: 1,
  },
  hidden: {
    scale: 0,
    x: 0,
    y: 0,
  },
  show: {
    scale: 1,
    x: [0, "-35vw", "-70vw", "-35vw", 0],
    y: [0, "35vh", 0, "-30vh", 0],
    transition: {
      opacity: {
        duration: 1,
        ease: "easeInOut",
      },
      x: {
        delay: 0.5,
        repeat: Infinity,
        duration: planetAnimationDuration,
        ease: "linear",
      },
      y: {
        delay: 0.5,
        repeat: Infinity,
        duration: planetAnimationDuration,
        ease: "linear",
      },
    },
  },
};

export const alienPlanetAnimation = {
  scaleUp: {
    scale: [0, 1],
    transition: {
      ease: "easeOut",
    },
  },
  alienPlanetScaleUp: {
    scale: 1.3,
  },
  resume: {
    x: 0,
    y: 0,
    scale: 1,
  },
  hidden: {
    scale: 0,
    x: 0,
    y: 0,
  },
  show: {
    scale: 1,
    x: [0, "-40vw", 0, "40vw", 0],
    y: [0, "-35vh", "-75vh", "-35vh", 0],
    transition: {
      opacity: {
        duration: 1,
        ease: "easeInOut",
      },
      x: {
        delay: 0.5,
        repeat: Infinity,
        duration: planetAnimationDuration,
        ease: "linear",
      },
      y: {
        delay: 0.5,
        repeat: Infinity,
        duration: planetAnimationDuration,
        ease: "linear",
      },
    },
  },
};
//<-
