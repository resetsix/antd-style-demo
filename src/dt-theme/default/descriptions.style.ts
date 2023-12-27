import { createStyles } from "antd-style";

const useStyles = createStyles(({ token }) => {
  return {
    ".ant-descriptions-bordered .ant-descriptions-view": {
      border: `1px solid ${token.grey_border}`,
      borderBottom: "unset",
      borderRadius: "0",
      ".ant-descriptions-row": {
        borderBottom: `1px solid ${token.grey_border}`,
        height: "36px",
        boxSizing: "border-box",
      },
      ".ant-descriptions-item-content": {
        padding: "8px 12px",
        "& > span": {
          maxHeight: "119px",
          overflowY: "auto",
          display: "block",
        },
      },
      ".ant-descriptions-item-label": {
        padding: "8px 12px",
        borderRight: `1px solid ${token.grey_border}`,
        color: token.black_Desc,
        background: token.black_navBg,
      },
    },
    ".ant-descriptions-bordered th": {
      width: "12%",
    },
    ".ant-descriptions-bordered td": {
      width: "18%",
    },
    "dt-descriptions-vertical-display": {
      ".ant-descriptions-item": {
        boxSizing: "border-box",
        display: "block",
        marginBottom: "8px",
        padding: "0",
      },
      ".ant-descriptions-item-content": { padding: "0", display: "block" },
      ".ant-descriptions-item-label": { padding: "0", display: "block" },
    },
    ".ant-descriptions-item-container .ant-descriptions-item-label, .ant-descriptions-item-container .ant-descriptions-item-content":
      {
        lineHeight: "20px",
      },
    "dt-descriptions-custom-display": {
      ".ant-descriptions-item-label": { padding: "0", display: "block" },
    },
    ".ant-descriptions-item-label": {
      color: token.black_pageMsg,
    },
  };
});

export default useStyles;
