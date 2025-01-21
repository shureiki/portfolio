import { LinkedIn, GitHub } from '@mui/icons-material';

const userInfo = {
    localisation: 'Nantes 44',
    old: Math.floor((new Date() - new Date('10-27-2005')) / (1000 * 60 * 60 * 24 * 365)),
    email: 'l.loquais44@gmail.com',
    hasJob: false,
    network: [
        {
            icon: LinkedIn,
            name: 'LinkedIn',
            link: 'https://www.linkedin.com/in/lenny-loquais'
        },
        {
            icon: GitHub,
            name: 'GitHub',
            link: 'https://github.com/shureiki'
        }
    ]
}

export default userInfo;