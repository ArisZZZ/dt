import { PageContainer, ProCard, ProLayout } from "@ant-design/pro-components";
import defaultProps from "./_defaultProps";
import { Link, Outlet } from "react-router-dom";

export const Layout = () => {
	return (
		<div
			id="test-pro-layout"
			style={{
				height: "100vh",
			}}
		>
			<ProLayout
				siderWidth={216}
				{...defaultProps}
				avatarProps={{
					src: "https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg",
					title: "七妮妮",
					size: "small",
				}}
				menuItemRender={(menuItemProps, defaultDom) => {
					// console.log("[ m ] >", menuItemProps, defaultDom);
					// <Link>
					return <Link to={menuItemProps.path}> {defaultDom}</Link>;
				}}
			>
				<PageContainer>
					<ProCard
						style={{
							height: "100vh",
							minHeight: 800,
						}}
					>
						<Outlet />
					</ProCard>
				</PageContainer>
			</ProLayout>
		</div>
	);
};
