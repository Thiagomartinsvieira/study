import Children from "./Children"

export default function Father(props) {
    return (
        <div>
            <h1>Family {props.family} </h1>
            <Children name='Lucas' family={props.family} />
            <Children name='Thiago' family={props.family} />
            <Children name='Sisleide' family={props.family} />
            <Children {...props} name='Ana' />
        </div>
    )
}