import { useEffect, useState } from "react";

const thems = ["dark", "light"];

const App = () => {
  const [currentTheme, setCurrentTheme] = useState("light");

  useEffect(() => {
    document.documentElement.className = "";
    document.documentElement.classList.add(`theme-${currentTheme}`);
  }, []);

  const changeThemeHandler = (event: React.MouseEvent) => {
    event.preventDefault();

    setCurrentTheme((prevTheme) => {
      const curTheme = prevTheme === "dark" ? "light" : "dark";
      document.documentElement.className = "";
      document.documentElement.classList.add(`theme-${curTheme}`);
      return curTheme;
    });
  };

  return <button onClick={changeThemeHandler}>Change theme</button>;
};
export default App;
