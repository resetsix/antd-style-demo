import { createStyles } from "antd-style";

const useStyles = createStyles(({ token }) => {
  return {
    ".ant-tag-close-icon": {
      marginLeft: "4px",
      color: token.black_pageMsg,
      fontSize: "12px",
      verticalAlign: "-0.1625em",
    },
    "dt-ant-tag-icon": {
      padding: "2px 12px",
      lineHeight: "20px",
      border: "none",
      borderRadius: "12px",
      svg: { width: "16px", height: "16px" },
    },
    ".ant-tag > .anticon + span, .ant-tag > span + .anticon": {
      marginLeft: "2px",
    },
    "dt-tag-disabled": {
      color: token.black_pageMsg,
      backgroundColor: token.black_border,
      borderColor: token.black_border,
    },
    ".ant-tag": {
      display: "inline-flex",
      alignItems: "center",
      height: "24px",
      padding: "2px 8px",
      lineHeight: "18px",
      background: token.black_navBg,
      borderColor: token.black_readonly,
    },
  };
});

export default useStyles;
