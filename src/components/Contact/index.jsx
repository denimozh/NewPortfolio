import React from 'react'
import styles from './style.module.scss'

const index = () => {
  return (
    <div className={styles.container}>
        <div className={styles.form}>
            <div className={styles.text}>
                <p>Liked my stuff? Hit me up!</p>
            </div>
            <div className={styles.bubble}>
                <p>Get in touch</p>
            </div>
        </div>
        <div className={styles.contact}>
            <p>denimozh@gmail.com</p>
            <p>GithubIcon</p>
            <p>LinkedinIcon</p>
        </div>
    </div>
  )
}

export default index