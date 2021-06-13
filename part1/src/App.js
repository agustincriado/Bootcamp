import logo from './logo.svg';
import './App.css';

const Mensaje = (props) => {
  return <h1 style={{ color: props.color}}>Saludos {props.name}!</h1>
}

const Avatar = (src , size) => {
  <img src={src} style={{size: size}} alt="Avatar" />
}


function App() {
  const message = <h1>"Hola mundo!"</h1>;
  return (
    <div className="App">
      {message}
      <br/>
      <img src={logo} className="App-logo" alt="logo" />
      <br/>
      <Mensaje color="red" name="Agustin"/>
      <Avatar src={props.src}/>
    </div>
  );
}

export default App;
