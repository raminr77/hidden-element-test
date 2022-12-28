import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import { store } from 'store';
import { titleGenerator } from 'utils/title-generator';
import { setUserDataAction } from 'store/app-data/app-slice';
import { DarkModeButton } from 'components/dark-mode-button';
import { START_TIME_STORAGE_KEY } from 'constants/local-storage-keys';
import { HIDDEN_ELEMENT_PAGE_URL, VISIBLE_ELEMENT_PAGE_URL } from 'constants/app-routes';

import LOGO_IMAGE from 'assets/pizza.png';

const TESTS = {
  HIDDEN_ELEMENT: 'HIDDEN_ELEMENT',
  VISIBLE_ELEMENT: 'VISIBLE_ELEMENT'
};

function HomePage() {
  titleGenerator();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    age: '',
    job: ''
  });

  const onChanges = ({ target }) => {
    setUserData({ ...userData, [target.name]: target.value });
  };

  const onStart = (testName) => () => {
    if (!userData.age || !userData.job) {
      toast.error('Please, fill all the fields.');
      return;
    }
    if (testName === TESTS.HIDDEN_ELEMENT) {
      navigate(HIDDEN_ELEMENT_PAGE_URL);
    }
    if (testName === TESTS.VISIBLE_ELEMENT) {
      navigate(VISIBLE_ELEMENT_PAGE_URL);
    }
    store.dispatch(setUserDataAction(userData));
    localStorage.setItem(START_TIME_STORAGE_KEY, new Date().getTime());
  };

  const classes = {
    input:
      'px-4 bg-transparent duration-300 rounded-lg leading-10 outline-none border-2 border-solid focus:border-amber-500',
    button:
      'w-full duration-300 rounded-lg py-1 leading-9 text-slate-50 bg-rose-700 hover:bg-rose-600'
  };

  return (
    <div className="p-5 w-full max-w-sm mx-auto h-screen flex flex-col items-center justify-center gap-y-4">
      <img alt="PIZZA WIZARD" src={LOGO_IMAGE} className="mb-5" />

      <div className="flex flex-col w-full text-sm bg-slate-100 dark:bg-slate-600 p-4 rounded-lg">
        <h3 className="mb-2 font-bold">Your Tasks:</h3>
        <ul>
          <li className="mb-2">1 - Join to our newsletter.</li>
          <li>2 - Order your favorite pizza.</li>
        </ul>
      </div>

      <div className="w-full flex flex-col gap-y-2">
        <span className="text-sm">Your Age</span>
        <input
          min={10}
          max={100}
          name="age"
          type="number"
          value={userData.age}
          onChange={onChanges}
          className={classes.input}
          placeholder="Enter Your Age"
        />
      </div>

      <div className="w-full flex flex-col gap-y-2 mb-2">
        <span className="text-sm">Your Job Title</span>
        <input
          name="job"
          value={userData.job}
          onChange={onChanges}
          className={classes.input}
          placeholder="Enter Your Job Title"
        />
      </div>

      <button
        type="button"
        className={classes.button}
        onClick={onStart(TESTS.VISIBLE_ELEMENT)}
      >
        Visible Element Test
      </button>
      <button
        type="button"
        className={classes.button}
        onClick={onStart(TESTS.HIDDEN_ELEMENT)}
      >
        Hidden Element Test
      </button>

      <DarkModeButton className="absolute top-4 left-4" />
    </div>
  );
}

export { HomePage };
