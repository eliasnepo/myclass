import React, { useEffect, useState } from 'react';
import CourseCard from './components/CourseCard/CourseCard';
import ProfileCard from './components/ProfileCard/ProfileCard';
import { makePrivateRequest } from '../../core/utils/request.js'
import styles from './Home.module.css';
import { BASE_URL } from '../../core/utils/auth';
import Pagination from '../../core/components/Pagination/Pagination';
import { Link } from 'react-router-dom';
import ButtonLogout from '../../core/components/ButtonLogout';

export default function Home() {
    const [courses, setCourses] = useState([])
    const [userInfo, setUserInfo] = useState({})
    const [totalPages, setTotalPages] = useState(1)
    const [activePage, setActivePage] = useState(0)

    useEffect(() => {
        const params = {
            page: activePage
        }

        makePrivateRequest({method: 'GET', url: `${BASE_URL}/courses`, params})
        .then(response => {
            setCourses(response.data.content)
            setTotalPages(response.data.totalPages)
        })
    }, [activePage])

    useEffect(() => {
        makePrivateRequest({method: 'GET', url: `${BASE_URL}/user`})
        .then(response => {
            setUserInfo(response.data)
        })
    }, [])

    return(
        <div className={styles.pageContainer}>
            <div className={styles.headersContainer}>
                <h1 className={styles.headerTitle}>Bem vindo(a), {userInfo.name}</h1>
                <div className={styles.logoutButton}>
                    <Link to="/enrollment">
                        <button className={styles.buttonStylish}>MATRICULAR</button>
                    </Link>
                    <ButtonLogout />
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.coursesAndPagination}>
                    <div className={styles.coursesContainer}>
                        {courses?.map((course) => (
                            <Link to={`course/${course.id}`} key={course.id}>
                                <CourseCard 
                                courseTitle={course.name}
                                imgUri={course.imgUri}
                                />
                            </Link>
                        ))}
                    </div>
                        <Pagination 
                        totalPages={totalPages} 
                        activePage={activePage}
                        onChange={page => (setActivePage(page))}
                        />
                </div>
                <div className={styles.middleContent}/>
                <div className={styles.profileContainer}>
                    <ProfileCard 
                    studentName={userInfo.name}
                    institutionName={userInfo.university}
                    courseCount={userInfo.courseCount}
                    />
                </div>
            </div>
        </div>
    );
}