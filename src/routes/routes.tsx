import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import { Layout } from "../Layout/Layout";
import { Test } from "../pages/test";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "dashboard",
				element: <Dashboard />,
			},
			{
				path: "test",
				element: <Test />,
			},
		],
	},
]);

export default router;
