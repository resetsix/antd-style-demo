import { createStyles } from "antd-style";

const useStyles = createStyles(({ token }) => {
  return {
    ".ant-popover": {
      ".ant-popover-inner": {
        padding: "16px",
        boxShadow: "0 5px 22px 0 rgba(61, 68, 110, 0.2)",
        ".ant-popover-buttons": {
          ".ant-btn": { borderRadius: "2px" },
        },
      },
      ".ant-popover-title": {
        padding: "0",
        borderBottom: "none",
        minHeight: "22px",
        fontSize: "14px",
        fontWeight: "500",
        fontFamily: 'PingFangSC-Medium, "PingFang SC"',
        marginBottom: "4px",
      },
      ".ant-popover-message-title": {
        color: token.black_title,
        fontSize: "12px",
        fontFamily: 'PingFangSC-Regular, "PingFang SC"',
        paddingLeft: "25px",
      },
      ".ant-popover-message": {
        "& > .anticon": {
          fontSize: "20px",
          top: "2px",
        },
      },
      ".ant-popover-inner-content": { padding: "0" },
    },
    ".ant-popconfirm": {
      minWidth: "200px",
    },
  };
});

export default useStyles;
