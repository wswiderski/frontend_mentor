import styles from "./App.module.scss";

import logo from "./assets/logo.svg";
import illustration from "./assets/illustration-mockups.svg";

import facebook from "./assets/facebook-f.svg";
import twitter from "./assets/twitter.svg";
import instagram from "./assets/instagram.svg";

const App = () => {
  return (
    <div className={styles.container}>
      <nav>
        <img src={logo} alt="Logo" />
      </nav>
      <section>
        <div>
          <img src={illustration} alt="Illustration" />
        </div>
        <div>
          <h1>
            Build The Community <br />
            Your Fans Will Love
          </h1>
          <p>
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion. Register
          </p>
          <button>Register</button>
        </div>
      </section>
      <footer>
        <div>
          <img src={facebook} alt="Facebook" />
        </div>
        <div>
          <img src={twitter} alt="Twitter" />
        </div>
        <div>
          <img src={instagram} alt="Instagram" />
        </div>
      </footer>
    </div>
  );
};

export default App;
