
const Container = ({ children, myValue }) => {
    return (
        <div>
            <h2>This is a Titlo from Container</h2>
            {children}
            <p>O valor é: {myValue}</p>
        </div>
    )
}

export default Container