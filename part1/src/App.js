import logo from './logo.svg';
import './App.css';

const Mensaje = (props) => {
  return <h1 style={{ color: props.color}}>Saludos {props.name}!</h1>
}

const Avatar = ({src, id}) => {
  return <img src={src} id={id} alt='Imagen de nigator' />
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
      <br/>
      <Avatar src='https://i.pinimg.com/originals/cb/fa/1c/cbfa1c6c8708fda0e3fb41875bcbdd7e.jpg' id="Avatar"/>
    </div>
  );
}

export default App;
