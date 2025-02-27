import "./App.css";
import Body from "./Components/Body";
import svg from "./Components/381599_error_icon.png";
import cross from "./Components/icons8-cross-30.png";
import { use, useState } from "react";

function App() {
  
  const [animation, setAnimation] = useState(false);
  let msg = "Please Provide Value.";

  return (
    <>
      {animation && (
        <div className="animation-body">
          <div className="animation">
            <img className="svg-logo" src={svg}></img>
            <p>{msg}</p>
            <img className="cross-svg" src={cross} />
          </div>
          <div className="slider"></div>
        </div>
      ) }

      <Body setAnimation={setAnimation}></Body>
    </>
  );
}

export default App;
