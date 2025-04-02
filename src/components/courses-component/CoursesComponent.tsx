import {CourseModel} from "../../models/CourseModel.ts";
import {FC} from "react";
import {coursesAndDurationArray} from "../../../array.ts";
import CourseComponent from "../course-component/CourseComponent.tsx";

 const CoursesComponent= () => {
    return (
        <ul>
            {
                coursesAndDurationArray.map((course: CourseModel, index: number) => {
                    return <CourseComponent course={course} key={index}/>
                })
            }
        </ul>
    );
};

 export default CoursesComponent;
