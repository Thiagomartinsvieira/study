import { useState, useEffect } from "react";
import { mega } from "@/functions/mega";
import NumberDisplay from "@/components/NumberDisplay";

export default function megaSena() {
    const [numbers, setNumbers] = useState([]);
    const [qtde, setQtde] = useState(6);

    useEffect(() => {
        // Este efeito será executado apenas no lado do cliente.
        setNumbers(mega(qtde)); // Passar a quantidade desejada como argumento
    }, [qtde]); // Adicionar qtde como dependência para recalcular quando mudar

    function renderNumbers() {
        return numbers.map((number) => (
            <NumberDisplay key={number} number={number} />
        ));
    }

    return (
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <h1>Mega Sena</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {renderNumbers()}
            </div>
            <div>
                <input
                    type="number"
                    min={6}
                    max={20}
                    value={qtde}
                    onChange={(e) => setQtde(parseInt(e.target.value, 10))} // Converter para número
                />
                <button onClick={() => setNumbers(mega(qtde))}>Gerar Aposta</button>
            </div>
        </div>
    );
}
