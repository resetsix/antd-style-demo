import { createStyles } from "antd-style";

const useStyles = createStyles(({ token }) => {
  return {
    ".ant-transfer": {
      ".ant-transfer-list": {
        border: `1px solid ${token.grey_border}`,
        borderRadius: "0",
      },
      ".ant-transfer-list-header": {
        padding: "0 16px",
        background: "#F9F9FA",
        height: "32px",
        lineHeight: "32px",
        borderBottom: "0",
        ".ant-checkbox-wrapper": {
          lineHeight: "32px",
        },
      },
      ".ant-transfer-list-body": {
        ".ant-transfer-list-body-search-wrapper": {
          padding: "8px 16px",
          ".ant-input-affix-wrapper": {
            padding: "5px 11px",
            lineHeight: "unset",
          },
        },
        ".ant-transfer-list-content": {
          ".ant-transfer-list-content-item-checked": {
            backgroundColor: "transparent",
          },
          ".ant-transfer-list-content-item": {
            height: "32px",
            padding: "0 16px",
          },
        },
      },
      ".ant-transfer-operation": {
        margin: "0 16px",
        ".ant-btn-primary": {
          color: token.white,
          border: "0",
          backgroundColor: token.blue,
          "&:hover": { backgroundColor: token.hoverColor },
        },
        ".ant-btn": {
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          margin: "0 2px",
          padding: "0",
          "&:first-child": { marginBottom: "10px" },
        },
        ".ant-btn-primary[disabled]": {
          color: token.black_msg,
          background: token.black_titleBg,
        },
      },
    },
    ".ant-transfer-list-content-item-disabled": {
      backgroundColor: token.black_titleBg,
      color: token.black_title,
    },
    ".ant-transfer-list-header-title": {
      fontWeight: "500",
    },
    "dt-transfer-without-header-count": {
      ".ant-transfer-list-header": {
        ".ant-transfer-list-header-dropdown, .ant-transfer-list-header-selected":
          {
            display: "none",
          },
        ".ant-transfer-list-header-title": {
          marginLeft: "4px",
          textAlign: "left",
        },
      },
    },
  };
});

export default useStyles;
