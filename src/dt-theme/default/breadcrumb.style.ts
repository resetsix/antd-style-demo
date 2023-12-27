import { createStyles } from "antd-style";

const useStyles = createStyles(({ token }) => {
  return {
    ".ant-breadcrumb": {
      color: token.black_pageMsg,
      fontWeight: "400",
      fontSize: "12px",
      lineHeight: "20px",
      a: {
        height: "20px",
        lineHeight: "20px",
        color: token.black_pageMsg,
        "&:hover": {
          color: token.primaryColor,
        },
        "&:active": {
          color: token.clickColor,
        },
      },
    },
    ".ant-breadcrumb-separator": {
      color: token.black_msg,
      margin: "0 4px",
    },
    anticon: {
      fontSize: "12px",
    },
  };
});

export default useStyles;
