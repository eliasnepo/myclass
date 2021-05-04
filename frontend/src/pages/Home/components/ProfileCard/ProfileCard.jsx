import React from 'react';
import styles from './ProfileCard.module.css'

export default function ProfileCard(props) {
    return(
        <div className={styles.container}>
            <img src="https://via.placeholder.com/245.png" alt="Imagem de perfil"/>
            <div className={styles.studentInfo}>
                <p className={`${styles.studentName} ${styles.multilineTruncation}`}>
                    Aluno: {props.studentName}
                </p>
                <p className={`${styles.institutionName} ${styles.multilineTruncation}`}>
                    Instituição: {props.institutionName}
                </p>
                <p className={`${styles.courseCount} ${styles.multilineTruncation}`}>
                    Cursos matriculados: {props.courseCount}
                </p>
            </div>
        </div>
    );
}