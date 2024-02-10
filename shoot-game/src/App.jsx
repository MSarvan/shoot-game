import { useEffect, useState } from "react";
import "./App.css";
import balloons1 from "./balloons1.png";

function App() {
  const [randomcolor, setRandomcolor] = useState([]);
  const [num, setNum] = useState("");
  const [selectedcolor, setSelectedcolor] = useState([]);
  const [showInstruction, setShowInsruction] = useState(false);

  const colorpicker = () => {
    var colors = [];
    let tem = [];
    for (let i = 0; i < 5; i++) {
      let red = Math.floor(Math.random() * 255 + 1);
      let blue = Math.floor(Math.random() * 255 + 1);
      let green = Math.floor(Math.random() * 255 + 1);

      let str = red + "," + blue + "," + green;
      tem.push(str);
      if (colors.length < 5) colors.push(tem);
    }
    setRandomcolor(tem);
    // console.log(tem);
  };

  useEffect(() => {
    colorpicker();
  }, []);

  const handleChangecolor = () => {
    let temp = selectedcolor;
    if (num > randomcolor.length)
      return alert(`Please select the value from 1 to ${randomcolor.length}`);
    let colorfilter;
    colorfilter = randomcolor.filter((e) => {
      if (e == randomcolor[num - 1]) {
        temp.push(e);
      }
      if (e != randomcolor[num - 1]) return e;
    });
    setRandomcolor(colorfilter);
    setSelectedcolor(temp);
    setNum("");
  };

  const handleReset = () => {
    window.location.reload();
  };

  const handleReshoot = (color) => {
    // console.log(color, "selected balloon color");
    setRandomcolor((prev) => [...prev, color]);
    setSelectedcolor(prev => prev.filter(e => e !== color));
  };

  return (
    <div className="App">
      <div className="instruction-textbox">
        <div className="title">
          {" "}
          <span style={{ width: "75px", display: "flex" }}>
            <img src={balloons1} alt="" style={{ width: "100%" }} />
          </span>{" "}
          <span>Balloon Shooter</span>
        </div>
        <div
          className="instruction-btn"
          onClick={() => {
            setShowInsruction(true);
          }}
        >
          Click here to see instructions
        </div>
      </div>
      <div className="box">
        {selectedcolor.map((e, i) => (
          <div
            key={i}
            style={{ backgroundColor: `rgb(${e})` }}
            onClick={() => {
              handleReshoot(e);
            }}
          ></div>
        ))}
      </div>
      <div className="circles">
        {randomcolor.map((e, i) => (
          <div key={i} style={{ backgroundColor: `rgb(${e})` }}></div>
        ))}
      </div>
      <div className="inp">
        {randomcolor?.length > 1 && (
          <>
            <div>Enter a number from 1 to {randomcolor?.length} </div>
            <br />
          </>
        )}
        {randomcolor?.length === 1 && (
          <>
            <div>Enter 1 to shoot the balloon</div>
            <br />
          </>
        )}
        <input
          type="number"
          value={num}
          onChange={(e) => setNum(e.target.value)}
        />
        <br />
        <button className="shoot-btn" onClick={handleChangecolor}>
          Shoot
        </button>
        <button className="reset-btn" onClick={handleReset}>
          Reset
        </button>
      </div>

      {showInstruction && (
        <div className="overlay">
          <div className="instruction-container">
            <div className="instruction-text">Instructions</div>
            <div>
              1. Enter a number ranging 1 to 5, as it represent the balloons
              from top to bottom.
            </div>
            <div>
              2. Click on the Shoot button to shoot the balloon into the box.
            </div>
            <div>
              3. If you want a balloon in the box to be restored, click on that
              particular balloon in the box.
            </div>
            <div>4. Click on the Reset button to restart the game.</div>
            <br />
            <div className="close-btn-container">
              <div
                className="close-btn"
                onClick={() => {
                  setShowInsruction(false);
                }}
              >
                Close
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
