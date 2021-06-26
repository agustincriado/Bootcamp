import './App.css';
import { useState} from 'react';


function App(props) {
  const [left, setLeft] = useState(props.left);
  const [center, setCenter] = useState(props.center);
  const [right, setRight] = useState(props.right);
  console.log(left.length);
  console.log(center.length);
  console.log(right.length);
  const handleLtoC = () => {
    let pop = left.pop();
    setCenter(center.concat(pop));
  }
  
  const handleCtoL = () => {
    let popToLeft = center.pop();
    setLeft(left.concat(popToLeft))
  }
  const handleCtoR = () => {
    let popToRight = center.pop();
    setRight(right.concat(popToRight))
  }
  const handleRtoC = () => {
    let popToLeft = right.pop();
    setCenter(center.concat(popToLeft));
    console.log(center);
  }
  const leftCol = left[0] === left[1] && left[2];
  const centerCol =  center[0] === center[1] && center[2]
  const rightCol = right[0] === right[1] && right[2]
  const win = leftCol && centerCol && rightCol;
  return (
    <div className="App">
      <div  className="valores">
        <div>
          {left.map((value) => <h6 className={value}>{value}</h6>)}
          </div>
        <div>
          {center.map((value) => <h5 className={value}>{value}</h5>)}
          </div>
        <div>
          {right.map((value) => <h4 className={value}>{value}</h4>)}
          </div>
      </div>
      <div className="Botonera">
        <div>
          { left.length > 0 ? <button className="left" onClick={handleLtoC}>Move to right</button> : <button disabled>Move to right</button>}
        </div>
        <div>
          { center.length > 0 ? <button className="center" onClick={handleCtoL}>Move to left</button> : <button disabled> Move to left</button>}
          { center.length > 0 ? <button className="center" onClick={handleCtoR}>Move to right</button> : <button disabled>Move to right</button>}
        </div>
        <div>
          { right.length > 0 ? <button className="right" onClick={handleRtoC}>Move to left</button> : <button disabled>Move to left</button>}
        </div>
      </div>
      <div>
        {win ? <h1>You have won!</h1> : ''}
      </div>
    </div>
  );
}

export default App;
