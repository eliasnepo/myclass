import React from 'react';
import styles from './CourseCard.module.css'

export default function CourseCard(props) {
    return(
        <div className={styles.container}>
            <h4 className={styles.courseTitle}>{props.courseTitle}</h4>
            <img src="https://via.placeholder.com/115.png" alt="Imagem do curso"/>
            <p className={styles.courseDescription}>{props.courseDescription}</p>
        </div>
    );
}