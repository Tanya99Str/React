import {useEffect, useState} from "react";
import {loadCommentsJsonplaceholder} from "../../services/api.service.ts";
import {
    CommentJsonplaceholderComponent
} from "../comment-jsonplaceholder-component/CommentJsonplaceholderComponent.tsx";
import {CommentModel} from "../../models/CommentModel.ts";

export const CommentsJsonplaceholderComponent = () => {

    const [comments, setComments] = useState<CommentModel[]>([]);
    useEffect(() => {
        loadCommentsJsonplaceholder().then(value => setComments(value));
    }, []);

    return (
        <>
            {
                comments.map(comment =>
                <div>
                    <CommentJsonplaceholderComponent comment={comment} key={comment.id}/>
                </div>)
            }
        </>
    );
};