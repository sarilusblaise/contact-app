import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Root, {
	loader as rootLoader,
	action as rootAction,
} from './routes/root';
import ErrorPage from './error-page';
import Contact from './routes/contact';
import {
	loader as contactLoader,
	action as contactAction,
} from './routes/contact';
import { loader as editLoader } from './routes/edit';
import EditContact, { action as editAction } from './routes/edit';
import { action as destroyAction } from './routes/destroy';
import Index from './routes';
//createBrowserRoute : wraps our routes(url), It uses the DOM History API to update the URL and manage the history stack.
const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <ErrorPage />,
		loader: rootLoader,
		action: rootAction,
		children: [
			{
				index: true,
				element: <Index />,
			},
			{
				path: 'contacts/:contactId',
				element: <Contact />,
				loader: contactLoader,
				action: contactAction,
			},
			{
				path: 'contacts/:contactId/edit',
				element: <EditContact />,
				loader: editLoader,
				action: editAction,
			},
			{
				path: 'contacts/:contactId/destroy',
				action: destroyAction,
				errorElement: <div>Oops! There was an error.</div>,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
