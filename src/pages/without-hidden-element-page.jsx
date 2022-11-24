import { Link } from 'react-router-dom';
import { HOME_URL } from 'constants/app-routes';
import { titleGenerator } from 'utils/title-generator';

function WithoutHiddenElementPage() {
  titleGenerator();
  return (
    <div>
      <Link to={HOME_URL}>[ Home Page ]</Link>
    </div>
  );
}

export { WithoutHiddenElementPage };
