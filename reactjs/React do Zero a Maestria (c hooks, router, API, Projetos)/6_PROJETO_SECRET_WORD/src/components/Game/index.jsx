import './Game.css'

const Game = ({
  verifyLetter,
  pickedWord,
  pickedCategory,
  letters,
  guessedLetters,
  wordLetters,
  guesses,
  score,
}) => {
  return (
    <div className="game">
      <p className="points">
        <span>Score: {score}</span>
      </p>
      <h1>
        guess the word: <span>{pickedCategory}...</span>
      </h1>
      <h3 className="tip"></h3>
      <p>Voce ainda tem {guesses} tnentativa(s).</p>
      <div className="wordContainer">
        {letters.map((letter, i) =>
          guessedLetters.includes(letter) ? (
            <span key={i} className="letter">
              {letter}
            </span>
          ) : (
            <span key={i} className="blakSquare"></span>
          )
        )}
      </div>
      <div className="letterContainer">
        <p>Tente adivnhar uma letra da palavra:</p>
        <form>
          <input
            type="text"
            name="letter"
            maxLength="1"
            onChange={(e) => setLetter(e.target.value)}
            required
            value={letter}
            ref={letterInputRef}
          />
          <button>Play!</button>
        </form>
      </div>
      <div className="wrongLettersContainer">
        <p>Letras já utilizadas:</p>
        {wrongLetters.map((letter, i) => (
          <span key={i}>{letter}, </span>
        ))}
      </div>
    </div>
  )
}

export default Game
