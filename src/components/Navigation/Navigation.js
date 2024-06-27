import React, { useState } from 'react';
import './Navigation.css';
import LogoWhite from './icons/logo-light.svg';
import LogoDark from './icons/logo-dark.svg';
import Search from './icons/search.svg';
import DarkMode from './icons/dark_mode.svg';
import LightMode from './icons/light_mode.png';
import Menu from './icons/menu.svg';
import MenuLight from './icons/menu-light.svg';
// import Close from './icons/icons8-close.svg';

function Navigation ({theme, setTheme}) {
  const [isOpen, setIsOpen] = useState(false)
  const [background,setBackground] = useState('light')
  const toggle_mode = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
    if (background === 'light') {
      setBackground('dark')
      document.querySelector("body").setAttribute("data-theme", "dark")
    } else { 
      setBackground('light') 
      document.querySelector("body").setAttribute("data-theme", "light")
    };
  }
  
  
//   const setDarkMode = () => {
//     document.querySelector("body").setAttribute("data-theme", "dark")
//   };
//   const setLightMode = () => {
//     document.querySelector("body").setAttribute("data-theme", "light")
//   };
// setDarkMode();
  // const toggleTheme = e => {
  //   if (e.target.checked) setDarkMode();
  //   else setLightMode()
  // };

  
  return (
    <div className="Navigation">
      <div id='full-screen'>
        <img src={theme === 'light' ? LogoWhite : LogoDark} alt="logo-white" className='logo'/>
        <div className='search'>
          <img src={Search} alt="search" />
          <input type='text' placeholder='Search Items, collectibles and accounts' />
        </div>
        <div className='links'>
        <a href='/'>Marketplace</a>
        <a href='/'>Create</a>
        <a href='/'>Verify Collection</a>
        <a href='/'>About</a>
        <img onClick={() =>{toggle_mode()}} src={theme === 'light' ? DarkMode: LightMode} alt='dark-mode' className='dark-light'id='toggle'/>
        {/* <img src={LightMode} alt='light-mode' className='light' /> */}
        <a href='/' className="button">Connect Wallet</a>
        </div>
      </div>


      <div id='small-screen'>
        <div className='menu-items'>
          <div>
            <img src={theme === 'light' ? LogoWhite : LogoDark} alt="logo-white" className='logo'/>
          </div>
          {/* <div className='search close'>
            <img src={Close} alt="search" />
            <input type='text' placeholder='Search Items, collectibles and accounts' />
          </div> */}
          <div>
            <img src={Search} alt="search"/>
            <img onClick={() =>{toggle_mode()}} src={theme === 'light' ? DarkMode: LightMode} alt='dark-mode' className='dark-light'id='toggle'/>
            {/* <img src={LightMode} alt='light-mode' className='light' /> */}
            <img src={theme === 'light' ? Menu : MenuLight} alt='menuicon' onClick={() => setIsOpen(!isOpen)} className='menu' />
          </div>
        </div>
        {
          isOpen ?
            <div className='dropdown-links'>
            <li><a href='/'>Marketplace</a></li>
            <li><a href='/'>Create</a></li>
            <li><a href='/'>Verify Collection</a></li>
            <li><a href='/'>About</a></li>
            <a href='/' className="button">Connect Wallet</a>
          </div>
          :null
        }
        

        
        {/* <div className='search'>
          <img src={Search} alt="search" />
          <input type='text' placeholder='Search Items, collectibles and accounts' />
        </div> *
        {/* <div className='links'>
        <a href='/'>Marketplace</a>
        <a href='/'>Create</a>
        <a href='/'>Verify Collection</a>
        <a href='/'>About</a> 
        <a href='/' className="button">Connect Wallet</a>
        </div>
        */}
        
        
      </div>
    </div>
  );
}

export default Navigation;

