const Events = () => {

    const handleMyEvent = (e) => {
        alert(e);
        alert("clicou!")
    };

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui!</button>
            </div>
        </div>
    )
}

export default Events;