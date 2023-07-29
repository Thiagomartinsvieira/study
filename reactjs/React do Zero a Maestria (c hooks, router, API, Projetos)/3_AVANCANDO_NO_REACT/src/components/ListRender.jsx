import React, { useState } from 'react'

const ListRender = () => {
    const [list] = useState(['Thiago', 'Lucas', 'Sisleide', 'Maria']);

    return (
        <ul>
            {list.map((item) => (
                <li>{item}</li>
            ))}
        </ul>
    )
}

export default ListRender