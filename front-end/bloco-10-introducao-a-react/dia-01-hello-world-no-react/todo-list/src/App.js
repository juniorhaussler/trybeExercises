import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  const task = ['java', 'HTML', 'CSS', 'React'];
  return (
    <div>
      <ul>
        {task.map((el) => Task(el))}
      </ul>
      
    </div>
  );
}

export default App;
