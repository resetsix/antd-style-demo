import { createStyles } from "antd-style";

const useStyles = createStyles(({ token }) => {
  return {
    ".ant-list-bordered": {
      border: `1px solid ${token.black_readonly}`,
    },
    ".ant-list": {
      ".ant-list-header": {
        borderBottom: `1px solid ${token.black_readonly}`,
        padding: "16px",
      },
      ".ant-list-item": {
        borderBottom: `1px solid ${token.black_readonly}`,
        padding: "16px",
        ".ant-card-bordered": {
          border: `1px solid ${token.black_readonly}`,
        },
        ".ant-card-head": {
          fontSize: "16px",
          padding: "0 16px",
          borderBottom: "none",
          ".ant-card-head-title": { padding: "16px 0 12px" },
        },
        ".ant-card-body": {
          color: token.black_pageMsg,
          padding: "5px 16px 16px",
          fontSize: "12px",
        },
      },
      ".ant-list-item-meta-avatar": { marginRight: "8px" },
      ".ant-list-item-meta-description": { color: token.black_Desc },
    },
  };
});

export default useStyles;
