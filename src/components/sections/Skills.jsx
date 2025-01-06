// IMPORT STYLE
import './styles/Skills.css'

import LinkIcon from "../LinkIcon";
import SKILLS from '../../data/skills.json'

export default function About() {
    return (
        <section id='skills'>
            <div className='container'>
                <h1 className='title'>Mes compétences</h1>
                <div className='content'>
                    {SKILLS.filter(x=>x.icon).map((skill, i) => (
                        <LinkIcon key={i} href={skill.href} type='file' size='90' icon={skill.icon}>{skill.title}</LinkIcon>
                    ))}
                </div>
            </div>
        </section>
    )
}