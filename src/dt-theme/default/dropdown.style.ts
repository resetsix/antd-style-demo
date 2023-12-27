import { createStyles } from "antd-style";

const useStyles = createStyles(({ token }) => {
  return {
    ".ant-dropdown-menu": {
      padding: "8px 0",
    },
    ".ant-dropdown-button": {
      ".ant-btn-icon-only": {
        backgroundColor: token.primaryColor,
        "&:hover": {
          backgroundColor: token.hoverColor,
        },
        "&:active": {
          backgroundColor: token.clickColor,
        },
      },
    },
  };
});

export default useStyles;
