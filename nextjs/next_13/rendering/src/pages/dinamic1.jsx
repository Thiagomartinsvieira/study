export function getServerSideProps() {
    console.log('[server] generating props for the component...')
    return {
        props: {
            number: Math.random()
        }
    }
}

const dinamic1 = (props) => {
    return (
        <div>
            <h1>Dinamic #01</h1>
            <h2>{props.number}</h2>
        </div>
    )
}

export default dinamic1