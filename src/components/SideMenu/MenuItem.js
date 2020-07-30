import * as React from "react";
import { motion } from "framer-motion";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

export const MenuItem = ({ i }) => {
  const style = {
    border: `2px solid hsl(0, 0%, 48%)`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "40px"
  };
  const styleItem = { color: `hsl(0, 0%, 48%)` };

  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="motionLi"
    >
      <div className="text-placeholder" style={style}>
        <p style={styleItem}>{i.title}</p>
      </div>
    </motion.li>
  );
};
