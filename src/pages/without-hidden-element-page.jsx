import { Link } from 'react-router-dom';
import { HOME_URL } from 'constants/app-routes';
import { titleGenerator } from 'utils/title-generator';

function WithoutHiddenElementPage() {
  titleGenerator();
  return (
    <div className="flex items-center justify-center">
      <Link to={HOME_URL} className="mt-5">
        [ Home Page ]
      </Link>
    </div>
  );
}

export { WithoutHiddenElementPage };
