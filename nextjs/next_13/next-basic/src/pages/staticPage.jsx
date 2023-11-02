export const getStaticProps = () => {
    return {
        props: {
            number: Math.random()
        }
    }
}

export default function staticPage(props) {
    return (
        <div>
            <span>Random: {props.number} </span>
        </div>
    )
}