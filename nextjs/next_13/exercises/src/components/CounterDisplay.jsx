export default function CounterDisplay(props) {
    return (
        <div style={{
            height: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '50px',
            borderRadius: '25px',
            backgroundColor: '#222',
            color: '#fff',
            fontSize: '2rem',
            margin: '20px'
        }}>
            {props.number}
        </div>
    )
}