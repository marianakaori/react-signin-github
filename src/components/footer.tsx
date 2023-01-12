import React from 'react';
import styles from './footer.module.css'

function FooterSignIn() {
    return (
    <footer>
        <ul className={styles.links}>
            <li><a href=" ">Terms</a></li>
            <li><a href=" ">Privacy</a></li>
            <li><a href=" ">Security</a></li>
            <li className={styles.contact}><a href=" ">Contact GitHub</a></li>
        </ul>
        <p className={styles.description}>not real, for study purposes only</p>
    </footer>
);
}

export default FooterSignIn;