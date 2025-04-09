import {PostModel} from "../../models/PostModel.ts";
import {useEffect, useState} from "react";
import {loadPosts} from "../../services/api.service.ts";
import {PostComponent} from "../post-component/PostComponent.tsx";

export const PostsComponent = () => {
    const [posts, setPosts] = useState<PostModel[]>([]);
    useEffect(() => {
        loadPosts().then(value => setPosts(value));
    }, []);
    return (
        <>
            {
                posts.map(post => <PostComponent post={post} key={post.id} />)
            }
        </>
    );
};