'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

import Logo from '@/components/ui/Logo';
import MobileMenu from '@/components/ui/MobileMenu';
import HeaderTitle from './HeaderTitle';

export default function Header() {
  const [top, setTop] = useState<boolean>(true);

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true);
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

  return (
    <header
      className={`fixed z-30 w-full transition duration-300 ease-in-out md:bg-opacity-90 ${
        !top ? 'bg-white shadow-lg backdrop-blur-sm' : ''
      }`}
    >
      <div className='mx-auto max-w-6xl px-5 sm:px-6'>
        <div className='flex h-16 items-center justify-between md:h-20'>
          {/* Site branding */}
          <div className='mr-4 shrink-0'>
            <Logo />
          </div>

          {/* Desktop navigation */}
          <nav className='hidden md:flex md:grow'>
            {/* Desktop sign in links */}
            <ul className='flex grow flex-wrap items-center justify-end'>
              {HeaderTitle.map((item) => (
                <li key={item.title}>
                  <Link
                    target={item.title === 'Blog' ? '_blank' : undefined}
                    href={item.link}
                    className='mx-4 flex items-center rounded-xl px-5 py-2 font-sans text-gray-600 transition duration-150 ease-in-out hover:bg-green-200 hover:font-extrabold hover:text-gray-900'
                  >
                    {item.title}
                  </Link>
                </li>
              ))}

              <li>
                <Link
                  target='_blank'
                  href='https://www.instagram.com/surabayadev/'
                  // className='btn-sm ml-3 bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-gray-200 hover:bg-gray-800'
                  // >
                  className='btn-sm bg-gradient-to-br
                  from-[#DD2A7B] from-[#F58529] via-[#DD2A7B] via-[#DD2A7B]
                  to-[#8134AF] to-[#F58529] text-gray-200 hover:bg-gradient-to-bl 
                  '
                >
                  <span>Hubungi Kami</span>
                  <svg
                    className='-mr-1 ml-2 h-3 w-3 shrink-0 fill-current text-gray-200'
                    viewBox='0 0 12 12'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z'
                      fillRule='nonzero'
                    />
                  </svg>
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
