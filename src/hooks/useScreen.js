import { useState, useEffect } from 'react';

const useScreen = () => {
	const [screenWidth, setScreenWidth] = useState();
	const [screenHeight, setScreenHeight] = useState();

	useEffect(() => {
		const handleResize = () => {
			setScreenWidth(window.innerWidth);
			setScreenHeight(window.innerHeight);
		};

		handleResize();

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return { screenWidth, screenHeight };
};

export default useScreen;