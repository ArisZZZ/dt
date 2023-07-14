import { RingProgress } from "@ant-design/plots";
import { useState } from "react";
import { Switch } from "antd";
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
		<div className="panelOperation">
			<div className="memoryFootprint">
				<div className="memoryUsage">
					<p>
						饥荒内存占用情况
						<h3>100MB</h3>
						虚拟内存{count}MB
					</p>
				</div>
				<div className="memoryRemaining">
					<RingProgress {...memoryRemaining} />
					<p>
						内存剩余
						<h3>{count - memoryRemaining.percent}MB</h3>
						总内存{count}MB
					</p>
				</div>
				<div className="cpuUsage">
					<RingProgress {...cpuUsage} />
					<p>
						CPU使用
						<h3>{count - cpuUsage.percent}MB</h3>
						CPU核心数{count}MB
					</p>
				</div>
				<div className="diskRemaining">
					<RingProgress {...diskRemaining} />
					<p>
						磁盘剩余
						<h3>{count - diskRemaining.percent}MB</h3>
						总存储{count}MB
					</p>
				</div>
			</div>
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
		</div>
	);
}
