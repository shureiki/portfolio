import Head from 'next/head';

import Icon from '@/components/icon';

import userSkills from '@/data/userSkills';

export default function Home() {
    return (
        <>
            <Head>
                <title>Portfolio</title>
                <meta name='description' content='Portfolio' />
            </Head>
            
            <main className='flex flex-col gap-4'>
                <div id='introduction'>
                    <h5 className='text-[#7A7A7A]'>Une brève introduction de ma vie</h5>
                    <p className='text-lg'>J'ai découvert la programmation informatique à 12 ans avec Minecraft Java Edition, ce qui a éveillé ma passion pour le code. J'ai commencé avec des bots Discord en JavaScript, puis j'ai appris à créer des sites web en HTML, CSS et JavaScript. Par la suite, j'ai exploré des frameworks comme Next.js, React et React Native, tout en m'intéressant au développement de jeux vidéo avec Godot Engine avec le GDScript proche du python et par la suite en C#. Curieux et polyvalent, je souhaite évoluer dans différents domaines, que ce soit le back-end, le front-end ou le mobile, toujours guidé par l'envie de programmer.</p>
                </div>
                <div id='career'>
                    <h5 className='text-[#7A7A7A]'>Carrière et développement</h5>
                    <p className='text-lg'>Mon parcours en programmation est en constante évolution. Depuis mes premiers pas avec Minecraft, j'ai toujours cherché à me diversifier et à m'améliorer. Chaque projet, qu'il soit lié à un bot, un site web ou un jeu vidéo, est une occasion d'acquérir de nouvelles compétences. Je suis convaincu que l'apprentissage continu est essentiel dans le domaine technologique, et j'adore explorer constamment de nouveaux outils, frameworks et langages pour rester à la pointe de l'innovation.</p>
                </div>
                <div id='wishes'>
                    <h5 className='text-[#7A7A7A]'>Mes souhaits</h5>
                    <p className='text-lg'>À long terme, mon objectif est clair : devenir développeur de jeux vidéo. Depuis mes débuts dans la programmation, cette branche m’a toujours fasciné par sa capacité à allier créativité et technique pour créer des expériences immersives et interactives. Je souhaite continuer à enrichir mes compétences en explorant divers aspects du développement, comme le web ou le mobile, tout en restant orienté vers mon objectif final. Ces expériences me permettront d’acquérir une perspective globale et des outils variés, essentiels pour exceller dans l’industrie du jeu vidéo. Créer des univers captivants, travailler sur des mécaniques innovantes et collaborer avec d'autres passionnés dans des projets ambitieux sont des aspirations qui me motivent à chaque étape de mon apprentissage et de ma carrière.</p>
                </div>
                <div>
                    {userSkills.map(({ name, icon }, idx) => (
                        <div key={idx}>
                            <Icon component={icon} />
                            <p>{name}</p>
                        </div>
                    ))}
                </div>
            </main>
        </>
    );
}
