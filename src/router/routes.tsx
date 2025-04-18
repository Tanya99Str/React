import {createBrowserRouter} from "react-router-dom";
// import App from "../App.tsx";
// import {UsersComponent} from "../components/users-component/UsersComponent.tsx";
// import {PostsComponentLesson3} from "../components/posts-component-lesson3/PostsComponentLesson3.tsx";
// import {CommentsComponentLesson3} from "../components/comments-component-lesson3/CommentsComponentLesson3.tsx";
// import {
//     UsersJsonplaceholderComponent
// } from "../components/users-jsonplaceholder-component/UsersJsonplaceholderComponent.tsx";
// import {UsersDummyjsonComponent} from "../components/users-dummyjson-component/UsersDummyjsonComponent.tsx";
// import {
//     PostsJsonplaceholderComponent
// } from "../components/posts-jsonplaceholder-component/PostsJsonplaceholderComponent.tsx";
// import {PostsComponent} from "../components/posts-component/PostsComponent.tsx";
// import {CommentsComponent} from "../components/comments-component/CommentsComponent.tsx";
// import {
//     CommentsJsonplaceholderComponent
// } from "../components/comments-jsonplaceholder-component/CommentsJsonplaceholderComponent.tsx";
import {MainLayout} from "../layouts/MainLayout.tsx";
import {UsersPage} from "../pages/users-page/UsersPage.tsx";
import {PostsPage} from "../pages/posts-page/PostsPage.tsx";
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
// export const routes = createBrowserRouter([
//     {
//         path: "/", element: <App/>, children: [
//             {
//                 path: 'users', element: <UsersComponent/>, children: [
//                     {path: 'jsonplaceholder', element: <UsersJsonplaceholderComponent/>},
//                     {path: 'dummyjson', element: <UsersDummyjsonComponent/>}
//                 ]
//             },
//             {
//                 path: 'posts', element: <PostsComponentLesson3/>, children: [
//                     {path: 'jsonplaceholder', element: <PostsJsonplaceholderComponent/>},
//                     {path: 'dummyjson', element: <PostsComponent/>}
//                 ]
//             },
//             {
//                 path: 'comments', element: <CommentsComponentLesson3/>, children: [
//                     {path: 'jsonplaceholder', element: <CommentsJsonplaceholderComponent/>},
//                     {path: 'dummyjson', element: <CommentsComponent/>}
//                 ]
//             }
//         ]
//     }
// ]);

// task #tntlwuxFxI5
export const routes  = createBrowserRouter([
    {path: '/', element: <MainLayout/>, children: [
            {path: '/users', element: <UsersPage/>},
            {path: '/posts', element: <PostsPage/>}
        ]}
]);
