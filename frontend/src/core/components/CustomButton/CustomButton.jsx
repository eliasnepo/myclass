import React from 'react';
import styles from './CustomButton.module.css';

export default function CustomButton({buttonText}) {
    return(
        <button className={styles.button}>{buttonText}</button>
    );
}