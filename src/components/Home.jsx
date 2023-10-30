import React, { useRef } from 'react';
import { motion, animate } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { BsArrowRight, BsChevronDown } from 'react-icons/bs';
import me from '../assets/me2.png';

const Home = () => {

    const clientCount = useRef(null);
    const projectCount = useRef(null);

    const animations = {
        h1: {
            initial: {
                x: -100,
                opacity: 0
            },

            whileInView: {
                x: 0,
                opacity: 1
            }
        },

        button: {
            initial: {
                y: -100,
                opacity: 0
            },

            whileInView: {
                y: 0,
                opacity: 1
            }
        }
    }

    const typeOptions = {
        strings: ['Student', 'Web Designer', 'Software Developer'],
        autoStart: true,
        loop: true,
        cursor: '',
        wrapperClassName: 'typewriterpara' 
    }

    const animationClientsCount = () => {
        animate(0, 30, {
            duration: 1,
            onUpdate: (v) => clientCount.current.textContent = v.toFixed()
        })
    }

    const animationProjectsCount = () => {
        animate(0, 20, {
            duration: 1,
            onUpdate: (v) => projectCount.current.textContent = v.toFixed()
        })
    }

    return (
        <div id='home'>
            <section>
                <div>
                    <motion.h1 {...animations.h1}>
                        Hi, I am <br/> Mohamed Aashir
                    </motion.h1>
                    <Typewriter options={typeOptions} />

                    <div>
                        <a href="mailto:tmohamedaashir@gmail.com">Hire Me!</a>
                        <a href="#work" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px'}}>Projects <BsArrowRight /></a>
                    </div>

                    <aside>
                        <article>
                            <p>
                                +<motion.span whileInView={animationClientsCount} ref={clientCount}></motion.span>
                            </p>
                            <span>Months Experience</span>
                        </article>
                        <article>
                            <p>
                                +<motion.span whileInView={animationProjectsCount} ref={projectCount}></motion.span>
                            </p>
                            <span>Projects Done</span>
                        </article>
                    </aside>
                    <article data-special>
                        <p>Contact</p>
                        <span>tmohamedaashir@gmail.com</span>
                    </article>
                </div>

            </section>
            <section>
                <img src={me} alt="Aashir" />
            </section>
            <BsChevronDown />
        </div>
    )
}

export default Home;
