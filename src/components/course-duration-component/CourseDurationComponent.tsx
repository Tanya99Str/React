import {FC} from "react";
import {CourseModel} from "../../models/CourseModel.ts";

type PropsType = {
    course?: CourseModel;
}

 const CourseDurationComponent: FC<PropsType> = ({course}) => {
    return (
        <li>{course?.title}, {course?.monthDuration}</li>
    );
}

export default CourseDurationComponent;
