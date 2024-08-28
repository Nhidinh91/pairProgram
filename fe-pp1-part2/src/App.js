import './App.css';
import logo from './images/logo.svg';
import BoxColor from './BoxColor';

function App() {
  return (
    <>
      <div className="reac-practice">
        <h3>React Practice</h3>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div className="box-color">
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
      </div>
    </>
  );
}

export default App;
