import Box from "./box";
import Button from "./common/button";

const userInfo = {
    pseudo: 'Shurei',
    localisation: 'Nantes 44',
    // occupation: 'Développeur web',
    occupation: null,
    network: ['Linkedin', 'Github'],
};

export default function Layout({ children }) {
    const infoList = [
        { label: 'Prénom', value: 'Lenny' },
        { label: 'Pseudo', value: userInfo.pseudo },
        userInfo.occupation && { label: 'Occupation', value: userInfo.occupation },
        { label: 'Localisation', value: userInfo.localisation }
    ].filter(Boolean);

    return (
        <>
            <div className='flex flex-col gap-3'>
                <Box className='p-2 w-fit'>
                    <img src='https://avatars.githubusercontent.com/u/73862313?v=4' alt='Avatar' />
                </Box>

                <div className='grid grid-cols-2 gap-3'>
                    {infoList.map(({ label, value }) => (
                        <hgroup className='flex flex-col uppercase'>
                            <h4 className='text-lg font-iceland'>{label}</h4>
                            <div className='text-accent text-xl font-bold font-bigShouldersDisplay'>{value}</div>
                        </hgroup>
                    ))}

                    {!userInfo.occupation && (
                        <div className='flex items-center gap-2 col-span-2'>
                            <span class='relative flex h-4 w-4'>
                                <span class='animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75'></span>
                                <span class='relative inline-flex rounded-full h-4 w-4 bg-accent'></span>
                            </span>
                            
                            <p className='text-xl font-bold font-bigShouldersDisplay'>Recrutement possible</p>
                        </div>
                    )}

                    <div className='flex flex-col uppercase col-span-2'>
                        <h4 className='text-lg font-iceland'>Sociale</h4>
                        <div className='flex flex-col gap-2'>
                            {userInfo.network.map((name) => (
                                <Button>{name}</Button>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
            <div>{children}</div>
        </>
    );
}