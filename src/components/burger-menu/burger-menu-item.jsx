import { Link } from 'react-router-dom';

function BurgerMenuItem({ to, onClick, children }) {
  const action = () => onClick?.();

  return (
    <li className="dark:text-lightHover mb-8 hover:lg:translate-x-4 duration-300">
      <Link onClick={action} to={to} className="h-full py-3 px-2">
        [ {children} ]
      </Link>
    </li>
  );
}
export { BurgerMenuItem };
