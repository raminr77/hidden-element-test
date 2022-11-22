import classNames from 'classnames';
import { useSelector } from 'react-redux';

import { store } from 'store';
import { toggleDarkMode } from 'store/app-data/app-slice';
import { appSelectors } from 'store/app-data/app-selectors';

import SUN_IMAGE from 'assets/sun.svg';
import MOON_IMAGE from 'assets/moon.svg';

function DarkModeButton({ className }) {
  const { darkMode } = useSelector(appSelectors.appData);

  const toggleTheme = () => store.dispatch(toggleDarkMode());

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={classNames(
        'animate__animated animate__rotateIn hover:animate-pulse flex items-center justify-center w-11 h-11 rounded-full outline-0 bg-dark dark:bg-light',
        className
      )}
    >
      <img width={24} alt="DARK MODE" src={darkMode ? SUN_IMAGE : MOON_IMAGE} />
    </button>
  );
}

export { DarkModeButton };
