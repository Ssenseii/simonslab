import {motion} from 'framer-motion'
import {HomeIcon } from "../../data";
import {Link} from 'react-router-dom'

const Header = () => {

  
  return (
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
        <Link to="/">
        <p>CLOSE</p>
        <div className="meIcon">
          {HomeIcon}
        </div>
        </Link>
        <div className="about__header-close-underline"></div>
      </div>
    </motion.div>
  );
};


export default Header;