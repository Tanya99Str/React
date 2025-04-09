import {CommentModel} from "../../models/CommentModel.ts";
import {useEffect, useState} from "react";
import {loadComments} from "../../services/api.service.ts";
import {CommentComponent} from "../comment-component/CommentComponent.tsx";

export const CommentsComponent = () => {
    const [comments, setComment] = useState<CommentModel[]>();
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