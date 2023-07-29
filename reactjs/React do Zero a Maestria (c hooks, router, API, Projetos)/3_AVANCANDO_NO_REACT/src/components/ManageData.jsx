import { useState } from "react";


const ManageData = () => {
    let someDate = 10;

    console.log(someDate)

    const [number, setNumber] = useState(15);

    return (
        <div>
            <div>
                <p>Valor: {someDate}</p>
                <button onClick={() => (someDate = 15)}>Change Variable</button>
            </div>
            <div>
                <p>Valor: {number}</p>
                <button onClick={() => setNumber(number +1)}>Mudar o state</button>
            </div>
        </div>
    )
}

export default ManageData