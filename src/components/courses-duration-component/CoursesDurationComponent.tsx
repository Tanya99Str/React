import {CourseModel} from "../../models/CourseModel.ts";
import {coursesAndDurationArray} from "../../../array.ts";
import CourseDurationComponent from "../course-duration-component/CourseDurationComponent.tsx";

 const CoursesDurationComponent= () => {
    return (
        <ul>
            {
                coursesAndDurationArray.map((course: CourseModel, index: number) => {
                    return <CourseDurationComponent course={course} key={index}/>
                })
            }
        </ul>
    );
};

 export default CoursesDurationComponent;
