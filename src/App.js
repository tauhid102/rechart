
import './App.css';
import Area from './Component/Area-Chart/Area';
import Chart from './Component/Chart/Chart';

function App() {
  return (
    <div className="App">
      <p className="bg-yellow-200 text-">This is text</p>
      <p class="line-through ...">The quick brown fox ...</p>
      <Chart></Chart>
      <Area></Area>
    </div>
  );
}

export default App;
