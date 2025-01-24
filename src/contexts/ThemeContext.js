import { createContext, useContext, useState, useEffect } from 'react';

import useSeason from '@/utils/season';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const { currentSeason } = useSeason();

    const [currentTheme, setCurrentTheme] = useState(currentSeason.color);
    const [isSeasonTheme, setIsSeasonTheme] = useState(true);

    const setSeasonTheme = () => {
        setIsSeasonTheme(false);
        setCurrentTheme(currentSeason.color);
    };
    
    const setCustomTheme = (color) => {
        setIsSeasonTheme(true);
        setCurrentTheme(color);
    };

    const setCyberpunkTheme = () => setCustomTheme('#FF5D5D');

	useEffect(() => {
		document.documentElement.style = `--accent-season: ${currentTheme}`;
	}, [currentTheme]);

    return (
        <ThemeContext.Provider value={{ currentTheme, isSeasonTheme, setSeasonTheme, setCyberpunkTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
