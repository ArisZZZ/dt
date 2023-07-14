import { Tabs } from "antd";
import type { TabsProps } from "antd";
import PanelOperation from "./PanelOperation";
import RemoteOperation from "./RemoteOperation";
import GroundLog from "./GroundLog";
import CaveLog from "./CaveLog";
const onChange = (key: string) => {
	console.log(key);
};

const items: TabsProps["items"] = [
	{
		key: "1",
		label: `面板操作`,
		children: <PanelOperation />,
	},
	{
		key: "2",
		label: `远程操作`,
		children: <RemoteOperation />,
	},
	{
		key: "3",
		label: `地面日志`,
		children: <GroundLog />,
	},
	{
		key: "4",
		label: `洞穴日志`,
		children: <CaveLog />,
	},
];

const Dashboard = () => {
	return (
		<div>
			<Tabs defaultActiveKey="1" items={items} onChange={onChange} />
		</div>
	);
};

export default Dashboard;
