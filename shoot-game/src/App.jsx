import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [randomcolor, setRandomcolor] = useState([]);
  const [num, setNum] = useState("");
  const [selectedcolor, setSelectedcolor] = useState([]);

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
    console.log(tem, 'color');
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
  };

  return (
    <div className="App">
      <div className="box">
        {selectedcolor.map((e, i) => (
          <div key={i} style={{ backgroundColor: `rgb(${e})` }}></div>
        ))}
      </div>
      <div className="circles">
        {randomcolor.map((e, i) => (
          <div key={i} style={{ backgroundColor: `rgb(${e})` }}></div>
        ))}
      </div>
      <div className="inp">
        <input
          type="number"
          value={num}
          onChange={(e) => setNum(e.target.value)}
        />
        <br />
        <button onClick={handleChangecolor}>Shoot</button>
      </div>
    </div>
  );
}

export default App;
