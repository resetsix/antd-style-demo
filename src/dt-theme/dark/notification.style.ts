import { createStyles } from "antd-style";

const useStyles = createStyles(({ token }) => {
  return {
    ".ant-notification-notice-with-icon": {
      ".ant-notification-notice-message": { color: token.whiteBF },
      ".ant-notification-notice-description": { color: token.white8C },
    },
    ".ant-notification-notice-close": {
      color: "#999",
      "&:hover": { color: "#999" },
    },
    "dt-notification-close-btn": {
      color: "#BFBFBF",
      cursor: "pointer",
      "&:hover": { color: "#BFBFBF" },
    },
  };
});

export default useStyles;
