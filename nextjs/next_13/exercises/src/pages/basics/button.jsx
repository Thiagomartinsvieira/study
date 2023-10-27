function action1() {
    console.log('action1')
}


export default function button() {
    function action2() {
        console.log('action2')
    }

    function action5(e) {
        console.log(e)
    }

    return (
        <div>

            <button onClick={action1}>Click Here #01</button>
            <button onClick={action2}>Click Here #02</button>
            <button onClick={function () {
                console.log('action3')
            }}>Click Here #03</button>
            <button onClick={() => console.log('action4')}>Click Here #04</button>
            <button onClick={action5}>Click Here #5</button>
            <button onClick={e => action5(e)}>Click Here #5 v2</button>
            <div>
                <input type="text" onChange={e => console.log(e.target.value)} />
            </div>
        </div>
    )
}