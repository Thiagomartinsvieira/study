
import './App.css'

function App() {

  // 1 - variables
  const name: string = 'Thiago';
  const age: number = 23;
  const isWorking: boolean = true;

  // 2 - functions
  const userGreeting = (name: string): string => {
    return `Olá, ${name}!`;
  }

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
        <h3>{userGreeting(name)}</h3>
      </div>
    </div>
  );
}

export default App;
