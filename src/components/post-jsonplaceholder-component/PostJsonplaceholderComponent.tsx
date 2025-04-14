import './PostJsonplaceholderComponent.css';
import {FC} from "react";
import {PostModel} from "../../models/PostModel.ts";

type PropType = {
    post: PostModel;
}

export const PostJsonplaceholderComponent: FC<PropType> = ({post}) => {
    return (
        <>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </>
    );
};