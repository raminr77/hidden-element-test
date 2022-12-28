import {
  Route,
  Navigate,
  Routes as Switch,
  BrowserRouter as Router
} from 'react-router-dom';
import { store } from 'store';
import { useEffect } from 'react';
import { AppLayout } from 'layouts';
import { ScrollToTop } from 'routes/scroll-to-top';
import { toggleDarkMode } from 'store/app-data/app-slice';
import { DARK_MODE_STORAGE_KEY } from 'constants/local-storage-keys';

// PAGES
import {
  HOME_URL,
  NOT_FOUNT_URL,
  HIDDEN_ELEMENT_PAGE_URL,
  VISIBLE_ELEMENT_PAGE_URL
} from 'constants/app-routes';

import { HomePage } from 'pages';
import { NotFoundPage } from 'pages/404';
import { HiddenElementPage } from 'pages/hidden-element';
import { VisibleElementPage } from 'pages/visible-element';

function Routes() {
  useEffect(() => {
    const hasDarkMode = !!localStorage.getItem(DARK_MODE_STORAGE_KEY);
    store.dispatch(toggleDarkMode(hasDarkMode));
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <AppLayout>
        <Switch>
          <Route path={HIDDEN_ELEMENT_PAGE_URL} element={<HiddenElementPage />} />
          <Route path={VISIBLE_ELEMENT_PAGE_URL} element={<VisibleElementPage />} />

          <Route path={NOT_FOUNT_URL} element={<NotFoundPage />} />
          <Route path={HOME_URL} element={<HomePage />} exact />
          <Route path="*" element={<Navigate to={NOT_FOUNT_URL} />} />
        </Switch>
      </AppLayout>
    </Router>
  );
}

export { Routes };
