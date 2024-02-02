"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import Header from "../components/Header"
import Preloader from "../components/Preloader"
import Cursor from "@/components/Cursor/Cursor";
import { AnimatePresence } from "framer-motion";

export default function Home() {

  const [isLoading, setIsloading] = useState(true);
  useEffect( () => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        const locomotiveScroll = new LocomotiveScroll();

        setTimeout( () => {
          setIsloading(false);
        }, 2000)
      }
    )()
  }, [])  

  return (
    <main className={styles.main}>
      <AnimatePresence mode="wait">
        {
          isLoading && <Preloader/>
        }
      </AnimatePresence>
      <Header/>
      <Cursor/>
      <Hero/>
      <Projects />
    </main>
  );
}
