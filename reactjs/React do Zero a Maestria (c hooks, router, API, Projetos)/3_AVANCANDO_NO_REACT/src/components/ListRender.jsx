import { useState } from "react";


const ListRender = () => {
    const [list] = useState(['Thiago', 'Lucas', 'Sisleide', 'Maria']);

    const [users, setUsers] = useState([
        { id: 1, name: 'Thiago', age: 23 },
        { id: 2, name: 'Sisleide', age: 60 },
        { id: 3, name: 'Lucas', age: 19 },
    ]);

    const deleteRandomUser = () => {
        const randomNumber = Math.floor(Math.random() * 4);

        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id);

        });
    };

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
            <button onClick={deleteRandomUser}>Delete Random User</button>
        </div>
    );
};

export default ListRender