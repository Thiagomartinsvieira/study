import './Game.css'

const Game = ({ verifyLetter }) => {
  return (
    <div className='game'>
      <p className='points'>
        <span>Score: 000</span>
      </p>
      <h1>guess the word: <span>Tip...</span></h1>
      <h3 className='tip'>

      </h3>
      <div className="wordContainer">
        <span className='letter'>A</span>
        <span className='blankSquare'></span>
      </div>
      <div className="letterContainer">
        <p>Tente adivinha uma letra da palavra:</p>
        <form action="">
          <input type="text" name='letter' maxLength='1' required />
          <button>Play</button>
        </form>
      </div>
      <div className="wrongLettersContainer">
        <p>Letras já ultilizadas:</p>
        <span>a,</span>
        <span>b,</span>
      </div>
    </div>
  )
}

export default Game