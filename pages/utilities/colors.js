import React from 'react'
import styles from '../../styles/Colors.module.css'

const colors = () => {
    return (
        <>
            <h1 className="text-center">NBN Colors</h1>
            <p className="text-center">Use NBN'css custom Alerts in your PROJECT</p>
            <div className="container">
                <div className={styles.bodys}>
                    <div className={styles.blood}><p className={styles.text}>NBN-blood</p></div>
                    <div className={styles.moon}><p className={styles.text}>NBN-moon</p></div>
                    <div className={styles.tree}><p className={styles.text}>NBN-tree</p></div>
                    <div className={styles.sky}><p className={styles.text}>NBN-sky</p></div>
                    <div className={styles.sun}><p className={styles.text}>NBN-sun</p></div>
                    <div className={styles.space}><p className={styles.text}>NBN-space</p></div>
                </div>
            </div>
        </>
    )
}

export default colors
