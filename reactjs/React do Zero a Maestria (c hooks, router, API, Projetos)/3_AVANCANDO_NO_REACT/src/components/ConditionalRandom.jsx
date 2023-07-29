import { useState } from "react"


const ConditionalRandom = () => {
    const [x] = useState(false);

    const [name, setName] = useState('João')

    return (
        <div>
            <h1>Isso Será exibido ?</h1>
            {x && <p>Agora x é true</p>}
            {!x && <p>Agora x é falso</p>}
            <h1>If Ternario</h1>
            {name === 'João' ? (
                <div>
                    <p>O nome é João</p>
                </div>
            ) : (
                <div>
                    <p>O nome não foi encontrado</p>
                </div>
            )}
            <button onClick={() => setName('João')}>Click here!</button>
        </div>
    );
}

export default ConditionalRandom