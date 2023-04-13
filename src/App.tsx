import styles from "./App.module.scss";

import logo from "./assets/logo.svg";
import illustration from "./assets/illustration-mockups.svg";

const App = () => {
  return (
    <div className={styles.container}>
      <nav>
        <img src={logo} alt="Logo" />
      </nav>
      <section>
        <img src={illustration} alt="Illustration" />
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
      <footer></footer>
    </div>
  );
};

export default App;
