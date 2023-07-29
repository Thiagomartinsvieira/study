const Challenge = () => {
    const values = {
        A: 10,
        B: 20,
    };

    const soma = () => {
        alert(values.A + values.B)
    }

    return (
        <div>
            <h1>Values A = {values.A} + B = {values.B}</h1>
            <button onClick={soma}>Somar</button>
        </div>
    )
}

export default Challenge;

