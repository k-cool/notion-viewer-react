import { Navigate, Routes, Route, BrowserRouter } from 'react-router-dom';
// pages
import TestPage from 'pages/TextPage';

export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				{/* <Route path="/" element={<Navigate to="blank" />} /> */}
				<Route path="/" element={<TestPage />} />
			</Routes>
		</BrowserRouter>
	);
}
