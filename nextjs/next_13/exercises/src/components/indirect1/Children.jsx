export function Children(props) {
    console.log(props.function)
    return (
        <div>
            <h1>Children #01</h1>
            <button onClick={props.function('Helo Father')}>Talk to dad #01</button>
            <button onClick={() => props.function('Helo Father', 'Uhuuu', 10)}>Talk to dad</button>
        </div>
    )
}