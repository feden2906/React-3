export default function Post ({userId, id, title, body}) {
    return (
        <div>
            <h4>{id}. {title}</h4>
            <p>user Id: {userId}</p>
            <p>Post: {body}</p>
        </div>
    );
}