import { createStyles } from "antd-style";

const useStyles = createStyles(({ token }) => {
  return {
    ".ant-popover": {
      ".ant-popover-content": {
        border: "1px solid #282B40",
        borderRadius: "3px",
        ".ant-popover-inner-content": {
          padding: "16px",
        },
      },
    },
    ".ant-popover-buttons": {
      textAlign: "left",
      margin: "0",
      button: {
        marginRight: "10px",
        marginLeft: "0",
        "&:last-child": {
          color: token.white,
          borderColor: token.red_dark,
          backgroundColor: token.red_dark,
          "&:hover, &:focus": {
            color: token.white,
            backgroundColor: "#F08E89",
            borderColor: "#F08E89",
          },
          "&:active, &.active": {
            color: token.white,
            borderColor: token.red_dark,
            backgroundColor: token.red_dark,
          },
        },
      },
    },
  };
});

export default useStyles;
