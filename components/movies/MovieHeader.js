import Link from 'next/link';
import { useState } from 'react';

const MovieHeader = () => {
  const [menuActive, setMenuActive] = useState(false);

  const phoneMenuHandler = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header
      id='header'
      className={
        menuActive
          ? 'header header-horizontal header-view-pannel active'
          : 'header header-horizontal header-view-pannel'
      }
    >
      <div className='container'>
        <nav className='navbar'>
          <Link href='/'>
            <a className='navbar-brand'>
              <span className='logo-element'>
                <span className='logo-tape'>
                  <span className='svg-content svg-fill-theme'>
                    <svg
                      src='https://svgshare.com/i/nPD.svg'
                      xmlns='http://www.w3.org/2000/svg'
                      style={{ height: '1.2em', width: '1.5349em' }}
                    >
                      <path
                        class='fill-path'
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                        d='M8 0H47V3H51V0H55V43H51V40H47V43H8V40H4V43H0V0H4V3H8V0ZM8 7H4V11H8V7ZM4 15H8V19H4V15ZM8 23H4V27H8V23ZM4 32H8V36H4V32ZM51 7H47V11H51V7ZM47 15H51V19H47V15ZM51 23H47V27H51V23ZM47 32H51V36H47V32Z'
                        fill='#FF8A00'
                      ></path>
                    </svg>
                  </span>
                </span>
                <span className='logo-text text-uppercase'>
                  <span>M</span>emico
                </span>
              </span>
            </a>
          </Link>
          <button
            onClick={phoneMenuHandler}
            id='menuButton'
            className={menuActive ? 'navbar-toggler active' : 'navbar-toggler'}
            type='button'
          >
            <span className='th-dots-active-close th-dots th-bars'>
              <span />
              <span />
              <span />
            </span>
          </button>
          <div className='navbar-collapse'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <Link href='/'>
                  <a className='nav-link'>Home</a>
                </Link>
              </li>
              <li className='nav-item'>
                <Link href='/movies'>
                  <a className='nav-link'>Movies</a>
                </Link>
              </li>
              <li className='nav-item'>
                <Link href='/archives'>
                  <a className='nav-link'>Archives</a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default MovieHeader;
