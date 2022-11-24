import { Link } from 'react-router-dom';
import { HOME_URL } from 'constants/app-routes';

function WithHiddenElementPage() {
  return (
    <div>
      <h1>With Hidden Element Page</h1>
      <Link to={HOME_URL}>[ Home Page ]</Link>
    </div>
  );
}

export { WithHiddenElementPage };
