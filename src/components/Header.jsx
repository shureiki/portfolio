// IMPORT STYLE
import './styles/Header.css';

// IMPORT HOOK
import { useState } from 'react';

export default function Header() {
  const [toggle, setToggle] = useState(false);
  
  const handleClick = () => {
    setToggle(prev => {
      if (window.window.innerWidth >= 1024) {
        document.body.className = '';
        return false;
      } else {
        document.body.className = !prev ? 'noScroll' : '';
        return !prev
      };
    }); 
  };

  return (
    <header>
        <span className='logo'>LL <span>/</span></span>
        <nav>
            <ul className={toggle ? 'menu toggle' : 'menu'}>
                <li><a onClick={handleClick} href="#home">Présentation</a></li>
                <li><a onClick={handleClick} href="#about">À propos</a></li>
                <li><a onClick={handleClick} href="#skills">Mes compétences</a></li>
                <li><a onClick={handleClick} href="#projects">Mes projets</a></li>
                <li><a onClick={handleClick} href="#contact">Contact</a></li>
            </ul>
            <div onClick={handleClick} className='burger'>
              <span></span>
              <span></span>
              <span></span>
            </div>
        </nav>
    </header>
  )
}