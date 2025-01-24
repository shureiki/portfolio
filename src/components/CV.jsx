import { Document, Link, Text, Page, Path, View, Svg, Rect, Defs, LinearGradient, Stop, Font, Image } from '@react-pdf/renderer';
import { createTw } from 'react-pdf-tailwind';

import { MdEmail, MdMap } from 'react-icons/md';
import { SiLinkedin } from 'react-icons/si';
import { BsFillBuildingFill } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa";

import userInfo from '@/data/userInfo';
import userSkills from '@/data/userSkills';

Font.register({
    family: 'Iceland',
    src: 'https://fonts.gstatic.com/s/iceland/v20/rax9HiuFsdMNOnWPWKw.ttf'
});

Font.register({
    family: 'BigShouldersDisplay',
    fonts: [
        {
            src: 'https://fonts.gstatic.com/s/bigshouldersdisplay/v21/fC1MPZJEZG-e9gHhdI4-NBbfd2ys3SjJCx12wPgf9g-_3F0YdY86JF4.ttf',
            fontWeight: 100
        },
        {
            src: 'https://fonts.gstatic.com/s/bigshouldersdisplay/v21/fC1MPZJEZG-e9gHhdI4-NBbfd2ys3SjJCx12wPgf9g-_3F0YdQ87JF4.ttf',
            fontWeight: 200
        },
        {
            src: 'https://fonts.gstatic.com/s/bigshouldersdisplay/v21/fC1MPZJEZG-e9gHhdI4-NBbfd2ys3SjJCx12wPgf9g-_3F0YddE7JF4.ttf',
            fontWeight: 300
        },
        {
            src: 'https://fonts.gstatic.com/s/bigshouldersdisplay/v21/fC1MPZJEZG-e9gHhdI4-NBbfd2ys3SjJCx12wPgf9g-_3F0YdY87JF4.ttf',
            fontWeight: 400
        },
        {
            src: 'https://fonts.gstatic.com/s/bigshouldersdisplay/v21/fC1MPZJEZG-e9gHhdI4-NBbfd2ys3SjJCx12wPgf9g-_3F0Ydb07JF4.ttf',
            fontWeight: 500
        },
        {
            src: 'https://fonts.gstatic.com/s/bigshouldersdisplay/v21/fC1MPZJEZG-e9gHhdI4-NBbfd2ys3SjJCx12wPgf9g-_3F0YdVE8JF4.ttf',
            fontWeight: 600
        },
        {
            src: 'https://fonts.gstatic.com/s/bigshouldersdisplay/v21/fC1MPZJEZG-e9gHhdI4-NBbfd2ys3SjJCx12wPgf9g-_3F0YdWg8JF4.ttf',
            fontWeight: 700
        },
        {
            src: 'https://fonts.gstatic.com/s/bigshouldersdisplay/v21/fC1MPZJEZG-e9gHhdI4-NBbfd2ys3SjJCx12wPgf9g-_3F0YdQ88JF4.ttf',
            fontWeight: 800
        },
        {
            src: 'https://fonts.gstatic.com/s/bigshouldersdisplay/v21/fC1MPZJEZG-e9gHhdI4-NBbfd2ys3SjJCx12wPgf9g-_3F0YdSY8JF4.ttf',
            fontWeight: 900
        }
    ]
});

const IconsPDF = ({ icon, color = 'white', size = 24 }) => {
    const svg = icon().props.children;

    if (svg.length < 0) {
        return console.error(`${icon.name} is not supported for CV.`);
    }

    return (
        <Svg viewBox={icon().props.attr.viewBox || '0 0 24 24'} width={size} height={size}>
            {svg.filter((part) => part.type === 'path').map(({ props }, idx) => (
                <Path d={props.d} fill={props.fill === 'none' ? props.fill : color} key={idx} />
            ))}
        </Svg>
    );
}

const CV = ({ accentColor, seasonName }) => {
    const tw = createTw({
        theme: {
            extend: {
                fontFamily: {
                    iceland: [ 'Iceland' ],
                    bigShouldersDisplay: [ 'BigShouldersDisplay' ],
                },
                colors: {
                    accent: accentColor
                },
            },
        },
    });    

	return (
		<Document>
			<Page size='A4' style={tw('relative w-full h-full bg-black p-4')}>
                {/* Background Gradient */}
				<View style={tw('absolute top-0 right-0 bottom-0 left-0')}>
					<Svg style={tw('absolute')} width='100%' height='100%' viewBox="0 0 595 842">
						<Defs>
							<LinearGradient id='gradient' x1='0' y1='1' x2='1' y2='0'>
								<Stop offset='0%' stopColor={accentColor} stopOpacity={0.3} />
								<Stop offset='30%' stopColor='#000' stopOpacity={0} />
								<Stop offset='70%' stopColor='#000' stopOpacity={0} />
								<Stop offset='100%' stopColor={accentColor} stopOpacity={0.3} />
							</LinearGradient>
						</Defs>

						<Rect x='0' y='0' width='100%' height='100%' fill='url(#gradient)' />
					</Svg>
				</View>
                {/* Content */}
				<View style={tw('flex gap-4')}>
                    <View style={tw('flex gap-4 flex-row')}>
                        <View style={[tw('flex gap-3'), { width: 200 }]}>
                            <Image src='/avatar.jpg' />
                            <View style={[tw('flex gap-2 font-iceland'), { fontSize: 14 }]}>
                                <View style={tw('flex flex-row gap-2 items-center text-white')}>
                                    <IconsPDF icon={SiLinkedin} size={20} color={accentColor} />
                                    <Link style={tw('no-underline text-white')} src={`${userInfo.network.find((network) => network.name === 'LinkedIn').link}`}>Lenny LOQUAIS</Link>
                                </View>
                                <View style={tw('flex flex-row gap-2 items-center text-white')}>
                                    <IconsPDF icon={MdEmail} size={20} color={accentColor} />
                                    <Link style={tw('no-underline text-white')} src={`mailto:${userInfo.email}`}>{userInfo.email}</Link>
                                </View>
                                <View style={tw('flex flex-row gap-2 items-center text-white')}>
                                    <IconsPDF icon={MdMap} size={20} color={accentColor} />
                                    <Text>{userInfo.localisation}</Text>
                                </View>
                            </View>
                        </View>

                        <View style={tw('flex w-full gap-4')}>
                            <Text style={tw('flex justify-between bg-accent text-black font-bold font-bigShouldersDisplay px-3 py-1 uppercase')}>Compétences</Text>
                            <View style={tw('flex flex-wrap flex-row gap-4')}>
                                {userSkills.map(({ name, icon }, idx) => (
                                    <View style={[tw('flex items-center gap-2'), { width: 73 }]} key={idx}>
                                        <IconsPDF icon={icon} color={accentColor} />
                                        <Text style={[tw('font-iceland text-accent text-center'), { fontSize: 14 }]}>{name}</Text>
                                    </View>
                                ))}
                            </View>
                        </View>
                    </View>
                   <View style={tw('bg-accent text-black p-3')}>
                        <Text style={[tw('font-iceland'), { fontSize: 16 }]}>Je m'appelle Lenny, j'ai {userInfo.old} ans, et j'ai découvert la programmation à 12 ans avec Minecraft Java Edition, ce qui a éveillé ma passion pour la programmation. Depuis, j'ai exploré divers langages et technologies, notamment JavaScript, HTML, CSS, Next.js, React, React Native, ainsi que le développement de jeux vidéo avec Godot Engine. Mon objectif à long terme est de devenir développeur de jeux vidéo, tout en continuant à apprendre et à élargir mes compétences dans des domaines comme le web et le mobile.</Text>
                    </View>
                    <View style={tw('flex flex-row gap-5')}>
                        <View style={tw('flex-1 flex gap-2')}>
                            <Text style={tw('flex justify-between bg-accent text-black font-bold font-bigShouldersDisplay px-3 py-1 uppercase')}>Projets</Text>
                        </View>
                        <View style={tw('flex-1 flex gap-3')}>
                            <Text style={tw('flex justify-between bg-accent text-black font-bold font-bigShouldersDisplay px-3 py-1 uppercase')}>Expériences</Text>
                            <View style={tw('flex gap-2')}>
                                {userInfo.experiences.map(({ title, description, startAt, endAt }, idx) => (
                                    <View style={[tw('flex p-3 gap-2 bg-black border-2 text-white'), { borderColor: '#303030' }]} key={idx}>
                                        <View style={tw('flex flex-row gap-2 w-full')}>
                                            <IconsPDF icon={BsFillBuildingFill} size={20} color={accentColor} />
                                            <Text style={[tw('font-bigShouldersDisplay font-bold text-accent'), { flex: 1, fontSize: 15 }]}>{title}</Text>
                                        </View>
                                        <View style={[tw('flex flex-row gap-0 font-iceland'), { fontSize: 10, color: '#909090' }]}>
                                            <Text>{new Date(startAt).toLocaleDateString('fr-FR', { year: 'numeric', month: 'short' })} - </Text>
                                            <Text>{new Date(endAt).toLocaleDateString('fr-FR', { year: 'numeric', month: 'short' })}</Text>
                                        </View>
                                        <Text style={[tw('font-iceland'), { fontSize: 12 }]}>{description}</Text>
                                    </View>
                                ))}
                            </View>
                            <Text style={tw('flex justify-between bg-accent text-black font-bold font-bigShouldersDisplay px-3 py-1 uppercase')}>Diplômes</Text>
                            <View style={tw('flex gap-2')}>
                                {userInfo.diplomas.map(({ title, startAt, endAt, school }, idx) => (
                                    <View style={[tw('flex p-3 gap-2 bg-black border-2 text-white'), { borderColor: '#303030' }]} key={idx}>
                                        <View style={tw('flex flex-row gap-2 w-full')}>
                                            <IconsPDF icon={FaGraduationCap} size={20} color={accentColor} />
                                            <Text style={[tw('font-bigShouldersDisplay font-bold text-accent'), { flex: 1, fontSize: 15 }]}>{title}</Text>
                                        </View>
                                        {startAt || endAt && (
                                            <View style={[tw('flex flex-row gap-0 font-iceland'), { fontSize: 10, color: '#909090' }]}>
                                                <Text>{new Date(startAt).toLocaleDateString('fr-FR', { year: 'numeric', month: 'short' })} - </Text>
                                                <Text>{new Date(endAt).toLocaleDateString('fr-FR', { year: 'numeric', month: 'short' })}</Text>
                                            </View>
                                        )}
                                        {school && <Text style={[tw('font-iceland'), { fontSize: 12 }]}>À {school}</Text>}
                                    </View>
                                ))}
                            </View>
                        </View>
                    </View>
				</View>
			</Page>
		</Document>
	);
}

export default CV;