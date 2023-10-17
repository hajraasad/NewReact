import './App.css';
import KeyMaps from "./KeyMaps";
import FlavorForm from "./FlavorForm";
import Liftstate from "./Liftstate";
import Liftstate2 from "./Liftstate2";

function App() {
  this.state={
    name:"ayesha"
  }
  const numbers = [1, 2, 3, 4, 5];
  return (
    <div className="App">
      <KeyMaps num={numbers}/>
      <FlavorForm/>
      <Liftstate namee={this.state.name}/>
      <Liftstate2 namee={this.state.name}/>
    </div>
  );
}
export default App;