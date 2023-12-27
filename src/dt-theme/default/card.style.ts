import { createStyles } from "antd-style";

const useStyles = createStyles(({ token }) => {
  return {
    ".ant-card": {
      ".ant-card-head": {
        padding: "16px",
        borderBottom: `1px solid ${token.grey_border}`,
        ".ant-card-head-wrapper": {
          ".ant-card-head-title, .ant-card-extra": { padding: "0" },
        },
      },
      ".ant-card-body": { padding: "16px" },
    },
    ".ant-card-bordered": {
      border: `1px solid ${token.black_readonly}`,
    },
    "dt-card-shadow-bg": {
      boxShadow: "0 2px 12px 0 rgba(0, 0, 0, 0.12)",
      border: "unset",
    },
    ".ant-tabs-large > .ant-tabs-nav .ant-tabs-tab": {
      padding: "16px",
    },
    ".ant-card-contain-tabs": {
      ".ant-card-head": { padding: "0" },
      ".ant-card-head-wrapper": {
        ".ant-card-head-title, .ant-card-extra": {
          margin: "16px 16px 0",
          lineHeight: "32px",
        },
      },
      ".ant-tabs-nav": { padding: "0 16px" },
      ".ant-tabs-tab": { color: token.black_Desc },
    },
    "dt-card-shadow": {
      boxShadow: "0 2px 30px 0 #EAECF4",
      border: "1px solid #EAF0FC",
    },
  };
});

export default useStyles;
