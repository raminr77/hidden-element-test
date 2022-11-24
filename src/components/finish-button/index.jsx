import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { THANK_YOU_URL } from 'constants/app-routes';
import { appSelectors } from 'store/app-data/app-selectors';

function FinishButton() {
  const navigate = useNavigate();
  const { totalPrice } = useSelector(appSelectors.appData);

  const action = () => {
    return navigate(THANK_YOU_URL);
  };

  return (
    <button
      type="button"
      onClick={action}
      disabled={totalPrice === 0}
      className="flex items-center disabled:bg-gray justify-center mt-3 w-full max-w-xl lg:max-w-xs bg-successHover hover:bg-success duration-300 px-8 rounded-md leading-10 text-light py-1 text-lg"
    >
      Finish <span className="text-sm ml-2">[ ${totalPrice} ]</span>
    </button>
  );
}

export { FinishButton };
