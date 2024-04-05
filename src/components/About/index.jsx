"use client"
import React, {useEffect, useRef} from 'react'
import styles from './style.module.scss'
import { SiLinkedin } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import MagneticComponent from '../MagneticComponent';
import { useScroll, motion, useTransform } from 'framer-motion'

export default function About({value}){
  const element = useRef(null);
  const path = useRef(null);
  let progress = 0;
  let time = Math.PI / 2;
  let reqId = null;
  let x = 0.5;

  const { scrollYProgress } = useScroll({
    target: element,
    offset:['start 0.9', 'start 0.25']
  })

  useEffect( () => {
    setPath(progress);
  }, [])

  const setPath = (progress) => {
    const { innerWidth } = window;
    const width = innerWidth;
    path.current.setAttributeNS("", "d", `M0 50 Q${width * x} ${50 + progress}, ${width} 50`)
  }

  const manageMouseEnter = () => {
    if(reqId){
      window.cancelAnimationFrame(reqId);
      resetAnimation();
    }
  }

  const manageMouseMove = (e) => {
    const { movementY, clientX } = e;
    const { left, width } = path.current.getBoundingClientRect();
    x = (clientX - left) / width;
    progress += movementY;
    setPath(progress)
  }

  const manageMouseLeave = () => {
    animateOut();
  }

  const lerp = (x, y, a) => x * (1 - a) + y * a

  const animateOut = () => {
    const newProgress = progress * Math.sin(time);
    time += 0.2;
    setPath(newProgress);
    progress = lerp(progress, 0, 0.01);
    if(Math.abs(progress) > 0.75){
      reqId = window.requestAnimationFrame(animateOut);
    } else {
      resetAnimation();
    }
  }

  const resetAnimation = () => {
    time = Math.PI / 2;
    progress = 0;
  }

  const words = value.split(" ");
  return(
    <div className={styles.outer}>
      <div className={styles.line}>
        <div onMouseEnter={manageMouseEnter} onMouseMove={manageMouseMove} onMouseLeave={manageMouseLeave} className={styles.box}></div>
          <svg>
            <path ref={path}></path>
          </svg>
      </div>
      
      <div className={styles.mainContainer}>
        <div className={styles.icon1}>
          <MagneticComponent>
            <a href='https://www.linkedin.com/in/deni-mozh-4066bb26a/'><SiLinkedin/></a>
          </MagneticComponent>
        </div>
        <div className={styles.container}>
          <a><p className={styles.paragraph} ref={element} style={{opacity: scrollYProgress}}>
            {words.map( (word ,i) => {
              const start = i / words.length;
              const end = start + (1 / words.length);
              return <Word key={i} range={[start, end]} progress={scrollYProgress}>{word}</Word>
          })}</p></a>
        </div>
        <div className={styles.icon2}>
          <MagneticComponent>
            <a href='https://github.com/denimozh'><SiGithub /></a>
          </MagneticComponent>
        </div>
      </div>
      
    </div>
  )
}

const Word = ({children, range, progress}) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className={styles.word}>
      <span className={styles.shadow}>{children}</span>
      <motion.span style={{opacity}}>{children}</motion.span>
    </span>
  )
}