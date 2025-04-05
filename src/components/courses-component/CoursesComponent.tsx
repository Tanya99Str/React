import {coursesArray} from "../../../array.ts";
import OneCourseComponent from "../one-course-component/OneCourseComponent.tsx";
import {ICourse} from "../../models/ICourse.ts";
import './CoursesComponent.css';

const CoursesComponent = () => {
    return(
        <div className={'container'}>

                {
                    coursesArray.map((couse: ICourse, index: number) => {
                        return <div className={'one-elem'}><OneCourseComponent course={couse} key={index} /></div>
                    })
                }
        </div>
    )
}

export default CoursesComponent;