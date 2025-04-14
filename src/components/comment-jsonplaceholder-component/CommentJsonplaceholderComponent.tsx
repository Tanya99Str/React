import {FC} from "react";
import {CommentModel} from "../../models/CommentModel.ts";

type PropType = {
    comment: CommentModel;
}

export const CommentJsonplaceholderComponent: FC<PropType> = ({comment}) => {
    return (
        <>
            <h2>{comment.name}</h2>
            <p>{comment.body}</p>
            <p><b>Email: </b>{comment.email}</p>
        </>
    );
};