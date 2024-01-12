import {App} from './components/App';
import {createRoot} from "react-dom/client";
import React, {Suspense} from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {AboutPageLazy} from "@/pages/AboutPage";
import {ShopPageLazy} from "@/pages/ShopPage";

const root = document.getElementById('root');

if (!root) {
	throw new Error('Root has not been found');
}

const container = createRoot(root);

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/about',
				element: <Suspense fallback={'Loading...'}><AboutPageLazy /></Suspense>
			},
			{
				path: '/shop',
				element: <Suspense fallback={'Loading...'}><ShopPageLazy /></Suspense>
			}
		]
	}
]);

container.render(
	<RouterProvider router={router} />
);
