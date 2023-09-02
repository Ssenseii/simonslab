import React from "react";
import { motion } from "framer-motion";

const List = ({ title, list }) => {
  return (
    <ul className="list">
      <p className="list__title"># {title}</p>
      {list.map((item, i) => {
        return (
          <motion.li
            initial={{ rotateX: -90 }}
            whileInView={{ rotateX: 0 }}
            transition={{ delay: i / 10, duration: 1 }}
            key={i}
            className="list__element"
          >
            {item}
          </motion.li>
        );
      })}
    </ul>
  );
};

export default List;
