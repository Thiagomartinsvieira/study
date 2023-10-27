export default function List(props) {
    return (
        <ul>
            <div>
                <h1>list</h1>
                <ul style={{
                    listStyle: "none",
                }}>
                    {props.children}
                </ul>
            </div>
        </ul>
    )
}