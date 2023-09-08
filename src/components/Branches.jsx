import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Branches = ({ list }) => {
  

  /// Takes "SIMONSXXXX" and removes the first part to create the /link
  function sliceSimon(string){ 
    if(string.toUpperCase() === "SIMONSLAB") return ""
    return (string.substring(6)); 
  }

  return (
    <ul className="list">
      <p className="list__title"># Branches</p>
      {list.map((item, i) => {
        return (
          <motion.li
            initial={{ rotateX: -90 }}
            whileInView={{ rotateX: 0 }}
            transition={{ delay: i / 10, duration: 1 }}
            key={i}
            className="list__element"
          >
            <Link to={`/${sliceSimon(item)}`}>{item}</Link>
          </motion.li>
        );
      })}
    </ul>
  );
};

export default Branches;
