import { createStyles } from "antd-style";

const useStyles = createStyles(({ token }) => {
  return {
    ".ant-form-item-label > label": {
      color: token.whiteBF,
    },
    ".ant-input": {
      "&:focus": { borderColor: token.primaryColor },
    },
    ".ant-input-disabled": {
      borderColor: "#272A40",
    },
    ".ant-input[disabled]:hover": {
      borderColor: "#272A40",
    },
    ".ant-input-search-icon, .ant-input-password-icon": {
      color: token.white6,
      "&:hover": { color: token.whiteBF },
    },
    ".ant-select-selection": {
      "&:focus, &.active": { borderColor: token.primaryColor },
    },
    ".ant-select-dropdown": {
      boxShadow: "0 2px 8px 0 rgba(6, 7, 10, 1)",
    },
    ".ant-checkbox-inner": {
      backgroundColor: "#11121C",
      borderColor: "#363B59",
    },
    ".ant-checkbox + span": {
      color: token.whiteBF,
    },
    ".ant-radio-inner": {
      backgroundColor: "#11121C",
      borderColor: "#363B59",
    },
    ".ant-switch": {
      backgroundColor: token.deriveColor_dark,
    },
    ".ant-switch-checked": {
      backgroundColor: token.primaryColor,
    },
    ".ant-switch-loading-icon, .ant-switch::after": {
      backgroundColor: token.white,
    },
    ".ant-cascader-menu-item": {
      color: token.whiteBF,
    },
    ".ant-cascader-menu-item-disabled": {
      backgroundColor: token.deriveColor_dark,
    },
    ".ant-calendar": {
      boxShadow: "0 2px 8px 0 rgba(6, 7, 10, 1)",
      border: "0",
    },
    ".ant-select-tree li .ant-select-tree-node-content-wrapper.ant-select-tree-node-selected":
      {
        backgroundColor: token.deriveColor_dark,
      },
    ".ant-select-tree-dropdown .ant-select-dropdown-search": {
      padding: "12px 12px 8px",
      ".ant-select-search__field": { background: "#11111C" },
    },
    ".ant-select-tree": {
      padding: "0 12px",
    },
    ".ant-picker-panel-input": {
      backgroundColor: "transparent",
    },
    "dt-form-light-bg": {
      ".ant-input[disabled], &.ant-input[disabled]": {
        backgroundColor: "#161723",
        "&:hover": {
          borderColor: token.blue3,
        },
      },
      ".ant-calendar-input": { background: token.blue1 },
    },
    "has-error": {
      ".ant-input, .ant-select-selection, .ant-input-number, .ant-picker-input, .ant-cascader-picker":
        { borderColor: "#E25F5D", backgroundColor: "#11111C" },
    },
    "ant-select-dropdown": {
      border: "1px solid #272A40",
      boxShadow: "0 0 0 0 rgba(0, 0, 0, 0)",
      backgroundColor: token.blue1,
      ".ant-select-dropdown-menu-item-selected": { backgroundColor: "#282C40" },
    },
    "ant-select-tree-dropdown .ant-select-dropdown-search": {
      background: "transparent",
      ".ant-select-search__field": {
        background: "#1D1F2E",
        borderColor: "#2C3047",
      },
    },
    "ant-input, .ant-select-selection, .ant-input-numbe, .ant-picker-input, .ant-cascader-picker":
      {
        borderColor: "#E25F5D",
        backgroundColor: "#11111C",
      },
  };
});

export default useStyles;
