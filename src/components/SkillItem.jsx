import React from 'react';
import { delay, motion } from 'framer-motion';

const SkillItem = ({name, logo}) => {

    const animations = {
        whileInView: {
            x: 0,
            y: 0,
            opacity: 1
        },

        initial: {
            y: '100%',
            opacity: 0
        },
    }

    return (
        <motion.div className='skillItem' whileInView={animations.whileInView} initial={animations.initial} transition={{delay: 0.2}}>
            <h3>{name}</h3>
            <img src={logo} alt="skill-logo" />
        </motion.div>
    )
}

export default SkillItem;
