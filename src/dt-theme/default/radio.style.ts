import { createStyles } from "antd-style";

const useStyles = createStyles(({ token }) => {
  return {
    ".ant-radio-wrapper": {
      alignItems: "center",
      lineHeight: "16px",
      paddingTop: "0.4em",
      ".ant-radio": { top: "0" },
      ".ant-radio-disabled": {
        ".ant-radio-inner::after": {
          backgroundColor: token.black_border,
        },
      },
    },
  };
});

export default useStyles;
