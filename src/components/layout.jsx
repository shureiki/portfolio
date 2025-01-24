// Components
import Button from '@/components/common/button.jsx';
import Box from '@/components/box';
import CV from '@/components/CV';

import { Description } from '@mui/icons-material';
import Icon from '@/components/icon';

// NextJs
import Link from 'next/link';
import { useRouter } from 'next/router';

// Context
import { useMenu } from '@/contexts/MenuContext';
import { useTheme } from '@/contexts/ThemeContext';

// Hooks
import useScreen from '@/hooks/useScreen';
import useSeason from '@/utils/season';

// Data
import userInfo from '@/data/userInfo';

// Built-In
import { pdf } from '@react-pdf/renderer';
import useProjects from '@/hooks/useProjects';

const UserAvatar = () => {
	return (
		<Box className='p-2'>
			<img src='/avatar.jfif' alt='Avatar' />
		</Box>
	)
}

const links = [
	{
		title: 'à propos',
		href: '/'
	},
	{
		title: 'Compétences',
		href: '/skills' 
	},
	{
		title: 'Projets',
		href: '/projects'
	},
	{
		title: 'logs',
		href: '/logs' 
	}
];

export default function Layout({ children }) {
	const { pathname } = useRouter();
	const { screenWidth } = useScreen();

	const { isOpen, toggleOpenState } = useMenu();

	const { currentTheme } = useTheme();
	const { currentSeason } = useSeason();

	const { allProjects, loading } = useProjects();

    const projects = allProjects
        .filter(({ description, language, updated_at, showOnCV }) => showOnCV || (description && language && updated_at))
        .sort((a, b) => {
            if (a.showOnCV) {
                return 1;
            }

            return b.stargazers_count - a.stargazers_count;
        }).slice(0, 3);


	const downloadPDF = async () => {
		if (loading) return;

		const blob = await pdf(<CV projects={projects} accentColor={currentTheme} seasonName={currentSeason.name} />).toBlob();
		const url = URL.createObjectURL(blob);

		const link = document.createElement('a');
		link.href = url;
		link.download = 'Lenny LOQUAIS - CV.pdf';
		document.body.appendChild(link);
		link.click();

		URL.revokeObjectURL(url);
		document.body.removeChild(link);
	};

	return (
		<div className='flex flex-col md:flex-row h-full gap-4'>
			{/* Left Side */}
			<div className='flex flex-col gap-4'>
				<div className='flex flex-wrap gap-4 justify-center md:flex-nowrap md:flex-col md:max-w-xs'>
					<div className='min-w-40 max-w-90 flex-1'>
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

						<hgroup className='flex flex-col uppercase'>
							<h4 className='text-lg font-iceland'>Âge</h4>
							<div className='text-accent text-xl font-bold font-bigShouldersDisplay'>{userInfo.old} ans</div>
						</hgroup>
					</div>
				</div>

				<div className='flex flex-col gap-2'>
					{!userInfo.hasJob && (
						<div className='flex items-center gap-2'>
							<span className='relative flex h-4 w-4'>
								<span className='animate-ping absolute inline-flex w-full rounded-full bg-accent opacity-75 h-full'></span>
								<span className='relative inline-flex rounded-full h-4 w-4 bg-accent'></span>
							</span>

							<p className='text-xl font-bold font-bigShouldersDisplay text-nowrap'>Recherche du travail</p>
						</div>
					)}

					<hgroup className='flex flex-col uppercase'>
						<h4 className='text-lg font-iceland'>E-mail</h4>
						<a className='text-accent text-xl font-bold font-bigShouldersDisplay underline' href={`mailto:${userInfo.email}`}>{userInfo.email}</a>
					</hgroup>

					<div className='flex flex-col uppercase col-span-2 max-w-100'>
						<h4 className='text-lg font-iceland'>Sociales</h4>
						<div className='flex flex-wrap gap-2'>
							{userInfo.network.map(({ name, link, icon }) => (
								<Button className='flex-1 min-w-35' href={link} key={name}>
									<div className='flex items-center justify-between'>
										<p>{name}</p>
										<Icon component={icon} />
									</div>
								</Button>
							))}
							<Button className='flex-1 min-w-fit text-nowrap' onClick={downloadPDF}>
								<div className='flex items-center justify-between'>
									<p>{loading ? 'Préparation du CV..' : 'Télécharger le CV'}</p>
									<Description />
								</div>
							</Button>
						</div>
					</div>
				</div>
			</div>

			<div className='h-full flex flex-col items-center gap-4 w-full'>
				{/* Navbar */}
				<div className='w-full max-w-5xl'>
					{screenWidth < 768 ? (
						<div>
							{/* Menu for max-md */}
							<button
								className='sticky top-0 left-0 w-full py-2 font-bold border-2 border-accent bg-black text-accent text-xl uppercase cursor-pointer'
								onClick={() => toggleOpenState()}
							>Navigation</button>
		
							{isOpen && (
								<div className='z-50 fixed top-0 left-0 w-full h-full bg-black border-2 border-white/13'>
									<div className="flex justify-between items-center border-b-2 border-white/10 px-4 py-2">
										<h2 className='text-2xl tracking-wide'>NAVIGATION</h2>
										<span className="text-3xl cursor-pointer" onClick={() => toggleOpenState()}>X</span>
									</div>
									<div className='flex flex-col gap-4 p-4'>
										{links.map(({ title, href }, idx) => (
											<Link
												onClick={() => toggleOpenState()}
												className={`border-l-2 border-white/40 bg-white/8 px-2 py-1 [&.active]:border-accent [&.active]:bg-accent/40 ${pathname === href ? 'active' : ''}`}
												href={href}
												key={idx}
											>
												<span className='text-lg tracking-wider font-bigShouldersDisplay uppercase'>{title}</span>
											</Link>
										))}
									</div>
								</div>
							)}
						</div>
					) : (
						<div className='flex gap-4'>
							{/* Menu for min-md */}
							{links.map(({ title, href }, idx) => (
								<Link
									className={`bevel-br flex border-l-3 border-white/40 flex-1 p-2 bg-white/8 hover:bg-white/10 [&.active]:bg-accent/50 [a.active]:border-accent ${pathname === href ? 'active' : ''}`}
									href={href}
									key={idx}
								>
									<span className='uppercase font-bigShouldersDisplay font-bold text-lg'>{title}</span>
								</Link>
							))}
						</div>
					)}
				</div>

				{/* Children box */}
				<div className='overflow-hidden p-0.5 w-full max-w-6xl'>
					<Box className='relative w-full h-full border-2 border-white/13 bg-black/20 backdrop-blur-2xl'>
						<div className='grow overflow-hidden flex p-2 w-full h-full lg:p-4'>
							<div className='overflow-auto flex-1 max-h-full'>
								{children}
							</div>
						</div>
					</Box>
				</div>
			</div>
		</div>
	);
}