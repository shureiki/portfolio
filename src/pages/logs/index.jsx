import userInfo from '@/data/userInfo';
import Head from 'next/head';
import { BsBuildingFill } from 'react-icons/bs';
import { FaGraduationCap } from 'react-icons/fa';

export default function Home() {
    return (
        <>
            <Head>
                <meta name='description' content='Portfolio - Projects' />
            </Head>

            <main className='flex flex-col gap-4'>
                <div className='flex flex-col gap-2'>
                    <div className='bevel-bl flex justify-between bg-accent text-2xl xs:text-3xl -tracking-tight font-bold px-3 py-1 uppercase text-black'>
                        <h2 className='font-iceland'>Expériences</h2>
                    </div>
                    <div className='flex flex-wrap gap-4'>
                        <ul className='columns-sm gap-2'>
                            {userInfo.experiences.map(({ title, description, startAt, endAt }, idx) => (
                                <li key={idx} className='first:mt-0 mt-2 break-inside-avoid'>
                                    <div className='bevel-tr bg-white/13 p-0.5' key={idx}>
                                        <div className='bevel-tr p-4 flex flex-col gap-1 bg-black'>
                                            <div className='flex flex-col gap-1'>
                                                <div className='flex gap-1'>
                                                    <BsBuildingFill className='text-accent' size={32} />
                                                    <h4 className='font-bigShouldersDisplay text-2xl text-accent uppercase font-bold'>{title}</h4>
                                                </div>
                                                <p className='text-sm text-white/90'>{new Date(startAt).toLocaleDateString('fr-FR', { month: 'short', year: 'numeric' })} - {endAt ? new Date(endAt).toLocaleDateString('fr-FR', { month: 'short', year: 'numeric' }) : 'Maintenant'}</p>
                                            </div>
                                            <p className='text-white/45'>{description}</p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <div className='bevel-bl flex justify-between bg-accent text-2xl xs:text-3xl -tracking-tight font-bold px-3 py-1 uppercase text-black'>
                        <h2 className='font-iceland'>Diplômes</h2>
                    </div>
                    <div className='flex flex-wrap gap-4'>
                        <ul className='columns-sm gap-2'>
                            {userInfo.diplomas.map(({ title, startAt, endAt, degrees, school }, idx) => (
                                <li key={idx} className='first:mt-0 mt-2 break-inside-avoid'>
                                    <div className='bevel-tr bg-white/13 p-0.5' key={idx}>
                                        <div className='bevel-tr p-4 flex flex-col gap-1 bg-black'>
                                            <div className='flex flex-col gap-1'>
                                                <div className='flex gap-1'>
                                                    <FaGraduationCap className='text-accent' size={32} />
                                                    <hgroup>
                                                        <h4 className='font-bigShouldersDisplay text-2xl text-accent uppercase font-bold'>{title}</h4>
                                                        <p className='text-sm text-white/60'>{degrees}</p>
                                                    </hgroup>
                                                </div>
                                                <p className='text-sm text-white/90'>{new Date(startAt).toLocaleDateString('fr-FR', { month: 'short', year: 'numeric' })} - {endAt ? new Date(endAt).toLocaleDateString('fr-FR', { month: 'short', year: 'numeric' }) : 'Maintenant'}</p>
                                            </div>
                                            {school && <p>À {school}</p>}
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </main>
        </>
    );
}
