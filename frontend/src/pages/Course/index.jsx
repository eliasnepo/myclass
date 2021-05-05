import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import ButtonLogout from '../../core/components/ButtonLogout';
import { BASE_URL, isAllowedByRole } from '../../core/utils/auth';
import { makePrivateRequest } from '../../core/utils/request';
import Lesson from './components/Lesson';
import Task from './components/Task';
import {ReactComponent as ArrowIcon} from '../../core/assets/images/arrow.svg'
import './styles.css';

const Course = () => {
    const { courseId } = useParams();
    const [listOfTaskOrLesson, setListOfTaskOrLesson] = useState({});

    useEffect(() => {
        makePrivateRequest({ url: `${BASE_URL}/courses/${courseId}`, method: 'GET' })
        .then(response => {
            setListOfTaskOrLesson(response.data)
        })
        .finally(() => {
        })
    }, [courseId]);
    
    console.log(listOfTaskOrLesson)
    
    return (
        <div className="container-course-page">
            <div className="content-above">
                <div className="content-above-left">
                    <Link to="/" className="link-icon-goback">
                        <ArrowIcon className="custom-arrow-previous"/>
                    </Link>
                    <h1 className="content-above-title">{listOfTaskOrLesson.name}</h1>
                </div>
                <div className="content-above-course-actions">
                    {isAllowedByRole(['ROLE_INSTRUCTOR', 'ROLE_ADMIN']) && (
                        <Link to={`${courseId}/deliveries`}>
                            <button className="button-delivery-by-course">ENTREGAS</button>
                        </Link>
                    )}
                    {isAllowedByRole(['ROLE_STUDENT']) && (
                        <Link to={`/user/deliveries`}>
                            <button className="button-delivery-by-course">MINHAS ENTREGAS</button>
                        </Link>
                    )}
                    {isAllowedByRole(['ROLE_INSTRUCTOR']) && (
                        <Link to={`/course/${courseId}/insert`}>
                            <button className="button-delivery-by-course">INSERIR AULA</button>
                        </Link>
                    )}
                    <ButtonLogout/>
                </div>
            </div>
            <div className="course-page-container">
                {listOfTaskOrLesson.lessons?.map(lesson => (
                    lesson.status === "TASK" ? <Task key={lesson.id} title={lesson.title} subtitle={lesson.subtitle}/> : <Lesson key={lesson.id} title={lesson.title} subtitle={lesson.subtitle}/>
                )
                )}
            </div>
        </div>
    );
}

export default Course;