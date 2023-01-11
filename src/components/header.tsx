import React from 'react';
import logoGithub from '../assets/logo-github.svg'
import styles from './header.module.css'

function HeaderSignIn() {
    return (
    <header> 
        <img className={styles.logo} src={logoGithub} alt="logo" />
        <h1 className={styles.titulo}>Sign in to GitHub</h1>
    </header>
);
}

export default HeaderSignIn;