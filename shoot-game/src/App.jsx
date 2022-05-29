import { useEffect, useState } from 'react';
import './App.css'

function App() {

  const [colorArr, setColorArr] = useState([]);
  const [num, setNum] = useState("");
  const [colours, setColours] = useState([]);

  const colorpick = () => {
    var colors = [];
    let tem = [];
    for (let i = 0; i < 5; i++) {
      let tem1 = Math.floor(Math.random() * 255 + 1);
      let tem2 = Math.floor(Math.random() * 255 + 1);
      let tem3 = Math.floor(Math.random() * 255 + 1);

      let str = tem1 + "," + tem2 + "," + tem3;
      tem.push(str);
      if (colors.length < 5) colors.push(tem);
    }
    setColorArr(tem);
    // console.log(tem);
  };

  useEffect(() => {
    colorpick();
  }, []);

  const handleChangecolor = () => {
    let temp = colours;
  if (num > colorArr.length) return alert(`Please select the value from 1 to ${colorArr.length}`);
    let colorfilter;
    colorfilter = colorArr.filter((e) => {
      if(e == colorArr[num - 1]) {
        temp.push(e);
      }
      if(e != colorArr[num - 1]) return e;
    });
    setColorArr(colorfilter);
    setColours(temp);
  };

  return (
    <div className="App">
      <div className='box'>
        {colours.map((e,i) => (
          <div key={i} style={{ backgroundColor: `rgb(${e})` }} ></div>
        ))}
      </div>
      <div className='circles'>
      {colorArr.map((e, i) => (
          <div key={i} style={{ backgroundColor: `rgb(${e})` }}></div>
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