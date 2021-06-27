import './App.css';
import { useState } from 'react';
import Column from './Column';
import Button from './Buttons';

function App(props) {
  const [left, setLeft] = useState(props.left);
  const [center, setCenter] = useState(props.center);
  const [right, setRight] = useState(props.right);

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
  }

  const leftCol = left[0] === left[1] && left[2];
  const centerCol =  center[0] === center[1] && center[2]
  const rightCol = right[0] === right[1] && right[2]
  const win = leftCol && centerCol && rightCol;

  return (
    <div className="App">
      <div  className="valores">
        <Column columna={left}/>
        <Column columna={center}/>
        <Column columna={right}/>
      </div>
      <div className="Botonera">
          <Button col={left} handle={handleLtoC} dir={'right'} />
          <Button col={center} handle={handleCtoL} dir={'left'} />
          <Button col={center} handle={handleCtoR} dir={'right'}/>
          <Button col={right} handle={handleRtoC} dir={'left'}/>       
      </div>
      <div>
        {win ? <h1>You have won!</h1> : ''}
      </div>
    </div>
  );
}

export default App;
