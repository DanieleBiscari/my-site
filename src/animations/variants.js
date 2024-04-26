const planetAnimationDuration = 80;

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
  // heartScaleUp: {
  //   scale: 1.3,
  // },
  resume: {
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      x: {
        duration: 1,
        ease: "easeOut",
      },
      y: {
        duration: 1,
        ease: "easeOut",
      },
    },
  },
  hover: {
    scale: 1.2,
    transition: {
      rotate: {
        duration: 2,
        repeat: Infinity,
        ease: "linear",
      },
    },
    rotate: ["0deg", "90deg", "180deg", "270deg", "360deg"],
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
  hover: {
    scale: 1.2,
    transition: {
      rotate: {
        duration: 2,
        repeat: Infinity,
        ease: "linear",
      },
    },
    rotate: ["0deg", "90deg", "180deg", "270deg", "360deg"],
  },
  resume: {
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      x: {
        duration: 1,
        ease: "easeOut",
      },
      y: {
        duration: 1,
        ease: "easeOut",
      },
    },
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
  hover: {
    scale: 1.2,
    transition: {
      rotate: {
        duration: 2,
        repeat: Infinity,
        ease: "linear",
      },
    },
    rotate: ["0deg", "90deg", "180deg", "270deg", "360deg"],
  },
  resume: {
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      x: {
        duration: 1,
        ease: "easeOut",
      },
      y: {
        duration: 1,
        ease: "easeOut",
      },
    },
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
  hover: {
    scale: 1.2,
    transition: {
      rotate: {
        duration: 2,
        repeat: Infinity,
        ease: "linear",
      },
    },
    rotate: ["0deg", "90deg", "180deg", "270deg", "360deg"],
  },
  resume: {
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      x: {
        duration: 1,
        ease: "easeOut",
      },
      y: {
        duration: 1,
        ease: "easeOut",
      },
    },
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

export const spaceshipAnimation = {
  hidden: {
    opacity: 0,
    scale: 0,
    x: 0,
    y: 0,
  },
  show: {
    scale: 1,
    x: [0, 2, -2, 0],
    y: [0, 2, -2, 0],
    transition: {
      scale: {
        duration: 0.5,
        ease: "easeOut",
      },
      x: {
        repeat: Infinity,
        repeatDelay: 10,
        repeatType: "mirror",
        type: "tween",
        duration: 0.5,
        delay: 5,
      },
      y: {
        repeat: Infinity,
        ease: "linear",
        duration: 4,
      },
    },
  },
};

export const humanAnimation = {
  hidden: {
    opacity: 0,
    scale: 0,
    x: -800,
    y: 500,
  },
  show: {
    x: 0,
    y: 0,
    transition: {
      scale: {
        duration: 0.5,
        ease: "easeOut",
      },
      x:{
        duration: 0.3,
        ease: "easeOut",
        type: "spring",
        mass: .5
      },
      y:{
        duration: 0.3,
        ease: "easeOut",
        type: "spring",
        mass: .5
      },
    },
  },
};
