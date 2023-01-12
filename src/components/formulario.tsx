import React from 'react';
import styles from './formulario.module.css'

function FormularioSignIn() {
    return (
    <div>
        <form className={styles.formulario}>
            <label htmlFor="username">Username or email address</label>
            <input type="text" id="username" name="username"/>
            <div className={styles.relative}>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password"/>
                <a href=" " className={styles.forgotPassword}>Forgot password?</a>
            </div>
            <input type="submit" id={styles.signInButton} name="signin" value={"Sign in"}/>
        </form>
    </div>
);
}

export default FormularioSignIn;