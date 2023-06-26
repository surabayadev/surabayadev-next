'use client';

import { Transition } from '@headlessui/react';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

import HeaderTitle from '@/components/ui/HeaderTitle';

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);

  const trigger = useRef<HTMLButtonElement>(null);
  const mobileNav = useRef<HTMLDivElement>(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (
        !mobileNavOpen ||
        mobileNav.current.contains(target as Node) ||
        trigger.current.contains(target as Node)
      )
        return;
      setMobileNavOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <div className='flex md:hidden'>
      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`hamburger ${mobileNavOpen && 'active'}`}
        aria-controls='mobile-nav'
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className='sr-only'>Menu</span>
        <svg
          className='h-6 w-6 fill-current text-gray-900'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect y='4' width='24' height='2' />
          <rect y='11' width='24' height='2' />
          <rect y='18' width='24' height='2' />
        </svg>
      </button>

      {/*Mobile navigation */}
      <div ref={mobileNav}>
        <Transition
          show={mobileNavOpen}
          as='nav'
          id='mobile-nav'
          className='absolute left-0 top-full z-20 h-screen w-full overflow-scroll bg-white pb-16'
          enter='transition ease-out duration-200 transform'
          enterFrom='opacity-0 -translate-y-2'
          enterTo='opacity-100 translate-y-0'
          leave='transition ease-out duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <ul className='px-5 py-2'>
            {HeaderTitle.map((item) => (
              <li key={item.link}>
                <Link
                  href={item.link}
                  className='flex items-center px-5 py-3 font-medium text-gray-600 transition duration-150 ease-in-out hover:bg-green-200 hover:font-extrabold hover:text-gray-900 hover:text-gray-900 rounded-xl'
                >
                  {item.title}
                </Link>
              </li>
            ))}

            <li>
              <Link
                href='https://www.instagram.com/surabayadev/'
                className='btn-sm ml-3 bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-gray-200 hover:bg-gray-800'
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
        </Transition>
      </div>
    </div>
  );
}
