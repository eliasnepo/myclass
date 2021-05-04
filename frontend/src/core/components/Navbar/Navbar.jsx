import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

export default function Navbar() {
    return(
        <nav className={styles.navContainer}>
            <Link to="/" className={styles.navTitle}>
                <h4>My Class</h4>
            </Link>
        </nav>
    );
}
