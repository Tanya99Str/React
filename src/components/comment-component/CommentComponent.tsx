import {FC} from "react";
import './CommentComponent.css';
import {CommentDummyjsonModel} from "../../models/CommentDummyjsonModel.ts";

type PropType = {
    comment: CommentDummyjsonModel;
}

export const CommentComponent: FC<PropType> = ({comment}) => {
    return (
        <>
            {
                <div style={{borderBottom: '1px solid black'}}>
                    <p><b>Body:</b> {comment.body}</p>
                    <p><b>Likes:</b> {comment.likes}</p>
                    <p><b>User:</b> {comment.user.fullName}, {comment.user.username}</p>
                </div>
            }
        </>
    );
};