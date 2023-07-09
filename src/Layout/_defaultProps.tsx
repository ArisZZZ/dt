import { ChromeFilled, CrownFilled } from "@ant-design/icons";

export default {
	route: {
		path: "/",
		routes: [
			{
				path: "/dashboard",
				name: "管理页",
				icon: <CrownFilled />,
			},
			{
				path: "/test",
				name: "test",
				icon: <CrownFilled />,
			},
			{
				path: "https://ant.design",
				name: "Ant Design 官网外链",
				icon: <ChromeFilled />,
			},
		],
	},
	location: {
		pathname: "/",
	},
};
