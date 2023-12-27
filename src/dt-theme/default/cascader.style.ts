import { createStyles } from "antd-style";

const useStyles = createStyles(({ token }) => {
  return {
    ".ant-select": {
      color: token.black_title,
      ".ant-select-clear": {
        color: token.black_msg,
        "&:hover": {
          color: token.black_Desc,
        },
      },
    },
    ".ant-select.dt-ant-select-outside": {
      fontSize: token.font12,
    },
    ".ant-select-customize-input": {
      borderRadius: "4px",
    },
    ".ant-select-disabled": {
      borderColor: token.clickColor,
      boxShadow: "none",
    },
    ".ant-select-dropdown": {
      padding: "0",
      boxShadow: "0 5px 22px 0 rgba(61, 68, 110, 0.2)",
      ".ant-cascader-menu-item:hover": { background: token.black_titleBg },
      ".ant-cascader-menu-item-disabled": {
        background: token.black_titleBg,
        color: token.primaryColor,
      },
    },
    ".ant-select-multiple": {
      ".ant-select-selector": {
        ".ant-select-selection-item": {
          background: "#F9F9FA",
          lineHeight: "20px",
          border: "1px solid #EBECF0",
          ".ant-select-selection-item-remove": {
            "&:hover": {
              color: token.black_Desc,
            },
          },
        },
      },
    },
    ".ant-cascader-dropdown": {
      padding: "0",
      ".ant-cascader-menu": {
        width: "212px",
        padding: "8px 0",
        ".ant-cascader-menu-item-content": {
          overflow: "hidden",
        },
      },
    },
  };
});

export default useStyles;
