import Link from 'next/link';

const MovieFooter = () => {
  return (
    <footer className='section-text-white footer footer-links bg-darken'>
      <div className='footer-body container'>
        <div className='row'>
          <div className='col-sm-6 col-lg-3'>
            <a className='footer-logo' href='./'>
              <span className='logo-element'>
                <span className='logo-tape'>
                  <span
                    className='svg-content svg-fill-theme svg-content-footer'
                    data-svg='./images/svg/logo-part.svg'
                  >
                    <svg
                      src='https://svgshare.com/i/nPD.svg'
                      xmlns='http://www.w3.org/2000/svg'
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
          </div>
          <div className='col-sm-6 col-lg-3'>
            <h5 className='footer-title text-uppercase'>Movies</h5>
            <ul className='list-unstyled list-wide footer-content'>
              <li>
                <Link href='/movies'>
                  <a className='content-link'>All Movies</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='footer-copy'>
        <div className='container'>
          Copyright 2019 © AmigosThemes. All rights reserved. Redesigned by{' '}
          <a href='https://github.com/vpast' className='content-link'>
            Vpast
          </a>
        </div>
      </div>
    </footer>
  );
};

export default MovieFooter;
