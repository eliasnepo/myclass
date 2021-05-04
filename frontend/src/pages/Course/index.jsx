import { useEffect, useState } from 'react';
import { BASE_URL } from '../../core/utils/auth';
import { makePrivateRequest } from '../../core/utils/request';
import Lesson from './components/Lesson';
import Task from './components/Task';
import './styles.css';

const Course = () => {
    const [listOfTaskOrLesson, setListOfTaskOrLesson] = useState({});

    useEffect(() => {
        makePrivateRequest({ url: `${BASE_URL}/courses/1`, method: 'GET' })
        .then(response => {
            setListOfTaskOrLesson(response.data)
        })
        .finally(() => {
        })
    }, []);
    
    console.log(listOfTaskOrLesson)
    
    return (
        <div className="course-page-container">
            {listOfTaskOrLesson.lessons?.map(lesson => (
                lesson.status === "TASK" ? <Task key={lesson.id} title={lesson.title}/> : <Lesson key={lesson.id} title={lesson.title} subtitle={lesson.subtitle}/>
            )
            )}
        </div>
    );
}

export default Course;