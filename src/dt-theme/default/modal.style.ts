import { createStyles } from "antd-style";

const useStyles = createStyles(({ token }) => {
  return {
    ".ant-modal-title": {
      paddingRight: "10px",
      fontWeight: "600",
    },
    ".ant-modal-header": {
      padding: "11px 24px",
      backgroundColor: token.black_navBg,
      borderBottom: "0",
    },
    ".ant-modal-body": {
      padding: "16px 24px",
      boxSizing: "border-box",
      ".ant-form": {
        ".ant-form-item": {
          "&:last-child": { marginBottom: "0" },
        },
      },
      ".ant-table-container table > thead > tr:first-child th:first-child": {
        paddingLeft: "16px",
      },
    },
    ".ant-modal-footer": {
      padding: "12px 24px",
      borderTop: `0 solid ${token.white}`,
    },
    ".ant-modal-close-x": {
      color: token.black_pageMsg,
      lineHeight: "48px",
      height: "44px",
      width: "48px",
      "&:hover": { color: token.black_Desc },
    },
    anticon: {
      fontSize: "18px",
    },
    ".ant-modal-content": {
      boxShadow: "0 5px 22px 0 rgba(61, 68, 110, 0.2)",
    },
    ".ant-modal-confirm": {
      width: "400px",
      ".ant-modal-content": {
        ".ant-modal-body": {
          padding: "24px 24px 0",
          ".ant-modal-confirm-body": {
            ".ant-modal-confirm-title": {
              color: token.black_title,
              lineHeight: "20px",
              fontSize: "14px",
            },
            "> .anticon": {
              margin: "0 8px 0 2px",
              fontSize: "20px",
              svg: { verticalAlign: "inherit" },
            },
            ".ant-modal-confirm-content": {
              margin: "8px 0 16px 30px",
              color: token.black_pageMsg,
              lineHeight: "20px",
            },
          },
          ".ant-modal-confirm-btns": {
            margin: "12px 0",
            ".ant-btn + .ant-btn": {
              marginLeft: "12px",
            },
            ".ant-btn-dangerous": {
              backgroundColor: token.red,
              borderColor: token.red,
              color: token.white,
            },
          },
        },
      },
    },
    ".ant-modal-confirm-confirm": {
      ".ant-modal-confirm-body > .dt-modal-delete-icon": { color: token.red },
    },
  };
});

export default useStyles;
