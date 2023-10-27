import { Children } from "./Children";

export function Father(props) {

    function SpeakMe(param1, param2, param3) {
        console.log(param1, param2, param3)
    }

    return (
        <div>
            <Children function={SpeakMe} />
        </div>
    )
}