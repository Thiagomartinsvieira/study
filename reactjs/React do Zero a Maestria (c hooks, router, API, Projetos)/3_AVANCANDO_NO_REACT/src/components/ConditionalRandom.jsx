import { useState } from "react"


const ConditionalRandom = () => {
    const [x] = useState(false);

  return (
    <div>
        <h1>Isso Será exibido ?</h1>
        {x && <p>Agora x é true</p>}
        {!x && <p>Agora x é falso</p>}
    </div>
  )
}

export default ConditionalRandom