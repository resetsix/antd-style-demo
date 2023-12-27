import { createStyles } from "antd-style";

const useStyles = createStyles(({ token }) => {
  return {
    ".ant-input-number": {
      width: "100px",
      borderRadius: "4px",
    },
    ".ant-input-number:focus, .ant-input-number-focused": {
      borderColor: token.clickColor,
    },
    ".ant-input-number-group-wrapper": {
      width: "208px",
    },
    "dt-input-number-disabled": {
      ".ant-input-number-disabled": {
        borderColor: token.grey_border,
        "&:hover": {
          borderColor: token.grey_border,
        },
      },
      ".ant-input-number-group-addon": {
        borderColor: token.black_border,
        backgroundColor: token.black_border,
        color: token.black_pageMsg,
      },
    },
    ".ant-input-number-group-addon": {
      padding: "0 16px",
      backgroundColor: token.black_navBg,
      fontSize: token.font12,
      color: token.black_title,
    },
    ".ant-input-number-group-addon .ant-select": {
      margin: "-6.6px -16px",
    },
  };
});

export default useStyles;
