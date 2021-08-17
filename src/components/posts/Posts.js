// import {getPosts} from "../serviсe/user.service";
import {getPosts} from "../serviсe/post.service";
import Post from "../post/Post";
import {useEffect, useState} from "react";
export default function Posts () {
    let [posts, setPosts] =useState([]);
    useEffect(() => {
        getPosts().then(value => setPosts([...value]));
    },[]);
    return (
        <div>
            {
                posts.map((postItem) => <Post key={postItem.id} {...postItem}/>)
            }
        </div>
    );
}