import './PostsJsonplaceholderComponent.css';
import {PostModel} from "../../models/PostModel.ts";
import {useEffect, useState} from "react";
import {loadPostsJsonPlaceholder} from "../../services/api.service.ts";
import {PostJsonplaceholderComponent} from "../post-jsonplaceholder-component/PostJsonplaceholderComponent.tsx";

export const PostsJsonplaceholderComponent = () => {
    const [posts, setProducts] = useState<PostModel[]>([]);
    useEffect(() => {
        loadPostsJsonPlaceholder().then(values => setProducts(values));
    }, []);

    return (
        <>
            {
                posts.map(post =>
                    <div>
                        <PostJsonplaceholderComponent post={post} key={post.id}/>
                    </div>
                )
            }
        </>
    );
};