import { Link } from 'react-router-dom';
import { HOME_URL } from 'constants/app-routes';

function WithoutHiddenElementPage() {
  return (
    <div>
      <h1>Without Hidden Element Page</h1>
      <Link to={HOME_URL}>[ Home Page ]</Link>
    </div>
  );
}

export { WithoutHiddenElementPage };
