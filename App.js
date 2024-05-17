import React from "react";

const App = () => {
  const handleButtonClick = () => {
    console.log("button pressed");
  };

  return (
    <section>
      <button className="click" onClick={handleButtonClick}>
        Click Me
      </button>
    </section>
  );
};

export default App;
