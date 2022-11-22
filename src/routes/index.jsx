import {
	Route,
	Navigate,
	Routes as Switch,
	BrowserRouter as Router,
} from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { ScrollToTop } from "routes/ScrollToTop";
import { appSelectors } from "store/appData/appSelectors";

// PAGES
import { HomePage } from "pages";
import { NotFoundPage } from "pages/404";

function Routes() {
	const { darkMode } = useSelector(appSelectors.appData);

	useEffect(() => {
		console.log(darkMode);
		if (darkMode) {
			document.body.classList.add("dark");
		} else {
			document.body.classList.remove("dark");
		}
	}, [darkMode]);

	return (
		<Router>
			<ScrollToTop />
			<Switch>
				<Route path="/" element={<HomePage />} />
				<Route path="/404/" element={<NotFoundPage />} />
				<Route path="*" element={<Navigate to="/404/" />} />
			</Switch>
		</Router>
	);
}

export { Routes };
