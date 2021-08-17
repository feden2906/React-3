export default function User ({id, name, username, email}) {
    return (
        <div>
            <h2>{id}. {name}</h2>
            <p>username: {username}</p>
            <p>email: {email}</p>
        </div>
    );
};