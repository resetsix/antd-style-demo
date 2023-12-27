import { createStyles } from "antd-style";

const useStyles = createStyles(({ token }) => {
  return {
    ".ant-alert": {
      fontSize: "14px",
      lineHeight: "22px",
      "> .ant-alert-icon": { alignSelf: "flex-start", marginTop: "3px" },
      "> .ant-alert-close-icon": { alignSelf: "flex-start", marginTop: "5px" },
    },
    ".ant-alert-success": {
      backgroundColor: "#E7FBF7",
      border: "1px solid #E7FBF7",
    },
    ".ant-alert-warning": {
      backgroundColor: "#FFF4D9",
      border: "1px solid #FFF4D9",
    },
    ".ant-alert-error": {
      backgroundColor: "#FDE9E7",
      border: "1px solid #FDE9E7",
    },
    ".ant-alert-info": {
      backgroundColor: "#E8F1FF",
      border: "1px solid #E8F1FF",
    },
    ".ant-alert-description": {
      color: token.black_pageMsg,
    },
    ".ant-message-notice-content": {
      minHeight: "40px",
      color: token.black_title,
      boxShadow: "0 5px 22px 0 rgba(61, 68, 110, 0.2)",
    },
    anticon: {
      fontSize: "20px",
      top: "3px",
    },
    "dt-notification-close-btn": {
      color: token.black_pageMsg,
      top: "19px",
      position: "absolute",
      right: "36px",
      lineHeight: "17px",
      fontSize: "12px",
      fontWeight: "normal",
      userSelect: "none",
      "&:hover": { color: token.black_Desc },
    },
    ".ant-notification": {
      width: "360px",
      ".ant-notification-notice-close": {
        right: "16px",
        top: "19px",
        ".ant-notification-notice-close-x": {
          color: token.black_msg,
          "&:hover": { color: token.black_title },
        },
      },
    },
    ".ant-notification-notice": {
      width: "360px",
      padding: "16px",
      boxShadow: "0 5px 22px 0 rgba(61, 68, 110, 0.2)",
    },
    ".ant-notification-notice-icon": {
      marginLeft: "0",
      fontSize: "20px",
      lineHeight: "16px",
    },
    ".ant-notification-notice-btn": {
      marginTop: "12px",
    },
    ".ant-notification-notice-with-icon": {
      ".ant-notification-notice-message": {
        fontSize: "14px",
        height: "22px",
        lineHeight: "22px",
        marginLeft: "28px",
        marginBottom: "4px",
        fontWeight: "500",
      },
      ".ant-notification-notice-description": {
        color: token.black_pageMsg,
        wordBreak: "break-all",
        marginLeft: "28px",
        wordWrap: "break-word",
      },
    },
  };
});

export default useStyles;
