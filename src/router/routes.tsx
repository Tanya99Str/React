import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import {UsersComponent} from "../components/users-component/UsersComponent.tsx";
import {PostsComponentLesson3} from "../components/posts-component-lesson3/PostsComponentLesson3.tsx";
import {CommentsComponentLesson3} from "../components/comments-component-lesson3/CommentsComponentLesson3.tsx";
// import {UsersComponent} from "../components/users-component/UsersComponent.tsx";
// import {PostsComponent} from "../components/posts-component/PostsComponent.tsx";
// import {ProductsComponent} from "../components/products-component/ProductsComponent.tsx";

// task #chszHaH9
// export const routes = createBrowserRouter([
//     {path: '/', element: <App/>, children: [
//             {path: 'users', element: <UsersComponent/>},
//             {path: 'posts', element: <PostsComponent/>},
//             {path: 'comments', element: <PostsComponent/>},
//             {path: 'products', element: <ProductsComponent/>},
//         ]}
// ]);

// task #qL0b5uh
export const routes = createBrowserRouter([
    {
        path: "/", element: <App/>, children: [
            {
                path: 'users', element: <UsersComponent/>, children: [
                    {path: 'jsonplaceholder', element: <div>users/jsonplaceholder</div>},
                    {path: 'dummyjson', element: <div>users/dummyjson</div>}
                ]
            },
            {
                path: 'posts', element: <PostsComponentLesson3/>, children: [
                    {path: 'jsonplaceholder', element: <div>posts/jsonplaceholder</div>},
                    {path: 'dummyjson', element: <div>posts/dummyjson</div>}
                ]
            },
            {
                path: 'comments', element: <CommentsComponentLesson3/>, children: [
                    {path: 'jsonplaceholder', element: <div>comments/jsonplaceholder</div>}
                ]
            }
        ]
    }
]);

