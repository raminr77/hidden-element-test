import { Link } from 'react-router-dom';
import { StaticPageLayout } from 'layouts/static-page';

import {
  WITH_HIDDEN_ELEMENT_URL,
  WITHOUT_HIDDEN_ELEMENT_URL
} from 'constants/app-routes';

function HomePage() {
  return (
    <StaticPageLayout hasWave>
      <div className="w-full flex flex-col items-center justify-center mt-20">
        <img
          width={128}
          src="./pizza.png"
          alt="PIZZA WIZARD"
          className="mb-5 animate__animated animate__bounceIn"
        />
        <h1 className="text-3xl pw-title-font dark:text-secondary text-primary animate__animated animate__fadeIn">
          Your Favorite Pizza
        </h1>

        <div className="flex flex-col mt-10 gap-y-4 animate__animated animate__fadeIn">
          <Link
            to={WITH_HIDDEN_ELEMENT_URL}
            className="bg-primary hover:bg-primaryHover text-center text-light rounded px-5 py-3"
          >
            With Hidden Element
          </Link>
          <Link
            to={WITHOUT_HIDDEN_ELEMENT_URL}
            className="bg-primary hover:bg-primaryHover text-center text-light rounded px-5 py-3"
          >
            Without Hidden Element
          </Link>
        </div>
      </div>
    </StaticPageLayout>
  );
}

export { HomePage };
