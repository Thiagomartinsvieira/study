export default function Title(props) {
    console.log(props)


    return props.small ? (
        <>
            <p>{props.main}</p>
            <p>{props.description}</p>
        </>
    ) : (
        <>
            <h1>{props.main}</h1>
            <h2>{props.description}</h2>
        </>
    )

}

