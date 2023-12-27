import { createStyles } from "antd-style";

const useStyles = createStyles(({ token }) => {
  return {
    ".ant-btn": {
      lineHeight: "100%",
      boxShadow: "unset",
    },
    "anticon-minus, .anticon-plus": {
      fontSize: "13px",
    },
    ".ant-btn.ant-btn-primary": {
      textShadow: "unset",
      "&:hover, &:focus": {
        backgroundColor: token.hoverColor,
        borderColor: token.hoverColor,
        color: token.white,
      },
      "&:active": {
        color: token.white,
        backgroundColor: token.clickColor,
        borderColor: token.clickColor,
      },
    },
    "ant-btn-loading": {
      borderColor: token.loadingColor,
      backgroundColor: token.loadingColor,
    },
    ".ant-btn.ant-btn-default": {
      color: token.black_title,
      borderColor: token.black_border,
      "&:hover, &:focus": {
        borderColor: token.hoverColor,
        color: token.hoverColor,
      },
      "&:active": { color: token.clickColor, borderColor: token.clickColor },
    },
    ".ant-btn.ant-btn-link": {
      color: token.primaryColor,
      height: "20px",
      lineHeight: "20px",
      padding: "0",
      border: "0",
      "&:hover, &:focus": {
        color: token.hoverColor,
        height: "20px",
        lineHeight: "20px",
        padding: "0",
        border: "0",
      },
      "&:active": {
        color: token.clickColor,
        height: "20px",
        lineHeight: "20px",
        padding: "0",
        border: "0",
      },
    },
    ".ant-btn.ant-btn-link[disabled]": {
      color: token.black_msg,
      borderColor: "transparent",
      background: "0 0",
      backgroundColor: "transparent",
      textShadow: "none",
      boxShadow: "none",
      height: "20px",
      lineHeight: "20px",
      padding: "0",
      border: "0",
      "&:hover, &:focus, &:active": {
        color: token.black_msg,
        borderColor: "transparent",
        background: "0 0",
        textShadow: "none",
        boxShadow: "none",
        height: "20px",
        lineHeight: "20px",
        padding: "0",
        border: "0",
      },
    },
    ".ant-btn-dangerous.ant-btn-primary": {
      backgroundColor: token.red,
      "&:hover, &:focus": {
        backgroundColor: "#ED5340",
        borderColor: "#ED5340",
      },
      "&:active": { backgroundColor: "#E03A26", borderColor: "#E03A26" },
    },
    ".ant-btn-dangerous.ant-btn-default": {
      color: token.red,
      borderColor: token.red,
      "&:hover, &:focus": { color: "#ED5340", borderColor: "#ED5340" },
      "&:active": { color: "#E03A26", borderColor: "#E03A26" },
    },
    ".ant-btn[disabled]": {
      color: token.black_msg,
      backgroundColor: token.black_readonly,
      borderColor: token.black_readonly,
      "&:hover, &:focus, &:active": {
        color: token.black_msg,
        backgroundColor: token.black_readonly,
        borderColor: token.black_readonly,
      },
    },
    ".ant-btn-background-ghost": {
      color: token.primaryColor,
      borderColor: token.primaryColor,
    },
    ".ant-btn.ant-btn-background-ghost": {
      color: token.primaryColor,
      borderColor: token.primaryColor,
      "&:hover, &:focus": { borderColor: token.hoverColor },
      "&:active, &.active": { borderColor: token.clickColor },
    },
    ".ant-btn-background-ghost.ant-btn-disabled, .ant-btn-background-ghost.ant-btn.disabled, .ant-btn-background-ghost.ant-btn[disabled], .ant-btn-background-ghost.ant-btn-disabled:hover, .ant-btn-background-ghost.ant-btn.disabled:hover, .ant-btn-background-ghost.ant-btn[disabled]:hover, .ant-btn-background-ghost.ant-btn-disabled:focus, .ant-btn-background-ghost.ant-btn.disabled:focus, .ant-btn-background-ghost.ant-btn[disabled]:focus, .ant-btn-background-ghost.ant-btn-disabled:active, .ant-btn-background-ghost.ant-btn.disabled:active, .ant-btn-background-ghost.ant-btn[disabled]:active, .ant-btn-background-ghost.ant-btn-disabled.active, .ant-btn-background-ghost.ant-btn.disabled.active, .ant-btn-background-ghost.ant-btn[disabled].active":
      {
        color: token.black_msg,
        backgroundColor: token.black_readonly,
        borderColor: token.black_readonly,
      },
    "anticon-search": {
      marginLeft: "7px",
      width: "14px",
      height: "14px",
    },
    "anticon + span": {
      marginLeft: "4px",
    },
    "ant-btn:hover, ant-btn:focus": {
      color: token.primaryColor,
      borderColor: token.primaryColor,
    },
    "ant-btn:active, ant-btn.active": {
      color: token.clickColor,
      borderColor: token.clickColor,
    },
    "ant-btn-disabled, ant-btn.disabled, ant-btn[disabled], ant-btn-disabled:hover, ant-btn.disabled:hover, ant-btn[disabled]:hover, ant-btn-disabled:focus, ant-btn.disabled:focus, ant-btn[disabled]:focus, ant-btn-disabled:active, ant-btn.disabled:active, ant-btn[disabled]:active, ant-btn-disabled.active, ant-btn.disabled.active, ant-btn[disabled].active":
      {
        color: token.black_msg,
        backgroundColor: token.black_readonly,
        borderColor: token.black_readonly,
      },
    "ant-btn": {
      color: token.primaryColor,
      borderColor: token.primaryColor,
      paddingLeft: "12px",
      paddingRight: "12px",
    },
    ".ant-btn.ant-btn-sm": {
      borderRadius: "2px",
    },
    ".ant-btn-icon-only": {
      padding: "0",
      width: "48px",
      height: "32px",
      background: token.blue,
      color: token.white,
    },
    "dt-btn-icon": {
      border: "none",
      color: token.black_Desc,
      "&:hover": { color: token.hoverColor },
      "&:active": { color: token.clickColor },
    },
    "dt-btn-icon[ant-click-animating-without-extra-node]::after": {
      border: "0 none",
      opacity: "0",
      animation: "none 0 ease 0 1 normal",
    },
    "dt-btn-icon[disabled]": {
      border: "none",
      color: token.colorTextDisabled,
      backgroundColor: "transparent",
      "&:hover": { backgroundColor: "transparent" },
    },
    "dt-btn-icon-primary": {
      border: "none",
      color: token.blue,
      "&:hover": { color: token.hoverColor },
      "&:active": { color: token.clickColor },
    },
    "dt-btn-icon-primary[ant-click-animating-without-extra-node]::after": {
      border: "0 none",
      opacity: "0",
      animation: "none 0 ease 0 1 normal",
    },
    "dt-btn-icon-primary[disabled]": {
      border: "none",
      color: token.colorTextDisabled,
      backgroundColor: "transparent",
      "&:hover": { backgroundColor: "transparent" },
    },
  };
});

export default useStyles;
