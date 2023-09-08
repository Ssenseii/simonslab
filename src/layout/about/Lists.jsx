import { motion } from "framer-motion";
import { Icon } from "../../data";
import List from "../../components/List";
import Branches from "../../components/Branches";

const Lists = () => {
  return (
    <div className="about__lists">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="about__lists-table"
      >
        <List
          title="INTERESTS"
          list={["BOOKS", "2000s MOVIES", "PIXEL ART", "3D LOW POLY GRAPHICS"]}
        ></List>

        {/* Navigation */}

        <Branches list={["Simonslab","Simonsblog", "simonsprojects", "simonsdocs"]}/>
        
        {/* Navigation */}
        
        <List
          title="CLIENTS"
          list={["ARCHIDESK", "HISUCCESS", "LAPIN", "HYUGA. INC"]}
        ></List>
        <List
          title="OTHER"
          list={[
            "+3 YEAR EXPERIENCE",
            "CSS EXPERIMENTALIST",
            "QUIET ENVIRONMENTS ONLY",
            "SLEEP OPTIONAL",
          ]}
        ></List>
      </motion.div>
      <ul className="about__lists-links">
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/__ssensseiii/"
          >
            INSTAGRAM
          </a>
          {Icon}
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.youtube.com/watch?v=pjSkbjMLuf4"
          >
            TWITTER
          </a>
          {Icon}
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/saad-aboussabr-647a6a22a/"
          >
            LINKEDIN
          </a>
          {Icon}
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/ssenseii"
          >
            GITHUB
          </a>
          {Icon}
        </li>
      </ul>
    </div>
  );
};
export default Lists;
