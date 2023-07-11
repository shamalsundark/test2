import "./App.css";

import React, { useState } from "react";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleThemeSwitch = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const themeStyle = {
    backgroundColor: isDarkTheme ? "#333" : "#fff",
    color: isDarkTheme ? "#fff" : "#333",
  };

  return (
    <div className="App" style={themeStyle}>
      <h1>click down</h1>
      <button onClick={handleThemeSwitch}>click</button>
    </div>
  );
}

export default App;
