import { BurgerMenu } from 'components/burger-menu';
import { DarkModeButton } from 'components/dark-mode-button';

function Header() {
  return (
    <header className="px-3 py-2 max-h-16 mb-2 flex items-center justify-between">
      <DarkModeButton />
      <BurgerMenu />
    </header>
  );
}

export { Header };
