import { Star, Visibility } from '@mui/icons-material';

const ProjectCard = ({ title, description, href, language, tags, starsCount, watchersCount }) => {
    return (
        <a href={href} target='_blank'>
            <div className='bevel-tr bg-white/13 p-0.5'>
                <div className='bevel-tr p-4 flex flex-col gap-1 bg-black hover:bg-black/50'>
                    <div className='flex justify-between items-center'>
                        <h4 className='font-bigShouldersDisplay text-2xl text-accent uppercase font-bold'>{title}</h4>
                        {starsCount > 0 && (
                            <div className='flex items-center gap-1 text-accent' >
                                <Star />
                                <p className='font-bold text-lg'>{starsCount}</p>
                            </div>
                        )}
                    </div>
                    <p cwlassName='text-white/80'>{language}</p>
                    {description && <p className='text-white/45'>{description}</p>}
                    {tags.length > 0 && (
                        <div className='flex flex-col gap-1'>
                            <div className='flex items-center gap-2'>
                                <h3 className='text-lg font-bigShouldersDisplay -tracking-tighter'>Tags</h3>
                                <div className='border-2 border-white/13 w-full bevel-br'></div>
                            </div>
                            <div className='flex flex-wrap gap-2'>
                                {tags?.map((tagName) => (
                                    <div className='bg-accent/20 px-2 py-1 bevel-br hover:bg-accent/80'>
                                        <span>{tagName}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </a>
    );
}

export default ProjectCard;