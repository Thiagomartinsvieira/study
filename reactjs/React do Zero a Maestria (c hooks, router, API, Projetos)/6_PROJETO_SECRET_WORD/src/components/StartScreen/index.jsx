import './StartScreen.css'

const StartScreen = ({ startGame }) => {
  return (
    <div className='start'>
      <h1>Secret Word</h1>
      <p>click the button below to start playing</p>
      <button onClick={startGame}>Começar o jogo</button>
    </div>
  )
}

export default StartScreen