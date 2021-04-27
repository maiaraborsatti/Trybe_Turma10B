import './App.css';
import './components/list'
import list from './components/list';


const task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
  list.map((iten) => task(iten))
  );
}

export default App;
