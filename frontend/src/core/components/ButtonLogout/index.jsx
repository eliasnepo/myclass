import React from 'react';
import { logout } from '../../utils/auth';
import './styles.css';

export default function ButtonLogout() {
    const handleOnClickLogout = () => {
        logout();
    }

    return(
        <button className="button-logout-stylish" onClick={handleOnClickLogout}>SAIR</button>
    );
}