/* eslint-disable react/jsx-no-useless-fragment */
import { useState } from 'react';

import BURGER_MENU_IMAGE from 'assets/menu.png';
import CLOSE_MENU_IMAGE from 'assets/close.png';
import { BurgerMenuDrawer } from './burger-menu-drawer';

function BurgerMenu() {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  const closeMenu = () => setShowMenu(false);

  return (
    <>
      <button
        type="button"
        onClick={toggleMenu}
        className="z-50 w-11 h-11 rounded-full outline-0"
      >
        {showMenu ? (
          <img width={44} alt="Menu" className="dark:invert" src={CLOSE_MENU_IMAGE} />
        ) : (
          <img width={44} alt="Menu" className="dark:invert" src={BURGER_MENU_IMAGE} />
        )}
      </button>
      <BurgerMenuDrawer onClose={closeMenu} show={showMenu} />
    </>
  );
}
export { BurgerMenu };
