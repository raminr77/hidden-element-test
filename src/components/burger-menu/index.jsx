import { useState } from 'react';
import { Link } from 'react-router-dom';

import { CLICK_NAMES } from 'constants/click-names';
import {
  ABOUT_US_PAGE_URL,
  CONTACT_US_PAGE_URL,
  NEWSLETTERS_PAGE_URL,
  HIDDEN_ELEMENT_PAGE_URL
} from 'constants/app-routes';

function BurgerMenu() {
  const [show, setShow] = useState(false);
  const toggleMenu = () => setShow(!show);

  const itemClasses =
    'w-full leading-10 px-4 border-b-2 border-solid border-transparent hover:border-slate-200 dark:hover:border-slate-800 mb-3';

  return (
    <>
      <button
        type="button"
        onClick={toggleMenu}
        className="absolute shadow-md z-30 bg-slate-100 dark:bg-slate-600 px-6 text-sm rounded-lg leading-9 py-1"
      >
        {show ? 'Close' : 'Menu'}
      </button>
      {show && (
        <div className="animate__animated animate__fadeInLeft shadow-lg flex items-center justify-center px-5 absolute top-0 left-0 right-0 bottom-0 w-full h-screen bg-burger-menu z-20">
          <ul className="flex flex-col items-center w-full">
            <Link
              onClick={toggleMenu}
              to={HIDDEN_ELEMENT_PAGE_URL}
              data-click={CLICK_NAMES.HIDDEN_HEADER_ITEM}
            >
              <li className={itemClasses}>Home</li>
            </Link>
            <Link
              onClick={toggleMenu}
              to={ABOUT_US_PAGE_URL}
              data-click={CLICK_NAMES.HIDDEN_HEADER_ITEM}
            >
              <li className={itemClasses}>About Us</li>
            </Link>
            <Link
              onClick={toggleMenu}
              to={CONTACT_US_PAGE_URL}
              data-click={CLICK_NAMES.HIDDEN_HEADER_ITEM}
            >
              <li className={itemClasses}>Contact Us</li>
            </Link>
            <Link
              onClick={toggleMenu}
              to={NEWSLETTERS_PAGE_URL}
              data-click={CLICK_NAMES.HIDDEN_HEADER_ITEM}
            >
              <li className={itemClasses}>Newsletters</li>
            </Link>
          </ul>
        </div>
      )}
    </>
  );
}

export { BurgerMenu };
