import { Document, Text, Page, View, Svg, Rect, Defs, LinearGradient, Stop, Font } from '@react-pdf/renderer';
import { createTw } from 'react-pdf-tailwind';

Font.register({
    family: 'Iceland',
    src: 'https://fonts.gstatic.com/s/bigshouldersdisplay/v21/fC1MPZJEZG-e9gHhdI4-NBbfd2ys3SjJCx12wPgf9g-_3F0YdY87JF4.ttf',
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

const CV = ({ accentColor, seasonName }) => {
    const tw = createTw({
        theme: {
            extend: {
                fontFamily: {
                    iceland: 'Iceland',
                    bigShouldersDisplay: 'BigShouldersDisplay',
                },
                colors: {
                    accent: accentColor,
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
				<View>
                    <View style={tw('flex justify-between bg-accent text-black font-bold font-bigShouldersDisplay w-full px-3 py-1 uppercase')}>
                        <Text>Test</Text>
                    </View>
					<Text style={tw('text-accent font-iceland text-xl uppercase')}>\\ Saison {seasonName}</Text>
				</View>
			</Page>
		</Document>
	);
}

export default CV;