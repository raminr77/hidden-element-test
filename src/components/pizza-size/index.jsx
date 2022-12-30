import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { store } from 'store';
import { SIZES } from 'constants/pizza';
import { CLICK_NAMES } from 'constants/click-names';
import { updateCartAction } from 'store/app-data/app-slice';
import { appSelectors } from 'store/app-data/app-selectors';

function VisiblePizzaSize({ isVisible = true }) {
  const { pathname } = useLocation();
  const { cart } = useSelector(appSelectors.appData);
  const [selectedValue, setSelectedValue] = useState();

  const onSelect = ({ target }) => {
    const id = +target.value;
    const item = SIZES[id];
    setSelectedValue(id);
    store.dispatch(updateCartAction({ name: 'size', price: item.price }));
  };

  useEffect(() => {
    const filterd = Object.values(SIZES).filter((item) => item.price === cart?.size);
    setSelectedValue(filterd?.[0]?.id);
  }, [pathname]);

  return (
    <div>
      {isVisible && <h3 className="border-b border-solid pb-2 mb-4">Size</h3>}
      <div className="w-full flex-wrap flex items-center justify-center gap-4">
        {Object.values(SIZES).map((item) => (
          <label
            htmlFor={item.title}
            data-click={
              isVisible ? CLICK_NAMES.VISIBLE_SIZE_ITEM : CLICK_NAMES.HIDDEN_SIZE_ITEM
            }
            className={classNames(
              'cursor-pointer border-2 border-transparent border-solid p-4 flex flex-col items-center rounded-lg dark:bg-slate-600 bg-slate-100 shadow-md',
              {
                'border-green-500': selectedValue === item.id
              }
            )}
          >
            <h3 className="font-bold">{item.title}</h3>
            {item.description && (
              <p className="text-sm mt-2 whitespace-nowrap">{item.description}</p>
            )}
            <p className="text-sm mt-2 whitespace-nowrap text-red-800 dark:text-rose-500">
              Price: {item.price}$
            </p>
            <input
              type="radio"
              name="size"
              id={item.title}
              value={item.id}
              className="hidden"
              onChange={onSelect}
              checked={item.id === selectedValue}
            />
          </label>
        ))}
      </div>
    </div>
  );
}

export { VisiblePizzaSize };