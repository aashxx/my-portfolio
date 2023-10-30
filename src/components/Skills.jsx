import React from 'react';
import data from '../assets/data.json';
import SkillItem from './SkillItem';

const Skills = () => {
  return (
    <div id='skills'>
        <h2>Skills</h2>
        <section>
            {
                data.skills.map((skill, index) => (
                    <SkillItem key={index} name={skill.name} logo={skill.logo} />
                ))
            }
        </section>
    </div>
  )
}

export default Skills;
