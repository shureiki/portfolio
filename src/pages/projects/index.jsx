import { useMemo } from 'react';

import ProjectCard from '@/components/project-card.jsx';
import useFetch from '@/hooks/useFetch';
import Head from 'next/head';
import userProjects from '@/data/userProjects';

export default function Home() {
    const { data, loading } = useFetch(`https://api.github.com/users/shureiki/repos`);

    const projects = useMemo(() => {
        return [ ...userProjects, ...data ?? [] ];
    }, [data]);

    const highlightedProjects = useMemo(() => {
        return projects.filter((repo) => repo.topics?.includes('to-portfolio'));
    }, [data]);

    const projectsWithoutHighlighted = useMemo(() => {
        return projects.filter((repo) => !repo.topics?.includes('to-portfolio')) || [];
    }, [data]);

    return (
        <>
            <Head>
                <title>Portfolio | Projets</title>
                <meta name='description' content='Portfolio - Projets' />
            </Head>

            <main>
                {loading ? (
                    <p>Chargement en cours..</p>
                ) : (
                    <div className='flex flex-col gap-4'>
                        <div className='flex flex-col gap-2'>
                            <div className='bevel-bl flex justify-between bg-accent text-2xl xs:text-3xl -tracking-tight font-bold px-3 py-1 uppercase text-black'>
                                <h2 className='font-iceland'>Projets mis en avant</h2>
                            </div>
                            <ul className='columns-sm gap-2'>
                                {highlightedProjects.map(({ name, description, html_url, homepage, language, topics, stargazers_count }, idx) => (
                                    <li key={idx} className='first:mt-0 mt-2 break-inside-avoid'>
                                        <ProjectCard
                                            title={name}
                                            description={description}
                                            language={language}
                                            githubLink={html_url}
                                            href={homepage}
                                            tags={topics}
                                            starsCount={stargazers_count}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <div className='bevel-bl flex justify-between bg-accent text-2xl xs:text-3xl -tracking-tight font-bold px-3 py-1 uppercase text-black'>
                                <h2 className='font-iceland'>Projets</h2>
                            </div>
                            <ul className='columns-sm gap-2'>
                                {projectsWithoutHighlighted.map(({ id, name, description, html_url, homepage, language, topics, stargazers_count }, idx) => (
                                    <li key={idx} className='first:mt-0 mt-2 break-inside-avoid'>
                                        <ProjectCard
                                            title={name}
                                            description={description}
                                            language={language}
                                            githubLink={html_url}
                                            href={homepage}
                                            tags={topics}
                                            starsCount={stargazers_count}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}
            </main>
        </>
    );
}
