import React from 'react';
import CourseCard from './components/CourseCard/CourseCard';
import ProfileCard from './components/ProfileCard/ProfileCard';
import styles from './Home.module.css';

export default function Home() {
    return(
        <div>
            <h1>HOME</h1>
            <div className={styles.content}>
                <div className={styles.coursesContainer}>
                    <CourseCard 
                    courseTitle="Cálculo 3A" 
                    courseDescription="AKI TERIA UMA DESCRIÇÃO SUPER INTERESSANTE SOBRE O CURSO QUE PODE OU NÃO SER MUITO GRANDE"
                    />
                    <CourseCard 
                    courseTitle="Cálculo 3A" 
                    courseDescription="AKI TERIA UMA DESCRIÇÃO SUPER INTERESSANTE SOBRE O CURSO QUE PODE OU NÃO SER MUITO GRANDE"
                    />
                    <CourseCard 
                    courseTitle="Cálculo 3A" 
                    courseDescription="AKI TERIA UMA DESCRIÇÃO SUPER INTERESSANTE SOBRE O CURSO QUE PODE OU NÃO SER MUITO GRANDE"
                    />
                    <CourseCard 
                    courseTitle="Cálculo 3A" 
                    courseDescription="AKI TERIA UMA DESCRIÇÃO SUPER INTERESSANTE SOBRE O CURSO QUE PODE OU NÃO SER MUITO GRANDE"
                    />
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