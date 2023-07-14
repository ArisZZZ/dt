import { Button } from "antd";
import TextArea from "antd/es/input/TextArea";

export default function RemoteOperation() {
	return (
		<div className="remoteOperation">
			<li>
				<p>地面控制台</p>
				<span>
					<TextArea rows={4} placeholder="地面控制台" maxLength={6} />
				</span>
				<span>
					<Button>发送</Button>
				</span>
			</li>
			<li>
				<p>洞穴控制台</p>
				<span>
					<TextArea rows={4} placeholder="洞穴控制台" maxLength={6} />
				</span>
				<span>
					<Button>发送</Button>
				</span>
			</li>
			<li>
				<p>广播</p>
				<span>
					<TextArea rows={4} placeholder="广播" maxLength={6} />
				</span>
				<span>
					<Button>发送</Button>
				</span>
			</li>
			<li>
				<p>快捷操作</p>
				<span>
					<Button>回档一天</Button>
					<Button>回档两天</Button>
				</span>
			</li>
		</div>
	);
}
