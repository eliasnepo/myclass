import React from 'react';
import styles from './ProfileCard.module.css'

export default function ProfileCard(props) {
    return(
        <div className={styles.container}>
            <div className={styles.avatarImage}>
                <img src="https://avatars.githubusercontent.com/u/60260242?v=4" width="245" alt="Imagem de perfil" />
            </div>
            {/* <img src="https://via.placeholder.com/245.png" alt="Imagem de perfil"/> */}
            <div className={styles.studentInfo}>
                <p className={`${styles.studentName} ${styles.multilineTruncation}`}>
                    Aluno: {props.studentName}
                </p>
                <p className={`${styles.institutionName} ${styles.multilineTruncation} ${styles.marginTop7}`}>
                    Instituição: {props.institutionName}
                </p>
                <p className={`${styles.courseCount} ${styles.multilineTruncation} ${styles.marginTop7}`}>
                    Cursos matriculados: {props.courseCount}
                </p>
            </div>
        </div>
    );
}