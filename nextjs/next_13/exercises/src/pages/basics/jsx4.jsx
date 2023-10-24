export default function jsx4() {
    const subtitle = 'i am in JavaScript!'
    const excerpt = <h3>{3 * 3}</h3>


    return (
        <div>
            <h1>Integration JS and JSX</h1>
            <h2>{subtitle}</h2>
            {excerpt}
            <h4>{Math.max(13, 39)}</h4>
            <h5>{between(9, 1, 20)}</h5>
        </div>
    )
}

function between(value, min, max) {
    if (value >= min && value <= max) {
        return 'Yes'
    } else {
        return 'No'
    }
}