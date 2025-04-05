import {FC} from "react";
import {ICourse} from "../../models/ICourse.ts";
import './OneCourseComponent.css';

type PropsType = {
    course?: ICourse;
}

const OneCourseComponent: FC<PropsType> = ({course}) => {
    return (
        <div className={'container'}>
            <h2>{course?.title}</h2>
            <p><b>Hour duration</b> {course?.hourDuration} hours</p>
            <p><b>Month duration</b> {course?.monthDuration} hours</p>
            <ul>
                {
                    course?.modules.map((module, index) => <li key={index}>{module}</li>)
                }
            </ul>
        </div>
    )
}

export default OneCourseComponent;
