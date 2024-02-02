import React from 'react'
import styles from './style.module.css'
import { useRef } from 'react';
import {motion} from "framer-motion"
import { slideUp } from './anim';

const index = () => {
  const plane = useRef(null);
  const maxRotate = 45;

  const manageMouseMove = (e) => {
    const x = e.clientX / window.innerWidth
    const y = e.clientY / window.innerHeight
    const perspective = window.innerWidth * 4;
    const rotateX = maxRotate * x - maxRotate / 2; 
    const rotateY = (maxRotate * y - maxRotate / 2) * -1;
    plane.current.style.transform = "perspective(${perspective}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg)"
  }
  return (
    <motion.div variants={slideUp} className={styles.container} initial="inital" exit="exit" onMouseMove={(e) => {manageMouseMove(e)}}>
            <div ref={plane} className={styles.body}>
                <Text3d primary={"Hi"} secondary={"A"}/>
                <Text3d primary={"Denis"} secondary={"FrontEnd"}/>
                <Text3d primary={"Mozhayko"} secondary={"Developer"}/>
            </div>
    </motion.div>
  )
}

function Text3d({primary, secondary}) {

    return (
        <div className={styles.textContainer}>
            <p className={styles.primary}>{primary}</p>
            <p className={styles.secondary}>{secondary}</p>
        </div>
    )
  }

export default index