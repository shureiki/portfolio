import Head from 'next/head';

import Icon from '@/components/icon';
import userSkills from '@/data/userSkills';

export default function Home() {
    return (
        <>
            <Head>
                <title>Portfolio | Langages et Frameworks</title>
                <meta name='description' content='Découvrez les langages et frameworks que j’utilise.' />
            </Head>

            <main className='flex flex-col gap-5'>
                <div className='flex flex-col gap-4'>
                    <div className='bevel-bl flex justify-between bg-accent text-2xl xs:text-3xl -tracking-tight font-bold px-3 py-1 uppercase text-black'>
                        <h2 className='font-iceland'>Langages</h2>
                    </div>
                    <div className='flex flex-wrap justify-center lg:justify-start gap-4'>
                        {userSkills.filter(({ type }) => type === 'language').map(({ name, icon }, idx) => (
                            <div className='flex items-center flex-col gap-1' key={idx}>
                                <Icon component={icon} className='text-accent' size={64} />
                                <p className='text-lg'>{name}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <div className='bevel-bl flex justify-between bg-accent text-2xl xs:text-3xl -tracking-tight font-bold px-3 py-1 uppercase text-black'>
                        <h2 className='font-iceland'>Framework</h2>
                    </div>
                    <div className='flex flex-wrap justify-center lg:justify-start gap-4'>
                        {userSkills.filter(({ type }) => type === 'framework').map(({ name, icon }, idx) => (
                            <div className='flex flex-wrap items-center flex-col gap-1' key={idx}>
                                <Icon component={icon} className='text-accent' size={64} />
                                <p className='text-lg'>{name}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <div className='bevel-bl flex justify-between bg-accent text-2xl xs:text-3xl -tracking-tight font-bold px-3 py-1 uppercase text-black'>
                        <h2 className='font-iceland'>Outils</h2>
                    </div>
                    <div className='flex flex-wrap justify-center lg:justify-start gap-4'>
                        {userSkills.filter(({ type }) => type === 'tools').map(({ name, icon }, idx) => (
                            <div className='flex flex-wrap items-center flex-col gap-1' key={idx}>
                                <Icon component={icon} className='text-accent' size={64} />
                                <p className='text-lg'>{name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </>
    );
}
