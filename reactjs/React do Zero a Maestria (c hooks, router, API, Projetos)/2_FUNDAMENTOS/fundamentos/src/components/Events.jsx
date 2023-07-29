const Events = () => {

    const handleMyEvent = (e) => {
        alert(e);
        alert("Ativou o evento!")
    };

    const renderSomething = (x) => {
        if (x) {
            return <h1>Renderizo isso</h1>;
        } else {
            return <h1>Renderizo outra coisa</h1>
        }
    }

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
                {renderSomething(true)}
                {renderSomething(false)}
            </div>
        </div>
    )
}

export default Events;