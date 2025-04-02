import './App.css';
import {coursesAndDurationArray} from "../array.ts";
import {CourseModel} from "./models/CourseModel.ts";
import CoursesComponent from "./components/courses-component/CoursesComponent.tsx";
let coursesTitleArray: string[] = [
  'JavaScript Complex',
  'Java Complex',
  'Python Complex',
  'QA Complex',
  'Fullstack',
  'Frontend'
];

const App = () => {
  return (
      <>
        {/*lesson 1, task 1*/}
        {/*{*/}
        {/*  <ul>*/}
        {/*    {*/}
        {/*      coursesTitleArray.map((value, index) => <li key={index}>{value}</li>)*/}
        {/*    }*/}
        {/*  </ul>*/}
        {/*}*/}

        {/*lesson 1, task 2*/}
        <CoursesComponent/>










        </>
  )
}


export default App;
