import {
	Route,
	Navigate,
	Routes as Switch,
	BrowserRouter as Router,
} from "react-router-dom";
import { ScrollToTop } from "routes/ScrollToTop";

// PAGES
import { NotFoundPage } from "pages/404";

export function Routes() {
	return (
		<Router>
			<ScrollToTop />
			<Switch>
				<Route path="/404/" element={<NotFoundPage />} />
				<Route path="*" element={<Navigate to="/404/" />} />
			</Switch>
		</Router>
	);
}
