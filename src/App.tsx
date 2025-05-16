import './App.css';
import {useFetch} from "./hooks/useFetch.tsx";
import {PostModel} from "./models/PostModel.ts";

const App = () => {

    const posts = useFetch<PostModel[]>('https://jsonplaceholder.typicode.com/posts', [])

    return (
      <>
         <ul>
             {
                 posts.map((post) =>
                     <li>{post.title}</li>
                 )
             }
         </ul>
      </>
  )
}

export default App;
