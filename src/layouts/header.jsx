import { useSelector } from 'react-redux';
import { BurgerMenu } from 'components/burger-menu';
import { appSelectors } from 'store/app-data/app-selectors';
import { DarkModeButton } from 'components/dark-mode-button';

function Header() {
  const { headerTitle } = useSelector(appSelectors.appData);
  return (
    <header className="px-3 py-2 max-h-16 mb-2 flex items-center justify-between">
      <DarkModeButton />
      {headerTitle && <div>{headerTitle}</div>}
      <BurgerMenu />
    </header>
  );
}

export { Header };
