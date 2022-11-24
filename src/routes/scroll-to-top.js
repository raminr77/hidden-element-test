import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { store } from 'store';
import { changeHeaderTitle } from 'store/app-data/app-slice';

import {
  WITH_HIDDEN_ELEMENT_URL,
  WITHOUT_HIDDEN_ELEMENT_URL
} from 'constants/app-routes';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    const title =
      pathname === WITH_HIDDEN_ELEMENT_URL || pathname === WITHOUT_HIDDEN_ELEMENT_URL
        ? 'Your Favorite Pizza'
        : '';

    store.dispatch(changeHeaderTitle(title));
  }, [pathname]);

  return null;
}

export { ScrollToTop };
