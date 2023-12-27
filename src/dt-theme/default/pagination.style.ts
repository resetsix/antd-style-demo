import { createStyles } from "antd-style";

const useStyles = createStyles(({ token }) => {
  return {
    ".ant-pagination": {
      color: token.black_title,
      fontSize: "12px",
      display: "flex",
      alignItems: "center",
      "ul > li": { marginRight: "0", height: "24px", boxSizing: "border-box" },
      ".ant-pagination-total-text": {
        lineHeight: "32px",
        color: token.black_Desc,
        margin: "0",
        height: "32px",
        fontFamily: 'PingFangSC-Regular, "PingFang SC"',
      },
      ".ant-pagination-prev, .ant-pagination-next, .ant-pagination-disabled": {
        ".ant-pagination-item-link": {
          color: token.black_msg,
        },
      },
      ".ant-pagination-jump-prev, .ant-pagination-jump-next": {
        ".ant-pagination-item-container": {
          ".ant-pagination-item-ellipsis": {
            fontSize: "8px",
            lineHeight: "normal",
            display: "flex",
            justifyContent: "flex-end",
            flexDirection: "column",
            scale: "0.6",
          },
        },
      },
      ".ant-pagination-prev, .ant-pagination-next, .ant-pagination-jump-prev, .ant-pagination-jump-next":
        { height: "24px", lineHeight: "24px", minWidth: "20px", margin: "0" },
      ".ant-pagination-item-link": {
        border: "0",
        margin: "0",
        minWidth: "20px",
        fontSize: "16px",
      },
      ".ant-pagination-prev": { marginLeft: "8px", marginRight: "4px" },
      ".ant-pagination-next": { marginLeft: "4px", marginRight: "8px" },
      ".ant-pagination-item": {
        minWidth: "24px",
        border: "none",
        height: "24px",
        lineHeight: "24px",
        marginRight: "0",
        borderRadius: "2px",
        a: {
          color: token.black_title,
        },
        "&:hover": {
          a: { color: token.primaryColor },
        },
      },
      ".ant-pagination-item-active": {
        border: `1px solid ${token.primaryColor}`,
        lineHeight: "22px",
        a: {
          color: token.primaryColor,
        },
      },
      ".ant-select-single.ant-select-show-arrow .ant-select-selection-item": {
        padding: "0",
      },
      ".ant-pagination-options": {
        marginLeft: "0",
        ".ant-select-selector": {
          borderColor: token.black_border,
        },
        ".ant-select-disabled": {
          ".ant-select-selector": { borderColor: token.primaryColor },
        },
      },
      ".ant-pagination-options-quick-jumper": {
        height: "24px",
        lineHeight: "24px",
        color: token.black_pageMsg,
        input: {
          height: "24px",
          padding: "0 8px",
        },
      },
      ".ant-select-customize-input": { paddingRight: "0", lineHeight: "22px" },
      ".ant-select-single .ant-select-selector .ant-select-selection-item, .ant-select-single .ant-select-selector .ant-select-selection-placeholder":
        { lineHeight: "22px" },
      ".ant-pagination-simple .ant-pagination-simple-pager input": {
        padding: "2.5px 6px 0",
      },
    },
    "ul.ant-pagination": {
      fontSize: "12px",
    },
    "dt-pagination-right": {
      justifyContent: "flex-end",
    },
    "dt-pagination-totalCount": {
      color: token.blue,
    },
  };
});

export default useStyles;
