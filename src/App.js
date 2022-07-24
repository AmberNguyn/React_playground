
import './App.css';
import Playground from './components/playground';

function App() {
  const data = ["anh", "nguyen"];


  return (
    <div className="App">
      <Playground item = {data}></Playground>

    </div>
  );
}

export default App;
