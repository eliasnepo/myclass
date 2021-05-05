import React, { useEffect, useState } from 'react';
import CustomButton from '../../core/components/CustomButton/CustomButton';
import CourseCard from './components/CourseCard/CourseCard';
import ProfileCard from './components/ProfileCard/ProfileCard';
import { makePrivateRequest } from '../../core/utils/request.js'
import styles from './Home.module.css';
import { BASE_URL, logout } from '../../core/utils/auth';

export default function Home() {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        makePrivateRequest({method: 'GET', url: `${BASE_URL}/courses`})
        .then(response => {
            setCourses(response.data)
        })
    }, [])

    return(
        <div className={styles.pageContainer}>
            <div className={styles.headersContainer}>
                <h1>HOME</h1>
                <button className={styles.logoutButton} onClick={() => logout()}>SAIR</button>
            </div>
            <div className={styles.content}>
                <div className={styles.coursesContainer}>
                    {courses?.map((course) => (
                        <CourseCard 
                        courseTitle={course.name}
                        courseDescription={course.description}
                        key={course.id}
                        />
                    ))}
                </div>

                <div className={styles.profileContainer}>
                    <ProfileCard 
                    studentName="Elias Nepomuceno"
                    institutionName="Universidade Federal de Goiás (UFG)"
                    courseCount="4"
                    />
                </div>
            </div>
        </div>
    );
}