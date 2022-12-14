import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import { store } from 'store';
import { HOME_URL } from 'constants/app-routes';
import { showConfetti } from 'utils/show-confetti';
import { calculateData } from 'utils/calculate-data';
import { titleGenerator } from 'utils/title-generator';
import { resetAction } from 'store/app-data/app-slice';
import { appSelectors } from 'store/app-data/app-selectors';

function ThankYouPage() {
  titleGenerator('Thank You');
  const [showResult, setShowResult] = useState(false);
  const { userAge, userJob, userEmail, clicks } = useSelector(appSelectors.appData);

  const user = {
    age: userAge,
    job: userJob,
    email: userEmail
  };

  const result = calculateData(user, clicks);
  const titleClasses =
    'font-bold text-slate-500 dark:text-slate-300 border-b border-solid border-slate-300 dark:border-slate-600 mb-2 pb-1';

  useEffect(() => {
    showConfetti();
    calculateData(user, clicks, true);
  }, []);

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

      {showResult && (
        <div className="animate__animated overflow-hidden leading-9 text-sm px-5 w-full max-w-md mx-auto mt-8">
          <p className={titleClasses}>USER</p>
          <ul className="list-disc mb-4">
            <li>{`User Age: ${result.user.age}`}</li>
            <li>{`User Job: ${result.user.job}`}</li>
          </ul>

          <p className={titleClasses}>TIME</p>
          <ul className="list-disc mb-4">
            <li>{`Time: ${result.time}`}</li>
          </ul>

          <p className={titleClasses}>BUTTONS</p>
          <ul className="list-disc mb-4">
            <li>{`Back Button: ${result.back}`}</li>
            <li>{`Submit Order Button: ${result.submit}`}</li>
            <li>{`Call To Action Button: ${result.cta}`}</li>
            <li>{`Change Theme Button: ${result.theme}`}</li>
          </ul>

          <p className={titleClasses}>VISIBLE</p>
          <ul className="list-disc mb-4">
            <li>{`Pizza Size: ${result.visible.size}`}</li>
            <li>{`Pizza Type: ${result.visible.type}`}</li>
            <li>{`Header Button: ${result.visible.headerItem}`}</li>
          </ul>

          <p className={titleClasses}>HIDDEN</p>
          <ul className="list-disc">
            <li>{`Pizza Size: ${result.hidden.size}`}</li>
            <li>{`Pizza Type: ${result.hidden.type}`}</li>
            <li>{`Pizza Size Hover: ${result.hidden.sizeHover}`}</li>
            <li>{`Pizza Type Hover: ${result.hidden.typeHover}`}</li>
            <li>{`Accordion Clicks: ${result.hidden.accordion}`}</li>
            <li>{`Burger Menu Item: ${result.hidden.burgerItem}`}</li>
          </ul>
        </div>
      )}

      <button
        type="button"
        className="w-full mt-10 mb-10 text-sm"
        onClick={() => setShowResult(!showResult)}
      >
        {`[ ${showResult ? 'Hide' : 'Show'} Result ]`}
      </button>
      <br />
      <br />
      <br />
    </div>
  );
}
export { ThankYouPage };
