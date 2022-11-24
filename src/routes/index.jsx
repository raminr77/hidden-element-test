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
  ABOUT_US_URL,
  THANK_YOU_URL,
  NOT_FOUNT_URL,
  CONTACT_US_URL,
  WITH_HIDDEN_ELEMENT_URL,
  WITHOUT_HIDDEN_ELEMENT_URL
} from 'constants/app-routes';

import { HomePage } from 'pages';
import { NotFoundPage } from 'pages/404';
import { AboutUsPage } from 'pages/about-us';
import { ThankYouPage } from 'pages/thank-you';
import { ContactUsPage } from 'pages/contact-us';
import { WithHiddenElementPage } from 'pages/with-hidden-element-page';
import { WithoutHiddenElementPage } from 'pages/without-hidden-element-page';

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
          <Route path={WITH_HIDDEN_ELEMENT_URL} element={<WithHiddenElementPage />} />
          <Route
            path={WITHOUT_HIDDEN_ELEMENT_URL}
            element={<WithoutHiddenElementPage />}
          />
          <Route path={THANK_YOU_URL} element={<ThankYouPage />} />
          <Route path={ABOUT_US_URL} element={<AboutUsPage />} />
          <Route path={CONTACT_US_URL} element={<ContactUsPage />} />
          <Route path={NOT_FOUNT_URL} element={<NotFoundPage />} />
          <Route path={HOME_URL} element={<HomePage />} exact />
          <Route path="*" element={<Navigate to={NOT_FOUNT_URL} />} />
        </Switch>
      </AppLayout>
    </Router>
  );
}

export { Routes };
