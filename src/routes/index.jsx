import {
  Route,
  Navigate,
  Routes as Switch,
  BrowserRouter as Router
} from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ScrollToTop } from 'routes/scroll-to-top';
import { appSelectors } from 'store/app-data/app-selectors';
import { HOME_URL, NOT_FOUNT_URL } from 'constants/appRoutes';

// PAGES
import { HomePage } from 'pages';
import { NotFoundPage } from 'pages/404';

function Routes() {
  const { darkMode } = useSelector(appSelectors.appData);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route path={HOME_URL} element={<HomePage />} exact />
        <Route path={NOT_FOUNT_URL} element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to={NOT_FOUNT_URL} />} />
      </Switch>
    </Router>
  );
}

export { Routes };
