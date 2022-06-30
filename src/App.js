import './App.css';
import Button from './components/Buttons.js';

function App() {
  return (
    <div className="App">
      <div>
        <Button size="large" color="blue">BUTTON</Button>
        <Button size="medium"  color="blue">BUTTON</Button>
        <Button size="small"  color="blue">BUTTON</Button>
      </div>
      <div>
        <Button size="large" color="gray">BUTTON</Button>
        <Button size="medium" color="gray">BUTTON</Button>
        <Button size="small" color="gray">BUTTON</Button>
      </div>
      <div>
        <Button size="large" color="pink">BUTTON</Button>
        <Button size="medium" color="pink">BUTTON</Button>
        <Button size="small" color="pink">BUTTON</Button>
      </div>
      <div>
        <Button size="large" color="blue" outline>BUTTON</Button>
        <Button size="medium" color="gray" outline>BUTTON</Button>
        <Button size="small" color="pink" outline>BUTTON</Button>
      </div>
      <div>
        <Button size="large" color="blue" fullWidth>BUTTON</Button>
        <Button size="large" color="gray" fullWidth>BUTTON</Button>
        <Button size="large" color="pink" fullWidth>BUTTON</Button>
      </div>
    </div>
  );
}

export default App;
