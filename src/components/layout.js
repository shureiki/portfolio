import Box from '@/components/box';
import Button from '@/components/common/button';

import userInfo from '@/data/userInfo';

import Icon from '@mui/material/Icon';

const UserAvatar = () => {
    return (
        <Box className='p-2'>
            <img src='https://avatars.githubusercontent.com/u/73862313?v=4' alt='Avatar' />
        </Box>
    )
}

export default function Layout({ children }) {
    return (
        <div className='flex flex-col gap-4 min-xs:flex-row'>
            <div className='flex flex-col gap-4'>
                <div className='flex flex-wrap gap-4 min-xs:flex-nowrap min-xs:flex-col min-xs:max-w-xs'>
                    <div className='min-w-26 flex-1'>
                       <UserAvatar />
                    </div>

                    <div className='flex flex-col gap-2 w-full flex-1'>
                        <hgroup className='flex flex-col uppercase'>
                            <h4 className='text-lg font-iceland'>prénom</h4>
                            <div className='text-accent text-xl font-bold font-bigShouldersDisplay'>Lenny</div>
                        </hgroup>

                        <hgroup className='flex flex-col uppercase'>
                            <h4 className='text-lg font-iceland'>Localisation</h4>
                            <div className='text-accent text-xl font-bold font-bigShouldersDisplay'>{userInfo.localisation}</div>
                        </hgroup>
                    </div>
                </div>

                <div className='flex flex-col gap-2'>
                    {!userInfo.hasJob && (
                        <div className='flex items-center gap-2'>
                            <span className='relative flex h-4 w-4'>
                                <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75'></span>
                                <span className='relative inline-flex rounded-full h-4 w-4 bg-accent'></span>
                            </span>
                            
                            <p className='text-xl font-bold font-bigShouldersDisplay text-nowrap'>Recherche un job</p>
                        </div>
                    )}

                    <hgroup className='flex flex-col uppercase'>
                        <h4 className='text-lg font-iceland'>E-mail</h4>
                        <a className='text-accent text-xl font-bold font-bigShouldersDisplay underline' href={`mailto:${userInfo.email}`}>{userInfo.email}</a>
                    </hgroup>

                    <div className='flex flex-col uppercase col-span-2'>
                        <h4 className='text-lg font-iceland'>Sociales</h4>
                        <div className='flex flex-col gap-2'>
                            {userInfo.network.map(({ name, link, icon }) =>  (
                                <Button href={link}>
                                    <div className='flex items-center justify-between'>
                                        <p>{name}</p>
                                        <Icon component={icon} fontSize='medium' />
                                    </div>
                                </Button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex justify-center w-full'>
                <Box className='p-2 w-full max-w-5xl'>{children}</Box>
            </div>
        </div>
    );
}