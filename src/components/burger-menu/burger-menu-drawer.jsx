import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { appSelectors } from 'store/app-data/app-selectors';

import {
  HOME_URL,
  ABOUT_US_URL,
  CONTACT_US_URL,
  WITH_HIDDEN_ELEMENT_URL,
  WITHOUT_HIDDEN_ELEMENT_URL
} from 'constants/app-routes';

import { BurgerMenuItem } from './burger-menu-item';

function BurgerMenuDrawer({ show = false, onClose }) {
  const { darkMode } = useSelector(appSelectors.appData);
  const backgroundColor = darkMode ? 'rgba(0, 0, 0, 0.4)' : 'rgba(250, 250, 250, 0.4)';

  return (
    <div
      style={{ backgroundColor }}
      className={classNames(
        'p-5 flex flex-col items-center justify-center animate__animated z-40 w-full h-screen backdrop-blur-md absolute right-0 top-0 bottom-0',
        {
          animate__slideInDown: show,
          animate__slideOutUp: !show,
          none: !show
        }
      )}
    >
      <ul>
        <BurgerMenuItem onClick={onClose} to={HOME_URL}>
          HOME
        </BurgerMenuItem>
        <BurgerMenuItem onClick={onClose} to={ABOUT_US_URL}>
          ABOUT US
        </BurgerMenuItem>
        <BurgerMenuItem onClick={onClose} to={CONTACT_US_URL}>
          CONTACT US
        </BurgerMenuItem>
        <BurgerMenuItem onClick={onClose} to={WITH_HIDDEN_ELEMENT_URL}>
          PIZZA WITH HIDDEN ELEMENT
        </BurgerMenuItem>
        <BurgerMenuItem onClick={onClose} to={WITHOUT_HIDDEN_ELEMENT_URL}>
          PIZZA WITHOUT HIDDEN ELEMENT
        </BurgerMenuItem>
      </ul>
    </div>
  );
}
export { BurgerMenuDrawer };
