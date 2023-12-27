import { createStyles } from "antd-style";

const useStyles = createStyles(({ token }) => {
  return {
    ".ant-btn": {
      borderColor: token.primaryColor,
      color: token.primaryColor,
      "&:hover, &:focus": {
        borderColor: token.hoverColor,
        color: token.hoverColor,
      },
      "&:active, &.active": {
        color: token.clickColor,
        borderColor: token.clickColor,
      },
    },
    ".ant-btn-primary": {
      color: token.white,
      "&:hover, &:focus": {
        color: token.white,
        borderColor: token.hoverColor,
        backgroundColor: token.hoverColor,
      },
      "&:active, &.active": {
        color: token.white,
        backgroundColor: token.clickColor,
        borderColor: token.clickColor,
      },
    },
    ".ant-btn-link": {
      borderColor: "transparent",
      "&:hover, &:focus": { borderColor: "transparent" },
      "&:active, &.active": { borderColor: "transparent" },
    },
    ".ant-btn-link-disabled, .ant-btn-link.disabled, .ant-btn-link[disabled], .ant-btn-link-disabled:hover, .ant-btn-link.disabled:hover, .ant-btn-link[disabled]:hover, .ant-btn-link-disabled:focus, .ant-btn-link.disabled:focus, .ant-btn-link[disabled]:focus, .ant-btn-link-disabled:active, .ant-btn-link.disabled:active, .ant-btn-link[disabled]:active, .ant-btn-link-disabled.active, .ant-btn-link.disabled.active, .ant-btn-link[disabled].active":
      {
        color: token.white4D,
      },
  };
});

export default useStyles;
