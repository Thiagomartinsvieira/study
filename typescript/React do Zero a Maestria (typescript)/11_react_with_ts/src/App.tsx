
import './App.css'

function App() {

  // 1 - variables
  const name: string = 'Thiago';
  const age: number = 23;
  const isWorking: boolean = true;

  return (
    <div className="app">
      <h1>TypeScript with React</h1>
      <h2>Name: {name}</h2>
      <h2>Age: {age}</h2>
      <div>
        {isWorking ? (
          <p>Is Working!</p>
        ) : (
          <p>Is not working</p>
        )}
      </div>
    </div>
  );
}

export default App;
