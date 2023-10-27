export default function PairOnly(props) {
    const pairNumber = props.number % 2 === 0

    return (
        <div>
            {pairNumber ? <h1>{props.number}</h1> : null}
        </div>
    )


    // if (props.number % 2 === 0) {
    //     return <h1>{props.number}</h1>
    // } else {
    //     return null
    // }
}