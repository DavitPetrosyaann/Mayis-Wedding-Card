import React from "react";

// Minimal fallback API for `framer-motion` used in this project.
// Provides `motion.figure` compatible component props used in `Story.jsx`.

export const motion = {
  figure: React.forwardRef(function MotionFigure(props, ref) {
    const { children, className, style, ...rest } = props;
    return (
      <figure ref={ref} className={className} style={style} {...rest}>
        {children}
      </figure>
    );
  }),
};

export default motion;
