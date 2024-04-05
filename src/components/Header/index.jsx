
import React from 'react'
import styles from './style.module.scss'
import MagneticComponent from '../MagneticComponent';


const Index = () => {
  return (
    <header>
        <nav className={styles.container}>
            <div className={styles.logo}>
                <p>denimozh.dev</p>
            </div>
            <div className={styles.links} >
                <MagneticComponent>
                    <a>About</a>
                </MagneticComponent>
                <MagneticComponent>
                    <a>Projects</a>
                </MagneticComponent>
                <MagneticComponent>
                    <a>Contact</a>
                </MagneticComponent>
            </div>
        </nav>
    </header>
  )
}

export default Index