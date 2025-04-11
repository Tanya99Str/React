import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
// import {UsersComponent} from "./components/users-component/UsersComponent.tsx";
// import {ProductsComponent} from "./components/products-component/ProductsComponent.tsx";
// import {PostsComponent} from "./components/posts-component/PostsComponent.tsx";
// import App from "./App.tsx";
import {routes} from "./router/routes.tsx";
// import {routes} from "./router/routes.tsx";

// createRoot(document.getElementById('root')!)
//     .render(<RouterProvider router={routes}/>)

// createRoot(document.getElementById('root')!)
//     .render(<BrowserRouter>
//         <Routes>
//             <Route path={'/'} element={<App/>}>
//                 <Route path={'users'} element={<UsersComponent/>}/>
//                 <Route path={'posts'} element={<PostsComponent/>}/>
//                 <Route path={'comments'} element={<PostsComponent/>}/>
//                 <Route path={'products'} element={<ProductsComponent/>}/>
//
//             </Route>
//         </Routes>
//     </BrowserRouter>)

createRoot(document.getElementById('root')!)
    .render(<RouterProvider router={routes}/>)
