import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

//createBrowserRoute : wraps our routes(url), It uses the DOM History API to update the URL and manage the history stack.
const router = createBrowserRouter([
	{
		path: '/',
		element: <div> browser router has been created</div>,
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
