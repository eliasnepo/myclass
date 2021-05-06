import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../../core/utils/auth';
import { makePrivateRequest } from '../../core/utils/request';
import CourseCard from '../Home/components/CourseCard/CourseCard.jsx'
import {ReactComponent as ArrowIcon} from '../../core/assets/images/arrow.svg'
import styles from './Enrollment.module.css';

export default function Enrollment() {
    const [availableCourses, setAvailableCourses] = useState([])

    useEffect(() => {
        makePrivateRequest({method: 'GET', url: `${BASE_URL}/enroll`})
        .then(response => {
            setAvailableCourses(response.data)
        })
    }, [])
    
    return(
        <div className={styles.pageContainer}>
            <div className={styles.headersContainer}>
                <div className={styles.pageTitleContainer}>
                    <Link to="/" className="link-icon-goback">
                        <ArrowIcon className="custom-arrow-previous"/>
                    </Link>
                    <h1>MATRÍCULAS</h1>
                </div>
            </div>
            <div className={styles.coursesContainer}>
                {availableCourses.map((course) => (
                    <div className={styles.courseEnrollContainer}>
                        <CourseCard 
                        courseTitle={course.name}
                        imgUri={course.imgUri}
                        />
                        <button 
                        className={styles.enrollButton} 
                        onClick={() => {
                            const data = {
                                course: {
                                    id: course.id
                                }
                            }
                            makePrivateRequest({method: 'POST', url: `${BASE_URL}/enroll`, data})
                            .then(() => {
                                window.location.reload()
                            })
                        }}>
                            Matricular-se
                        </button>
                    </div>
                ))}
            </div>
        </div>

    );
}