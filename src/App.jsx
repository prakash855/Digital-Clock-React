import React, { useState } from "react";
const App = () => {
  let time = new Date().toLocaleTimeString();
  const [ctime, setctime] = useState(time);
  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setctime(time);
  };
  setInterval(UpdateTime, 1000);
  return (
    <React.Fragment>
      <h1>{ctime}</h1>
    </React.Fragment>
  );
};
export default App;
