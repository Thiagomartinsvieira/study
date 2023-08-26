
import './App.css'
// 6 - Desestruturando props
import Destructuring, { Category } from './components/Destructuring';

// 4 - component import
import FirstComponent from './components/FirstComponent';

// 5 - Destructuring props
import SecondComponent from './components/SecondComponent';

// 6 - useState
import State from './components/State';

// 9 - Type
type textOrNull = string | null

type fixed = 'this' | 'or' | 'that'



function App() {

  // 1 - variables
  const name: string = 'Thiago';
  const age: number = 23;
  const isWorking: boolean = true;

  // 2 - functions
  const userGreeting = (name: string): string => {
    return `Olá, ${name}!`;
  }

  // 9 - type
  const myText: textOrNull = 'Tem algum text aqui'
  let mySecondText: textOrNull = null

  // mySecondText = 'ops!'

  const testingFixed: fixed = 'that'

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
        <FirstComponent  />
        <SecondComponent name='Second' />
        <Destructuring title='Fist Post' 
        content='content' 
        commentsQty={10}  
        tags={['ts', 'js']}
        category={Category.TS}
        />
      </div>
      <State />
      { myText &&
        <p>Tem texto na variavel</p>
      }
      {mySecondText && 
        <p>Tem texto na variavel</p>
      }
    </div>
  );
}

export default App;
