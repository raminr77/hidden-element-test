import { Link } from 'react-router-dom';
import { DarkModeButton } from 'components/dark-mode-button';
import { HIDDEN_ELEMENT_PAGE, NO_HIDDEN_ELEMENT_PAGE } from 'constants/appRoutes';

function HomePage() {
  return (
    <div className="bg-light dark:bg-dark w-full h-screen flex flex-col justify-center items-center">
      <DarkModeButton className="absolute top-4 left-4" />

      <img
        width={128}
        src="./pizza.png"
        alt="PIZZA WIZARD"
        className="mb-5 animate__animated animate__bounceIn"
      />
      <h1 className="text-3xl title-font text-primary animate__animated animate__fadeIn">
        Your Favorite Pizza
      </h1>

      <div className="flex flex-col mt-10 gap-y-4 animate__animated animate__fadeIn">
        <Link
          to={HIDDEN_ELEMENT_PAGE}
          className="bg-primaryHover hover:bg-primary text-center text-light rounded px-5 py-3"
        >
          With Hidden Element
        </Link>
        <Link
          to={NO_HIDDEN_ELEMENT_PAGE}
          className="bg-primaryHover hover:bg-primary text-center text-light rounded px-5 py-3"
        >
          Without Hidden Element
        </Link>
      </div>
    </div>
  );
}

export { HomePage };
