import React from "react";

// Lightweight fallback that returns simple React elements for any tag used as
// `motion.tag` (e.g. `motion.section`, `motion.figure`, `motion.a`). This
// lets the app run without the real `framer-motion` during local dev.

function createMotionTag(tag) {
  return React.forwardRef(function MotionTag(props, ref) {
    const { children, style, className, ...rest } = props;
    return React.createElement(
      tag,
      { ref, style, className, ...rest },
      children,
    );
  });
}

const motion = new Proxy(
  {},
  {
    get(_, prop) {
      return createMotionTag(prop);
    },
  },
);

export { motion };
export default motion;
