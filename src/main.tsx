import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import HomePage from './pages/Home.tsx';
// import App from './App.tsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />,
	},
]);

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={router} />
		{/* <App /> */}
	</StrictMode>
);
