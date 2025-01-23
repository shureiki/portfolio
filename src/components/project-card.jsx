import { useMemo } from 'react';

import { GitHub } from '@mui/icons-material';
import { Star } from '@mui/icons-material';
import Button from '@/components/common/button.jsx';
import { Web } from '@mui/icons-material';

const ProjectCard = ({ title, description, githubLink, href, language, tags, starsCount }) => {
    const tagsFiltered = useMemo(() => {
        return tags?.filter((tagName) => tagName !== 'to-portfolio') || [];
    }, [tags]);

    return (
        <div className='bevel-tr bg-white/13 p-0.5'>
            <div className='bevel-tr p-4 flex flex-col gap-2 bg-black'>
                <div>
                    <div>
                        <div className='flex justify-between items-center'>
                            <h4 className='font-bigShouldersDisplay text-2xl text-accent uppercase font-bold'>{title.replaceAll('-', ' ')}</h4>
                            {starsCount > 0 && (
                                <div className='flex items-center gap-1 text-accent' >
                                    <Star />
                                    <p className='font-bold text-lg'>{starsCount}</p>
                                </div>
                            )}
                        </div>

                        <p className='text-white/80 mt-2'>{language}</p>
                    </div>

                    {description && <p className='text-white/45'>{description}</p>}
                </div>

                {tags?.length > 0 && (
                    <div className='flex flex-col gap-1'>
                        <div className='flex items-center gap-2'>
                            <h3 className='text-lg font-bigshouldersisplay -tracking-tighter'>Tags</h3>
                            <div className='border-2 border-white/13 w-full bevel-br'></div>
                        </div>
                        <div className='flex flex-wrap gap-2'>
                            {tagsFiltered?.map((tagName, idx) => (
                                <div className='bg-accent/20 px-2 py-1 bevel-br hover:bg-accent/80' key={idx}>
                                    <span>{tagName}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                <div className='flex gap-2'>
                    {githubLink && (
                        <Button className='flex-1 min-w-35' href={githubLink}>
                            <div className='flex items-center justify-between'>
                                <p>Voir le code</p>
                                <GitHub fontSize='medium' />
                            </div>
                        </Button>
                    )}
                    {href && (
                        <Button className='flex-1 min-w-35' href={href}>
                            <div className='flex items-center justify-between'>
                                <p>Voir le site</p>
                                <Web fontSize='medium' />
                            </div>
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;