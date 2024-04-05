"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import styles from './style.module.scss'
import { SiTypescript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { useRef } from 'react';
import { SiJavascript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { slideUp } from './animation';
import MagneticComponent from '../MagneticComponent';
import { SiDocker } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";

const Hero = () => {

    const firstText = useRef(null);
    const secondText = useRef(null);
    const slider = useRef(null);
    const logo = useRef(null);
    let xPercent = 0;
    let direction = -0.1;

    useEffect( () => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.to(slider.current, {
        
            scrollTrigger: {
                trigger: document.documentElement,
                start: 0,
                end: window.innerHeight,
                scrub: 0.25,
                onUpdate: e => direction = e.direction * -0.1
            },
            x: "-200px",
            
        }, [])
        requestAnimationFrame(animation);
    }, [])

    const animation = () => {
        if(xPercent <= -100){
            xPercent = 0;
        }
        if(xPercent > 0){
            xPercent = -100;
        }
        gsap.set(firstText.current, {xPercent: xPercent})
        gsap.set(secondText.current, {xPercent: xPercent})
        xPercent += 0.25 * direction;
        requestAnimationFrame(animation);
    }

  return (
    <motion.main variants={slideUp} initial="initial" animate="enter" className={styles.hero}>
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <img alt="" src="/images/me.png" className={styles.img} id="img"/>
                <div className={styles.bgGrad}></div>
            </div>

            <div className={styles.sliderContainer}>
                <div ref={slider} className={styles.slider}>
                    <p ref={firstText} className={styles.sliderText}>FrontEnd Developer -</p>
                    <p ref={secondText} className={styles.sliderText}>FrontEnd Developer -</p>
                </div>
            </div>

            <div className={styles.iconContainer}>
                <div className={styles.icon1}>
                    <MagneticComponent>
                        <a><SiReact id="logo" ref={logo} /></a>
                    </MagneticComponent>
                </div>
                <div className={styles.icon2}>
                    <MagneticComponent>
                        <a><TbBrandNextjs id="logo"/></a>
                    </MagneticComponent>
                </div>
                <div className={styles.icon3}>
                    <MagneticComponent>
                        <a><SiJavascript id="logo"/></a>
                    </MagneticComponent>
                </div>
                <div className={styles.icon4}>
                    <MagneticComponent>
                        <a><SiTypescript  id="logo"/></a>
                    </MagneticComponent>
                </div>
                <div className={styles.icon5}>
                    <MagneticComponent>
                        <a><SiDocker  id="logo"/></a>
                    </MagneticComponent>
                </div>
                <div className={styles.icon6}>
                    <MagneticComponent>
                        <a><SiTailwindcss  id="logo"/></a>
                    </MagneticComponent>
                </div>
            </div>
        </div>
    </motion.main>
  )
}

export default Hero