import { useEffect, useState } from 'react';
import './App.css'

function App() {

  const [colorArr, setColorArr] = useState([]);
  const [num, setNum] = useState("");
  const [ballonColor, setBallonColor] = useState([]);

  const colorpick = () => {
    var colors = [];
    for (let i = 0; i < 5; i++) {
      let tem = [];
      let tem1 = Math.floor(Math.random() * 255 + 1);
      let tem2 = Math.floor(Math.random() * 255 + 1);
      let tem3 = Math.floor(Math.random() * 255 + 1);

      let str = tem1 + "," + tem2 + "," + tem3;
      tem.push(str);
      if (colors.length < 5) colors.push(tem);
    }
    setColorArr(colors);
  };

  useEffect(() => {
    colorpick();
  }, []);

  const handleChangecolor = () => {
    if (num > 5) return alert("Please select the value from 1 to 5");
    setBallonColor(colorArr[num - 1]);
    let colorfilter;
    colorfilter = colorArr.filter((e) => e != colorArr[num - 1]);
    setColorArr(colorfilter);
  };

  return (
    <div className="App">
      <div className='box' style={{ backgroundColor: `rgb(${ballonColor[0]})` }}>
      </div>
      <div className='circles'>
      {colorArr.map((e, i) => (
          <div key={i} style={{ backgroundColor: `rgb(${colorArr[i]})` }}></div>
        ))}
      </div>
      <div className='inp'>
        <input type="number" value={num}
          onChange={(e) => setNum(e.target.value)}/>
        <br />
        <button onClick={handleChangecolor}>Shoot</button>
      </div>
    </div>
  )
}

export default App