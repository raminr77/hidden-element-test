import { Link } from 'react-router-dom';

import {
  ABOUT_US_PAGE_URL,
  CONTACT_US_PAGE_URL,
  NEWSLETTERS_PAGE_URL,
  VISIBLE_ELEMENT_PAGE_URL
} from 'constants/app-routes';
import { CLICK_NAMES } from 'constants/click-names';

function VisibleHeader() {
  const itemClasses =
    'leading-10 text-sm pointer-events-none duration-300 py-2 border-b-2 border-solid border-transparent hover:dark:border-slate-50 hover:border-slate-700 px-4 hover:dark:bg-slate-600';
  return (
    <header className="w-full shadow-md bg-slate-100 dark:bg-slate-700 px-5 mb-4">
      <ul className="flex items-center w-full mx-auto">
        <Link data-click={CLICK_NAMES.VISIBLE_HEADER_ITEM} to={VISIBLE_ELEMENT_PAGE_URL}>
          <li className={itemClasses}>Home</li>
        </Link>
        <Link data-click={CLICK_NAMES.VISIBLE_HEADER_ITEM} to={ABOUT_US_PAGE_URL}>
          <li className={itemClasses}>About Us</li>
        </Link>
        <Link data-click={CLICK_NAMES.VISIBLE_HEADER_ITEM} to={CONTACT_US_PAGE_URL}>
          <li className={itemClasses}>Contact Us</li>
        </Link>
        <Link data-click={CLICK_NAMES.VISIBLE_HEADER_ITEM} to={NEWSLETTERS_PAGE_URL}>
          <li className={itemClasses}>Newsletters</li>
        </Link>
      </ul>
    </header>
  );
}

export { VisibleHeader };
