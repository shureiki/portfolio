import { SiGithub, SiLinkedin } from 'react-icons/si';

const userInfo = {
    localisation: 'Nantes 44',
    old: Math.floor((new Date() - new Date('10-27-2005')) / (1000 * 60 * 60 * 24 * 365)),
    email: 'l.loquais44@gmail.com',
    hasJob: false,
    network: [
        {
            icon: SiLinkedin,
            name: 'LinkedIn',
            link: 'https://www.linkedin.com/in/lenny-loquais'
        },
        {
            icon: SiGithub,
            name: 'GitHub',
            link: 'https://github.com/shureiki'
        }
    ],
    experiences: [
        {
            title: 'Apprenti Développeur Full-Stack',
            description: 'Développement de " NeoCampus " la plate-forme collaborative des étudiants et enseignants de l’École de Design de Nantes Loire-Atlantique.',
            startAt: '02/20/2024',
            endAt: '01/15/2025',
        },
        {
            title: 'Service Civique - Ambassadeur du numérique',
            description: "Animation d’ateliers numériques pour initier au web, renforcer les compétences informatiques, et promouvoir le lien intergénérationnel autour des outils numériques.",
            startAt: '10/01/2022',
            endAt: '06/01/2023',
        },
    ],
    diplomas: [
        {
            title: "Concepteur Développeur D'application",
            school: 'ARINFO',
            startAt: '10/23/2023', // Revoir la date exact
            endAt: '11/15/2024',
        },
        {
            title: 'Brevet des collèges'
        }
    ]
}

export default userInfo;