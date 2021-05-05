import React from 'react';
import styles from './Pagination.module.css';
import {ReactComponent as ArrowIcon} from '../../assets/images/arrow.svg'

export default function Pagination({totalPages, activePage, onChange}) {
    const items = Array.from(Array(totalPages).keys())
    const previousClass = totalPages > 0 && activePage > 0 ? styles.pageActive : styles.pageInactive
    const nextClass = (activePage + 1) < totalPages ? styles.pageActive : styles.pageInactive
    const isPreviousActive = activePage === 0 ? false : true
    const isNextActive = (activePage + 1) === totalPages ? false : true

    return(
        <div className={styles.paginationContainer}>
            <ArrowIcon 
            className={`${styles.paginationPrevious} 
            ${previousClass}`}
            onClick={ isPreviousActive ? () => onChange(activePage - 1) : () => ("")}/>
            {items.map(item => (
                <div 
                className={`${styles.paginationItem} ${item === activePage ? styles.active : ""}`} 
                key={item}
                onClick={() => onChange(item)}>
                    {item + 1}
                </div>
            ))}
            <ArrowIcon 
            className={`${styles.paginationNext} ${nextClass}`}
            onClick={isNextActive ? () => onChange(activePage + 1) : () => ("")}/>
        </div>
    );
}