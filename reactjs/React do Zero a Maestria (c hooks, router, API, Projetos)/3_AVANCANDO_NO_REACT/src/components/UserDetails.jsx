

const UserDetails = ({ name, age, job }) => {
    return (
        <div>
            <h1>user details</h1>
            <ul>
                <li>{name}</li>
                <li>{age}</li>
                <li>{job}</li>
            </ul>
            {age >= 18 ? (
                <p>Pode Tirar carteira de habilitação</p>
            ) : (
                <p>Não pode tirar carteira</p>
            )}
        </div>
    )
}

export default UserDetails
