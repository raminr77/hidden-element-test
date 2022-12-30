import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { store } from 'store';
import { TYPES } from 'constants/pizza';
import { CLICK_NAMES } from 'constants/click-names';
import { updateCartAction } from 'store/app-data/app-slice';
import { appSelectors } from 'store/app-data/app-selectors';

function VisiblePizzaType({ isVisible = true }) {
  const { pathname } = useLocation();
  const { cart } = useSelector(appSelectors.appData);
  const [selectedValue, setSelectedValue] = useState();

  const onSelect = ({ target }) => {
    const id = +target.value;
    const item = TYPES[id];
    setSelectedValue(id);
    store.dispatch(updateCartAction({ name: 'type', price: item.price }));
  };

  useEffect(() => {
    const filterd = Object.values(TYPES).filter((item) => item.price === cart?.type);
    setSelectedValue(filterd?.[0]?.id);
  }, [pathname]);

  return (
    <div>
      {isVisible && <h3 className="border-b border-solid pb-2 mb-4">Type</h3>}
      <div className="w-full flex-wrap flex items-center justify-center gap-4">
        {Object.values(TYPES).map((item) => (
          <label
            htmlFor={item.title}
            data-click={
              isVisible ? CLICK_NAMES.VISIBLE_TYPE_ITEM : CLICK_NAMES.HIDDEN_TYPE_ITEM
            }
            className={classNames(
              'w-full cursor-pointer border-2 border-transparent border-solid p-4 flex flex-col rounded-lg dark:bg-slate-600 bg-slate-100 shadow-md',
              {
                'border-green-500': selectedValue === item.id
              }
            )}
          >
            <h3 className="font-bold">{item.title}</h3>
            <p className="text-sm mt-2 whitespace-nowrap text-red-800 dark:text-rose-500">
              Price: {item.price}$
            </p>
            {item.description && (
              <p className="text-sm mt-2 leading-7">{item.description}</p>
            )}
            <input
              type="radio"
              name="type"
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

export { VisiblePizzaType };
