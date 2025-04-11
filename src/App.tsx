import './App.css';
import {NavMain} from "./components/nav-main/NavMain.tsx";
import {Outlet} from "react-router-dom";
// import CoursesComponent from "./components/courses-component/CoursesComponent.tsx";
// import TodosComponent from "./components/todos-component/TodosComponent.tsx";
// import FamilyComponent from "./components/family-component/FamilyComponent.tsx";
// import CoursesDurationComponent from "./components/courses-duration-component/CoursesDurationComponent.tsx";
// import {PostsComponent} from "./components/posts-component/PostsComponent.tsx";
// import {CommentsComponent} from "./components/comments-component/CommentsComponent.tsx";
// import {QuotesComponent} from "./components/quotes-component/QuotesComponent.tsx";
// import {ProductsComponent} from "./components/products-component/ProductsComponent.tsx";
// let coursesTitleArray: string[] = [
//   'JavaScript Complex',
//   'Java Complex',
//   'Python Complex',
//   'QA Complex',
//   'Fullstack',
//   'Frontend'
// ];

const App = () => {
    return (
      <>
        {/*lesson 1, task 1*/}
        {/*{*/}
        {/*  <ul className={'list'}>*/}
        {/*    {*/}
        {/*      coursesTitleArray.map((value, index) => <li key={index}>{value}</li>)*/}
        {/*    }*/}
        {/*  </ul>*/}
        {/*}*/}

        {/*lesson 1, task 2*/}
        {/*<CoursesDurationComponent/>*/}

        {/*lesson 1, task 3*/}
        {/*  <FamilyComponent/>*/}

          {/*lesson 1, task 4                   - НА ПЕРЕВІРКУ*/}
          {/*<CoursesComponent/>*/}


          {/*lesson 2, task 1*/}
          {/*<TodosComponent/>*/}

          {/*lesson 2, task 2*/}
          {/*<PostsComponent/>*/}

          {/*lesson 2, task 3*/}
          {/*<CommentsComponent/>*/}

          {/*lesson 2, task 4*/}
          {/*<QuotesComponent/>*/}

          {/*lesson 2, task 5                   - НА ПЕРЕВІРКУ*/}
          {/*<ProductsComponent/>*/}

          {/*lesson 3, task #chszHaH9*/}
          {/*<NavMain/>*/}
          {/*<Outlet/>*/}

          {/*lesson 3, task #qL0b5uh*/}
          <NavMain/>
          <Outlet/>



        </>
  )
}


export default App;
