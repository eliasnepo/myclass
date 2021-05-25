import React from 'react';
import styles from './CourseCard.module.css'

export default function CourseCard(props) {
    return(
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <h4 className={styles.courseTitle}>{props.courseTitle}</h4>
            </div>
            <div className={styles.imgContainer}>
                <img src={props.imgUri} alt={props.courseTitle} className={styles.imgTag}/>
            </div>
        </div>
    );
}