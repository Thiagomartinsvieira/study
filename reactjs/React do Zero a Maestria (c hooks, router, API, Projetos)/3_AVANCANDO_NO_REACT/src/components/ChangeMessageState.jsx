

const ChangeMessageState = ({ handleMessage }) => {
    const messages = ['hi', 'hello', 'goodbye', 'how are you?']

    return (
        <div>
            <button onClick={() => handleMessage(messages[0])}>1</button>
            <button onClick={() => handleMessage(messages[1])}>2</button>
            <button onClick={() => handleMessage(messages[2])}>3</button>
        </div>
    )
}

export default ChangeMessageState