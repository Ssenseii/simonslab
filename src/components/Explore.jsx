import { motion } from "framer-motion";

const Explore = ({ completed, type, role, client, description }) => {
  const listItem = (word, p) => {
    let delayCount = p / 10;

    return (
      <motion.li
        /// figure this key thing later using pure css
        initial={{ opacity: 0, rotateX: 90 }}
        animate={{ opacity: 1, rotateX: 0 }}
        exit={{ opacity: 0, rotateX: -90 }}
        transition={{ delay: delayCount, duration: 1 }}
      >
        {word}
      </motion.li>
    );
  };

  return (
    <div className="explore">
      <div className="explore__list">
        <ul className="explore__list-order">
          {listItem("A", 1)}
          {listItem("B", 2)}
          {listItem("C", 3)}
          {listItem("D", 4)}
        </ul>
        <ul className="explore__list-title">
          {listItem("COMPLETED", 1)}
          {listItem("TYPE", 2)}
          {listItem("ROLE", 3)}
          {listItem("CLIENT", 4)}
        </ul>
        <ul className="explore__list-data">
          {listItem(completed, 1)}
          {listItem(type, 2)}
          {listItem(role, 3)}
          {listItem(client, 4)}
        </ul>
      </div>

      <div className="explore__action">
        <motion.a
          initial={{ opacity: 0, rotateX: 90 }}
          animate={{ opacity: 1, rotateX: 0 }}
          exit={{ opacity: 0, rotateX: -90 }}
          transition={{ duration: 0.5 }}
          href="/"
        >
          EXPLORE
        </motion.a>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="explore__action-hline"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="explore__action-vline"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, rotateZ: 360 }}
          animate={{ opacity: 1, rotateZ: 0 }}
          exit={{ opacity: 0, rotateZ: 360 }}
          transition={{ duration: 1 }}
          className="explore__action-icon"
        >
          <div className="explore__action-icon-v"></div>
          <div className="explore__action-icon-h"></div>
        </motion.div>
      </div>

      <div className="explore__description">
        <motion.p
          initial={{ opacity: 0, rotateX: 90 }}
          animate={{ opacity: 1, rotateX: 0 }}
          exit={{ opacity: 0, rotateX: -90 }}
          transition={{ duration: 1 }}
        >
          {description}
        </motion.p>
      </div>
    </div>
  );
};

export default Explore;
