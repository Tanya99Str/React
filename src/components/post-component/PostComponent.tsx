import {FC} from "react";
import {PostModel} from "../../models/PostModel.ts";
import './PostComponent.css';

type PropType = {
    post: PostModel;
}

export const PostComponent: FC<PropType> = ({post}) => {
    return (
        <>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </>
    );
};