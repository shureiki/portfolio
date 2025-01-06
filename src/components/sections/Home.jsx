// IMPORT STYLE
import './styles/Home.css'

// IMPORT COMPONENTS
import { LinkIcon, ImgFrame } from "../";
import About from '../../data/about.json';

import picture from '../../assets/picture.jfif';

export default function Home() {
    const old = Math.abs(Math.ceil((new Date('2005-10-27') - new Date()) / (1000 * 60 * 60 * 24 * 365.25)));

    return (
        <section id='home'>
            <article>
                <div>
                    <h1 className='title'>Bonjour, je m'appelle Lenny</h1>
                    <p className='description'>J'ai {old} et découvert la programmation informatique à 12 ans ~ avec Minecraft Java Edition, ce qui a éveillé ma passion pour le code. J'ai commencé avec des bots Discord en JavaScript, puis j'ai appris à créer des sites web en HTML, CSS et JavaScript. Par la suite, j'ai exploré des frameworks comme Next.js, React et React Native, tout en m'intéressant au développement de jeux vidéo avec Godot Engine avec le GDScript proche du python et par la suite en C#. Curieux et polyvalent, je souhaite évoluer dans différents domaines, que ce soit le back-end, le front-end ou le mobile, toujours guidé par l'envie de codé</p>
                </div>
                <div>
                    <LinkIcon
                        href={About.links.github}
                        type='svg'
                        size='32'
                        icon={
                            <svg viewBox="0 0 24 24" fill="none">
                                <path stroke="var(--gray-500)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M14.9998 22V18C15.1389 16.7473 14.7797 15.4901 13.9998 14.5C16.9998 14.5 19.9998 12.5 19.9998 9C20.0798 7.75 19.7298 6.52 18.9998 5.5C19.2798 4.35 19.2798 3.15 18.9998 2C18.9998 2 17.9998 2 15.9998 3.5C13.3598 3 10.6398 3 7.99979 3.5C5.99979 2 4.99979 2 4.99979 2C4.69979 3.15 4.69979 4.35 4.99979 5.5C4.27167 6.51588 3.91827 7.75279 3.99979 9C3.99979 12.5 6.99979 14.5 9.99979 14.5C9.60979 14.99 9.31979 15.55 9.14979 16.15C8.97979 16.75 8.92979 17.38 8.99979 18V22" />
                                <path stroke="var(--gray-500)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 18C4.49 20 4 16 2 16"/>
                            </svg>
                        }
                    />
                    <LinkIcon
                        href={About.links.linkedind}
                        type='svg'
                        size='32'
                        icon={
                            <svg viewBox="0 0 24 24" fill="var(--gray-500)">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                            </svg>
                        }
                    />
                </div>
            </article>
            <div>
                <ImgFrame img={picture} />
            </div>
        </section>
    )
}