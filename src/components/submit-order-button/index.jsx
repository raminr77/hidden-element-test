import { toast } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { CLICK_NAMES } from 'constants/click-names';
import { THANK_YOU_PAGE_URL } from 'constants/app-routes';
import { appSelectors } from 'store/app-data/app-selectors';

function SubmitOrderButton() {
  const navigate = useNavigate();
  const { cart, userEmail } = useSelector(appSelectors.appData);

  const onSubmit = () => {
    if (!userEmail) {
      toast.error('Please, join to our newsletters.');
      return;
    }
    navigate(THANK_YOU_PAGE_URL);
  };
  return (
    <div className="my-8 pb-4 flex justify-center items-center">
      <button
        type="button"
        onClick={onSubmit}
        data-click={CLICK_NAMES.SUBMIT_BTN}
        className="text-sm text-slate-50 bg-green-500 hover:bg-green-600 duration-300 px-4 leading-10 py-1 rounded-lg"
      >
        {`Submit Order ( ${Object.values(cart).reduce(
          (partialSum, a) => partialSum + a,
          0
        )}$ )`}
      </button>
    </div>
  );
}

export { SubmitOrderButton };
