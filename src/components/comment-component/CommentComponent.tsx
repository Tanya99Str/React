import {CommentModel} from "../../models/CommentModel.ts";
import {FC} from "react";
import './CommentComponent.css';

type PropType = {
    comment: CommentModel;
}

export const CommentComponent: FC<PropType> = ({comment}) => {
    return (
        <>
            {
                <div className={'one-elem'}>
                    <p><b>Name:</b> {comment.name}</p>
                    <p><b>Body:</b> {comment.body}</p>
                    <p><b>Email:</b> {comment.email}</p>
                </div>
            }
        </>
    );
};