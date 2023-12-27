import { Button, Space } from "antd";
import { createStyles } from "antd-style";

const useStyles = createStyles(({ token, css }) => {
	const commonCard = css`
		border-radius: ${token.borderRadiusLG}px;
		padding: ${token.paddingLG}px;
	`;

	return {
		container: css`
			background-color: ${token.colorBgLayout};
			padding: 24px;
		`,

		primaryCard: css`
			${commonCard};
			background: ${token.colorPrimary};
			color: ${token.colorTextLightSolid};
		`,

		defaultCard: css`
			${commonCard};
			background: ${token.colorBgContainer};
			color: ${token.colorText};
		`,
	};
});

const App = () => {
	// const { styles, theme } = useStyles();

	const { styles } = useStyles();

	return (
		// <Flex justify="center" align="center" style={{ height: "100vh" }}>
		// 	<Button className={styles["anticon-search"]}>
		// 		按钮, {token.primaryColor}
		// 	</Button>
		// 	<Input placeholder="输入" className={styles["anticon-search"]} />
		// </Flex>
		<div className={styles.container}>
			<Space direction={"vertical"} style={{ width: "100%" }} size={16}>
				<Space>
					<Button title={"功能按钮的说明"} />
					操作按钮
				</Space>
				<div className={styles.defaultCard}>普通卡片</div>
				<div className={styles.primaryCard}>主要卡片</div>
			</Space>
		</div>
	);
};

export default App;
