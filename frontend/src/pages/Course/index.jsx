import Lesson from './components/Lesson';
import Task from './components/Task';
import './styles.css';

const Course = () => {
    return (
        <div className="course-page-container">
            <Lesson/>
            <Task/>
        </div>
    );
}

export default Course;