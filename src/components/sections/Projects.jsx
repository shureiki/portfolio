// IMPORT STYLE
import './styles/Projects.css'

import { useState, useEffect } from 'react';

import Card from "../Card";

import { TAG_TYPES } from '../../data/constant';
import PROJECTS from '../../data/projects.json'

export default function Projects() {
    const [query, setQuery] = useState('');
    const [pages, setPages] = useState(1);
    const [projectsData, setProjectsData] = useState([]);
    const [projects, setProjects] = useState([]);
    const [isPartialLoaded, setPartialLoaded] = useState(true);

    useEffect(() => {
        (async () => {
            setProjectsData(() => PROJECTS.filter(project => project.title).map(project => {
                return {
                    ...project,
                    ...(project.tags && ({ tags: Object.entries(project.tags).map(tag => tag[1].map(id => {
                        const data = TAG_TYPES[tag[0]][id];
                        return {
                            name: data.name ?? data,
                            alias: data.alias?.map(x=>x.toLowerCase())
                        }
                    })).flat()}))
                }
            }));

            if (!localStorage.getItem('PROJECTS') || Math.floor((new Date().getTime() - localStorage.getItem('PROJECTS_LAST_FETCH') ?? 0) / 1000 / 60) > 5) {
                setPartialLoaded(() => true);

                localStorage.setItem('PROJECTS', JSON.stringify(await Promise.all(PROJECTS.filter(project => project.title && project.API).map(async project => {
                    return {
                        id: project.id,
                        ...(await fetch(`https://api.cfwidget.com/${project.API.projectId}`).then(rep=>rep.json().then(json => ({
                            created_at: json.created_at,
                            downloads_count: json.downloads.total,
                            project_link: json.urls?.curseforge
                        }))))
                    }
                }))));

                localStorage.setItem('PROJECTS_LAST_FETCH', new Date().getTime());
            };

            setProjectsData(prev => prev.map(project => {
                const data = (JSON.parse(localStorage.getItem('PROJECTS')) ?? []).find(x => x.id == project.id);
                return {
                    ...project,
                    ...(data && {
                        list: [
                            data.created_at && `Projet créé le ${new Date(data.created_at).toLocaleDateString()}`,
                            data.downloads_count && `${data.downloads_count}~ Téléchargements`
                        ],
                        ...(data.project_link && {
                            links: {
                                title: 'voir le projet',
                                href: data.project_link
                            }
                        }),
                        API: {
                            ...project.API,
                            fetched: {
                                ...data
                            }
                        }
                    })
                }
            }));

            setPartialLoaded(() => false);
        })();
    }, []);

    useEffect(() => {
        setProjects(() => projectsData.filter(project => query ? (
            project.title.toLowerCase().includes(query) ||
            project.tags.flatMap(tag => tag.name.toLowerCase().includes(query) || tag.alias?.includes(query)).includes(true)
        ) : project).sort((a, b) => {
            const algorytm = (data) => {
                return (Math.min(1.5, ((data.description?.length ?? 0) / 100)) +
                Math.min(2.5, (data.list?.content?.length ?? 0)) +
                (data.links ? 0.5 : -0.5)) +
                (data.tags ? Math.min(1.0, 0.25 * data.tags.length) : -0.5) +
                (data.API?.fetched && (
                    (data.API.fetched?.downloads_count && Math.max(10.0, Math.floor(data.API.fetched.downloads_count / 100))) +
                    (data.API.fetched?.created_at && (Math.floor((new Date().getTime() - new Date(data.created_at).getTime()) / (1000 * 60 * 60 * 24 * 30)) < 1) && 3.0)
                ))
            };
            return (algorytm(b) - algorytm(a));
        }));
    }, [query, projectsData]);
    
    useEffect(() => {
        document.querySelectorAll('.tag').forEach(tag => {
            if (query && (tag.textContent.toLowerCase().includes(query) || tag.dataset?.alias?.split?.(',')?.includes?.(query))) {
                tag.classList.add('checked');
            } else if (tag.classList.contains('checked')) {
                tag.classList.remove('checked');
            }
        });
        if (pages > 1) {
            document.getElementById('projects').scrollIntoView({ behavior: 'smooth', block: 'end' });
        }
    }, [projects, pages])
    
    const handleSetQuery = (value) => {
        if (query == value) return;
        setQuery(() => value.toLowerCase());
        setPages(() => 1);
    };

    return (
        <section id='projects'>
            <div className='container'>
                <h1 className='title'>Mes projets</h1>
                <div className='content'>
                    {isPartialLoaded && (
                        <span className='partialLoad'>
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="#aed1ff" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12z"></path>
                                <path d="M12 14a1 1 0 0 1-1-1V7a1 1 0 1 1 2 0v6a1 1 0 0 1-1 1zm-1.5 2.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0z"></path>
                            </svg>
                            <p>Chargement de donnée supplémentaire</p>
                        </span>
                    )}
                    <div className='tools'>
                        <div className='searchBar'>
                            <input onKeyDown={(e) => e.key == 'Enter' && handleSetQuery(e.target.value)} type='search' placeholder='Rechercher' />
                            <button className='submit' onClick={(e) => handleSetQuery(document.querySelector('.searchBar input').value)}>
                                <svg fill='#8391af' x="0px" y="0px" width="26" height="26" viewBox="0 0 50 50">
                                    <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className='projects'>
                        { query && projects.length > 0 && (<h2 className='title'>{projects.length} projet{projects.length > 1 && 's'} trouvé{projects.length > 1 && 's'}</h2>) }
                        <div className='content'>
                            { projects.length > 0 ? projects.slice(pages > 1 ? (4 * (pages - 1)) : 0, 4 * pages).map((project, i) => (
                                    <Card
                                        key={i}
                                        id={project.id}
                                        title={project.title}
                                        description={project.description}
                                        list={project.list}
                                        links={project.links}
                                        tags={project.tags}
                                    />
                                )) : (
                                    <p>Aucun project a pour nom « {query} »</p>
                                )
                            }
                        </div>
                        {projects.length > 4 && (<div className='buttons'>
                            {(<button disabled={pages <= 1} onClick={() => setPages(prev => prev - 1)} className='previous'>précédent</button>)}
                            <span className='numberPages'>{pages} / {Math.ceil(projects.length / 4)}</span>
                            {(<button disabled={pages >= Math.ceil(projects.length / 4)} onClick={() => setPages(prev => prev + 1)} className='next'>Suivant</button>)}
                        </div>)}
                    </div>
                </div>
            </div>
        </section>
    )
}