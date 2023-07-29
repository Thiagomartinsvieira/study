import { useState } from "react";


const ListRender = () => {
    const [list] = useState(['Thiago', 'Lucas', 'Sisleide', 'Maria']);

    const [users] = useState([
        { id: 1, name: 'Thiago', age: 23 },
        { id: 13, name: 'Sisleide', age: 60 },
        { id: 1267, name: 'Lucas', age: 19 },
    ]);

    return (
        <div>
            <ul>
                {list.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} - {user.age}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListRender