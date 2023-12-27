import { createStyles } from "antd-style";

const useStyles = createStyles(({ token }) => {
  return {
    ".ant-drawer-content-wrapper": {
      ".ant-drawer-body": { padding: "16px" },
    },
    ".ant-drawer-header": {
      padding: "16px",
      backgroundColor: token.black_navBg,
      borderBottom: "0",
      ".ant-drawer-header-title": {
        flexDirection: "row-reverse",
        ".ant-drawer-close": {
          marginRight: "0",
          lineHeight: "20px",
          width: "20px",
          height: "20px",
        },
      },
    },
    ".ant-drawer-right.ant-drawer-open .ant-drawer-content-wrapper": {
      boxShadow: "0 5px 22px 0 rgba(61, 68, 110, 0.2)",
    },
  };
});

export default useStyles;
