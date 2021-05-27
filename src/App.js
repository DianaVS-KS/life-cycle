import './App.css';
import logo from './assets/images/ciclo2.png';
import ChangingComponent from './components/LifeCycle';
import ErrorHandler from './components/LifeCycle/errorHandler';
import ComponentWillUnmount from './components/UnMount';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="cycle"/>
        <h1>Life Cycle</h1>
        <h2>By Diana Villalvazo</h2>
        <ErrorHandler>
          <ChangingComponent />  
        </ErrorHandler>  
        <ComponentWillUnmount />             
      </header>
    </div>
  );
}

export default App;
