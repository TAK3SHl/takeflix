import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.17, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export const Navigation = () => (
  <motion.ul variants={variants} className="motionUl">
    {itemContents.map(i => (
      <MenuItem i={i} key={i.title} />
    ))}
  </motion.ul>
);

//const itemIds = [0, 1, 2, 3, 4, 5];
const itemContents = [
  {
    title: "Movies"
  },
  {
    title: "Series"
  },
  {
    title: "Documentaries"
  },
  {
    title: "Songs"
  }
];
