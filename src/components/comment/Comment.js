export default function Comment({postId, id, name, email, body}) {
    return(
        <div>
            <h4>post Id: {postId}</h4>
            <p>id: {id}</p>
            <p>name: {name}</p>
            <p>email: {email}</p>
            <p>comment: {body}</p>
        </div>
    );
}