export default function Style(props) {

    return (
        <div>
            <h1 style={{
                backgroundColor: props.number >= 0 ? '#2d2' : '#d22', color: props.color,
                textAlign: props.center ? 'center' : 'left'
            }}>
                Text #01
            </h1>
            <h2 className={props.number >= 0 ? 'blue' : 'red'}>Text #02</h2>
        </div>
    )
}