import { createContext, useState, useContext } from 'react';

const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpenState = () => setIsOpen((prev) => !prev);

    return (
        <MenuContext.Provider value={{ isOpen, toggleOpenState }}>
            {children}
        </MenuContext.Provider>
    );
};

export const useMenu = () => useContext(MenuContext);