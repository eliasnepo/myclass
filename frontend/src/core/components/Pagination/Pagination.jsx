import React from 'react';
import styles from './Pagination.module.css';
import {ReactComponent as ArrowIcon} from '../../assets/images/arrow.svg'

export default function Pagination() {
    return(
        <div className={styles.paginationContainer}>
            <ArrowIcon className={styles.paginationPrevious}/>
            <div className={`${styles.paginationItem} ${styles.active}`}>1</div>
            <div className={styles.paginationItem}>2</div>
            <div className={styles.paginationItem}>3</div>
            <ArrowIcon className={`${styles.paginationNext} ${styles.active}`}/>
        </div>
    );
}