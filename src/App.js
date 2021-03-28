import './App.css';
import Timer from "./components/Timer";

function App() {
  return (
      <div>
        <Timer duration="45" title="Pomodoro" />
        <Timer duration="5" title="courte pause" />
        <Timer duration="10" title="longue pause" />
      </div>
  );
}

export default App;
