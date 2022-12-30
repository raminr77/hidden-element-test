import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { store } from 'store';
import { HOME_URL } from 'constants/app-routes';
import { showConfetti } from 'utils/show-confetti';
import { titleGenerator } from 'utils/title-generator';
import { resetAction } from 'store/app-data/app-slice';
import { appSelectors } from 'store/app-data/app-selectors';
import { calculateData } from 'utils/calculate-data';

function ThankYouPage() {
  showConfetti();
  titleGenerator('Thank You');
  const { clicks } = useSelector(appSelectors.appData);

  calculateData(clicks);

  return (
    <div className="w-full px-5">
      <div className="animate__animated animate__fadeIn flex shadow-lg flex-col bg-slate-100 dark:bg-slate-700 p-5 rounded-lg max-w-lg mx-auto mt-10">
        <h3 className="mb-2 text-2xl font-bold text-green-500">Thank You</h3>
        <p className="text-sm leading-7 mb-6">
          Your test information has been successfully registered.
          <br />
          We try to use this information in our research to improve the user experience on
          the web pages.
        </p>

        <Link
          to={HOME_URL}
          onClick={() => store.dispatch(resetAction())}
          className="bg-green-600 rounded-lg px-5 duration-300 text-slate-50 leading-9 w-fit mx-auto hover:bg-green-500 py-1"
        >
          Start Again
        </Link>
      </div>
    </div>
  );
}
export { ThankYouPage };
