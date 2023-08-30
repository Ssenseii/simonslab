import { motion } from "framer-motion";
import { Icon, HomeIcon } from "../data";
import List from "../components/List";

const About = ({ handleAbout }) => {
  /// Toggle About
  const handleToggleAbout = () => {
    handleAbout();
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 2, ease: "easeOut" } }}
      exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeOut" } }}
      className="about"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="about__header"
      >
        <div className="about__header-card">
          <h1>SAAD ABOUSSABR</h1>
          <p>
            A.K.A SIMON REINHARDT, FRONTEND DEVELOPER AND CREATOR OF SIMONSLAB.
            AGENCY, SOFTWARE, AND ILLUSTRATIVE WORK
          </p>
        </div>
        <div className="about__header-close">
          <p onClick={handleToggleAbout}>CLOSE</p>
          <div onClick={handleToggleAbout} className="meIcon">
            {HomeIcon}
          </div>
          <div className="about__header-close-underline"></div>
        </div>
      </motion.div>

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
            list={[
              "BOOKS",
              "2000s MOVIES",
              "PIXEL ART",
              "3D LOW POLY GRAPHICS",
            ]}
          ></List>
          <List
            title="BRANCHES"
            list={[
              "SIMONSBLOG",
              "SIMONSINFINITY",
              "SIMONSGALLERY",
              "SIMONSTOOLS",
            ]}
          ></List>
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

      <div className="about__tags">
        <div className="about__tags-available">
          <p>
            INDEPENDANT FRONTEND DEVELOPER <br /> AVAILABLE OCTOBER '23
          </p>
        </div>
        <div className="about__tags-design">
          <p>SIMONSLAB - 2ND ITERATION</p>
        </div>
        <div className="about__tags-rights">
          <p>
            ALL RIGHTS RESERVED <br /> SIMONSLAB 2023®
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
