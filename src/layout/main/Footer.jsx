import  {motion, AnimatePresence} from 'framer-motion'
import { GithubIcon, TwitterIcon, InstagramIcon, Icon } from "../../data";
import Explore from '../../components/Explore';



const Footer = ({ completed, type, role, client, description, isVisible }) => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="footer"
    >
      <div className="footer__email">
        <a href="mailto: saadabou.study@gmail.com">EMAIL ME</a>
        {Icon}
      </div>

      <AnimatePresence>
        {isVisible && (
          <Explore
            completed={completed}
            type={type}
            role={role}
            client={client}
            description={description}
          />
        )}
      </AnimatePresence>

      <div className="footer__social">
        <ul>
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
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/ssenseii"
          >
            {GithubIcon}
          </a>
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
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/__ssensseiii/"
          >
            {InstagramIcon}
          </a>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.youtube.com/watch?v=tvkxupwbFLk"
            >
              TWITTER
            </a>
            {Icon}
          </li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.youtube.com/watch?v=tvkxupwbFLk"
          >
            {TwitterIcon}
          </a>
        </ul>
      </div>
    </motion.footer>
  );
};

export default Footer;
