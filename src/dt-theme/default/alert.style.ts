import { createStyles } from "antd-style";

const useStyles = createStyles(({ token }) => {
  return {
    ".ant-alert.ant-alert-no-icon": {
      padding: "12px 16px",
    },
    ".ant-alert-icon": {
      top: "13px",
      left: "16px",
      fontSize: "16px",
    },
    ".ant-alert-close-icon": {
      top: "10px",
      right: "14px",
    },
    ".ant-alert-close-icon .anticon-close": {
      color: token.black_pageMsg,
      "&:hover": { color: token.black_Desc },
    },
    ".ant-alert-with-description": {
      padding: "12px 16px",
      ".ant-alert-icon": {
        top: "13px",
        left: "20px",
        fontSize: "16px",
        marginTop: "3px",
        marginRight: "8px",
      },
      ".ant-alert-close-icon": { top: "12px" },
    },
    "operate-btn": {
      float: "right",
    },
    ".ant-alert-action": {
      lineHeight: "20px",
      fontWeight: "400",
      fontSize: "12px",
      marginRight: "31px",
    },
  };
});

export default useStyles;
