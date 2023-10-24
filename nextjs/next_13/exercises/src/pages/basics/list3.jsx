function listGenerator(finish = 10) {
    const list = []
    for (let i = 1; i <= finish; i++) {
        list.push(<span>{i}, </span>)
    }
    return list
}

export default function list() {
    return (
        <div>
            <div>
                {listGenerator(20)}
            </div>
            <div>
                {listGenerator(3)}
            </div>
        </div>
    )
}