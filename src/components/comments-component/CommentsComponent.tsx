import {useEffect, useState} from "react";
import {loadComments} from "../../services/api.service.ts";
import {CommentComponent} from "../comment-component/CommentComponent.tsx";
import {CommentDummyjsonModel} from "../../models/CommentDummyjsonModel.ts";

export const CommentsComponent = () => {
    const [comments, setComment] = useState<CommentDummyjsonModel[]>();
    useEffect(() => {
        loadComments().then(value => setComment(value));
    }, []);
    return (
        <>
            {
                comments?.map(comment => <CommentComponent comment={comment} key={comment.id} />)
            }
        </>
    );

};