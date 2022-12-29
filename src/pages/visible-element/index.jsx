import { toast } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { titleGenerator } from 'utils/title-generator';
import { VisibleHeader } from 'components/visible-header';
import { THANK_YOU_PAGE_URL } from 'constants/app-routes';
import { appSelectors } from 'store/app-data/app-selectors';
import { VisiblePizzaType } from 'components/visible-pizza-type';
import { VisiblePizzaSize } from 'components/visible-pizza-size';

function VisibleElementPage() {
  titleGenerator('Visible Element');
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
    <div>
      <VisibleHeader />
      <div className="w-full p-5 mx-auto max-w-5xl">
        <VisiblePizzaSize />
        <VisiblePizzaType />
        <div className="flex items-center justify-center mt-8">
          <button
            type="button"
            onClick={onSubmit}
            data-click="submit-btn"
            className="text-sm text-slate-50 bg-green-500 hover:bg-green-600 duration-300 px-4 leading-10 py-1 rounded-lg"
          >
            {`Submit Order ( ${Object.values(cart).reduce(
              (partialSum, a) => partialSum + a,
              0
            )}$ )`}
          </button>
        </div>
      </div>
    </div>
  );
}

export { VisibleElementPage };
