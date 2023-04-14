import styles from "./App.module.scss";

import logo from "./assets/logo.svg";
import illustration from "./assets/illustration-mockups.svg";

import facebook from "./assets/facebook-f.svg";
import twitter from "./assets/twitter.svg";
import instagram from "./assets/instagram.svg";

import { motion } from "framer-motion";

const App = () => {
  return (
    <div className={styles.container}>
      <nav>
        <motion.img
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          src={logo}
          alt="Logo"
        />
      </nav>
      <section>
        <div>
          <motion.img
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            src={illustration}
            alt="Illustration"
          />
        </div>
        <div>
          <motion.h1
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Build The Community <br />
            Your Fans Will Love
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion. Register
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Register
          </motion.button>
        </div>
      </section>
      <footer>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <img src={facebook} alt="Facebook" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
        >
          <img src={twitter} alt="Twitter" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
        >
          <img src={instagram} alt="Instagram" />
        </motion.div>
      </footer>
    </div>
  );
};

export default App;
