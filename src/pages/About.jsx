import { motion } from "framer-motion";

import Tags from "../layout/about/Tags";
import Header from "../layout/about/Header";
import Lists from "../layout/about/Lists";
import Extras from "../layout/about/Extras";

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 2, ease: "easeOut" } }}
      exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeOut" } }}
      className="about"
    >
      <Header />

      <Lists />

      <Extras />

      <Tags />
    </motion.section>
  );
};

export default About;
