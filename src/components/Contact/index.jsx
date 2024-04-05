import React from 'react'
import styles from './style.module.scss'
import MagneticComponent from '../MagneticComponent';
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";

const Index = () => {
  return (
    <div>
        <hr></hr>
        <div className={styles.container}>
            <div >
                <div className={styles.form}>
                    <div className={styles.text}>
                        <p>Liked my stuff? Hit me up! 👋</p>
                    </div>
                </div>
                <hr/>
                <div className={styles.contact}>
                    <a href='https://github.com/denimozh'><SiGithub className={styles.icon}/></a>
                    <MagneticComponent><p className={styles.gmail}>denimozh@gmail.com</p></MagneticComponent>
                    <a href='https://www.linkedin.com/in/deni-mozh-4066bb26a/'><SiLinkedin className={styles.icon}/></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Index