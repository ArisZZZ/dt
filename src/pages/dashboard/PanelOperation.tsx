import { RingProgress } from "@ant-design/plots";
import { useState } from "react";
import { Card, Col, Row, Switch } from "antd";
import { Button } from "antd";
export default function PanelOperation() {
	const memoryRemaining = {
		height: 100,
		width: 100,
		autoFit: false,
		percent: 0.2,
		color: ["#5B8FF9", "#E8EDF3"],
	};
	const cpuUsage = {
		height: 100,
		width: 100,
		autoFit: false,
		percent: 0.3,
		color: ["#5B8FF9", "#E8EDF3"],
	};
	const diskRemaining = {
		height: 100,
		width: 100,
		autoFit: false,
		percent: 0.4,
		color: ["#5B8FF9", "#E8EDF3"],
	};
	const [count, setCount] = useState(100);
	return (
		<main className="panelOperation">
			<Row gutter={16}>
				<Col span={8}>
					<Card title="内存占比" bordered={false}>
						<RingProgress {...memoryRemaining} />
					</Card>
				</Col>
				<Col span={8}>
					<Card title="CPU占比" bordered={false}>
						<RingProgress {...memoryRemaining} />
					</Card>
				</Col>
				<Col span={8}>
					<Card title="磁盘占比" bordered={false}>
						<RingProgress {...memoryRemaining} />
					</Card>
				</Col>
			</Row>
			<div className="gamePanel">
				<h3>游戏状况</h3>
				<li>
					<p>饥荒状况：</p>
					<span>
						<Button>地面运行中</Button>
						<Button>洞穴运行中</Button>
					</span>
				</li>
				<li>
					<p>启动地面和洞穴:</p>
					<span>
						<Switch
							checkedChildren="开启"
							unCheckedChildren="关闭"
							defaultChecked
						/>
					</span>
				</li>
				<li>
					<p>启动地面：</p>
					<span>
						<Switch
							checkedChildren="开启"
							unCheckedChildren="关闭"
							defaultChecked
						/>
					</span>
				</li>
				<li>
					<p>启动洞穴：</p>
					<span>
						<Switch
							checkedChildren="开启"
							unCheckedChildren="关闭"
							defaultChecked
						/>
					</span>
				</li>
				<li>
					<p>快捷操作：</p>
					<span>
						<Button>更新游戏</Button>
						<Button>创建备份</Button>
					</span>
				</li>
				<li>
					<p>清理游戏存档：</p>
					<span>
						<Button>清理存档</Button>
						<Button>重置世界</Button>
					</span>
				</li>
				<li>
					<p>恢复游戏备份：</p>
					<span>
						<Button>恢复备份</Button>
					</span>
				</li>
			</div>
		</main>
	);
}
