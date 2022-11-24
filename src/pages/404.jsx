import { Link } from 'react-router-dom';
import { HOME_URL } from 'constants/app-routes';

import WARNING_IMAGE from 'assets/warning.svg';

function NotFoundPage() {
  return (
    <div className="dark:text-light w-full h-screen flex flex-col justify-center items-center">
      <img alt="404" width={300} src={WARNING_IMAGE} className="mb-8" />
      <div className="animate__animated animate__bounceIn pw-title-font text-3xl dark:text-primary">
        404 - Page Not Found
      </div>
      <Link to={HOME_URL} className="animate__animated animate__fadeIn text-sm mt-6">
        [ Home Page ]
      </Link>
    </div>
  );
}

export { NotFoundPage };
