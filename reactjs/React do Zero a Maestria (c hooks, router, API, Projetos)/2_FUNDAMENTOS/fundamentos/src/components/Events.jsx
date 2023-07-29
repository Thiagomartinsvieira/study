const Events = () => {

    const handleMyEvent = (e) => {
        alert(e);
        alert("clicou!")
    };

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui!</button>
                <div>
                    <button onClick={() => alert("Clicou!")}>click here too!</button>
                    <button onClick={() => {
                        if (true) {
                            alert("Isso Não deveria existir")
                        }
                    }}>Clique Aqui Thiago</button>
                </div>
            </div>
        </div>
    )
}

export default Events;