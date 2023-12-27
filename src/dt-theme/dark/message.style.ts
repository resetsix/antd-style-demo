import { createStyles } from "antd-style";

const useStyles = createStyles(({ token }) => {
  return {
    ".ant-message-notice-content": {
      boxShadow: "0 2px 8px 0 #06070A",
      height: "40px",
      fontSize: "14px",
      color: token.whiteBF,
    },
    anticon: {
      fontSize: "16px",
    },
  };
});

export default useStyles;
