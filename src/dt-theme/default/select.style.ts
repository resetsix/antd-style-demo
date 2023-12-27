import { createStyles } from "antd-style";

const useStyles = createStyles(({ token }) => {
  return {
    ".ant-select-customize-input": {
      borderColor: token.grey_border,
      backgroundColor: token.grey_border,
    },
    "dt-ant-select-dropdown-default.ant-select-dropdown": {
      boxShadow: "0 5px 22px 0 rgba(61, 68, 110, 0.2)",
    },
    ".ant-select-dropdown": {
      padding: "8px 0",
    },
    ".ant-select-disabled": {
      ".ant-select-selector": {
        ".ant-select-selection-overflow": {
          ".ant-select-selection-item": {
            color: token.black_pageMsg,
            backgroundColor: token.black_border,
          },
        },
      },
    },
    ".ant-select-multiple": {
      ".ant-select-selector": { padding: "3px 4px 0" },
      ".ant-select-selection-overflow-item": {
        marginBottom: "3px",
        marginTop: "0",
      },
      ".ant-select-selection-item": {
        height: "24px",
        WebkitMarginEnd: "4px",
        marginInlineEnd: "4px",
        alignItems: "center",
        marginBottom: "0",
        marginTop: "0",
        "&-content": {
          marginRight: "2px",
        },
      },
      ".ant-select-selection-search": { height: "24px", paddingTop: "2px" },
      ".ant-select-selection-item-remove": {
        color: "#8B8FA8",
        fontSize: "12px",
      },
    },
    ".ant-select-single .ant-select-selector .ant-select-selection-item, .ant-select-single .ant-select-selector .ant-select-selection-placeholder":
      {
        transition: "all 0.3s, visibility 0s",
      },
  };
});

export default useStyles;
