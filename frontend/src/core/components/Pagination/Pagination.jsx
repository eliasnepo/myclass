import React from 'react';
import styles from './Pagination.module.css';
import {ReactComponent as ArrowIcon} from '../../assets/images/arrow.svg'

export default function Pagination({totalPages, activePage, onChange}) {
    const items = Array.from(Array(totalPages).keys())

    return(
        <div className={styles.paginationContainer}>
            <ArrowIcon className={styles.paginationPrevious}/>
            {items.map(item => (
                <div 
                className={`${styles.paginationItem} ${item === activePage ? styles.active : ""}`} 
                key={item}
                onClick={() => onChange(item)}>
                    {item + 1}
                </div>
            ))}
            <ArrowIcon className={`${styles.paginationNext} ${styles.active}`}/>
        </div>
    );
}