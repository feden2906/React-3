import {getComments} from "../serviсe/comment.service";
import Comment from "../comment/Comment";
import {useState, useEffect} from "react";

export default function Comments() {
    let [comments, setComments] =useState([]);
    useEffect(() => {
        getComments().then(value => setComments([...value]));
    },[]);
    return (
        <div>
            {
                comments.map((commentItem) => <Comment key={commentItem.id} {...commentItem}/>)
            }
        </div>
    );
}