import React, { useState } from 'react';
import Site from './containers/Site/Site';

function App() {
  const [darkMode, setDarkMode] = useState("");

  return (
    <div className={`${darkMode}`}>
      <Site handleDarkMode={(active) => active ? setDarkMode("dark") : setDarkMode("")}/>
    </div>
  );
}

export default App;
