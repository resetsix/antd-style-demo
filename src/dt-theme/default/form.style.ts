import { createStyles } from "antd-style";

const useStyles = createStyles(({ token }) => {
  return {
    ".ant-form-item": {
      marginBottom: "16px",
      ".ant-form-item-explain": {
        ".ant-form-item-explain-error": {
          height: "auto",
          color: token.red,
          lineHeight: "20px",
        },
      },
    },
    ".ant-form-item-label > label": {
      fontWeight: "500",
      lineHeight: "20px",
    },
    ".ant-form-vertical .ant-form-item-label": {
      padding: "0 0 4px",
      marginBottom: "0",
    },
    ".ant-form-vertical": {
      ".ant-table-cell > .ant-form-item > .ant-form-item-row": {
        flexDirection: "row",
      },
    },
    ".ant-radio-wrapper-checked .ant-radio-disabled .ant-radio-inner": {
      backgroundColor: token.white,
    },
    ".ant-form-item-label > label .ant-form-item-tooltip": {
      color: "#B1B4C5",
      fontSize: "16px",
    },
    ".ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item-selected .ant-select-selected-icon, .ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item-selected:hover .ant-select-selected-icon":
      {
        color: token.green,
      },
    ".ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item:hover .ant-select-selected-icon":
      {
        color: token.green,
      },
    ".ant-select-tree li .ant-select-tree-node-content-wrapper.ant-select-tree-node-selected":
      {
        background: token.deriveColor,
      },
    ".ant-cascader-menu-item-disabled": {
      background: token.deriveColor,
    },
    "li.ant-picker-panel-select-option-selected": {
      fontWeight: "normal",
      background: token.deriveColor,
    },
    ".ant-picker-panel-select li:focus": {
      fontWeight: "normal",
    },
    "li.ant-picker-panel-select-option-selected:hover": {
      background: token.deriveColor,
    },
    ".ant-radio-button-wrapper": {
      padding: "0 16px",
    },
    "dt-form-shadow-bg": {
      ".ant-input[disabled]:hover": { borderColor: "transparent" },
      ".ant-input-disabled:hover": { borderColor: "transparent" },
      ".ant-picker-input[disabled]:hover": { borderColor: "transparent" },
    },
    "ant-input, ant-input-number, .ant-input, .ant-select-selection": {
      border: "1px solid transparent",
    },
    "ant-input[disabled]:hover": {
      borderColor: "transparent",
    },
    "ant-input-number-disabled:hover": {
      borderColor: "transparent",
    },
    "ant-select-disabled .ant-select-selection:hover, ant-select-disabled .ant-select-selection:focus, ant-select-disabled .ant-select-selection:active":
      {
        borderColor: "transparent",
        boxShadow: "0 2px 8px 0 rgba(6, 14, 26, 0.08)",
      },
    "ant-input, .ant-input, ant-input-number, .ant-select-selection, .ant-picker-input":
      {
        "&:hover, &:focus": { borderColor: token.red },
      },
    "ant-input, ant-input-number, ant-picker-input, .ant-select-selection, .ant-input":
      {
        borderColor: token.red,
      },
    "dt-radio-group": {
      boxShadow: "0 2px 8px 0 rgba(6, 14, 26, 0.08)",
      ".ant-radio-button-wrapper": { border: "0" },
      ".ant-radio-button-wrapper:focus-within": { outline: "unset" },
    },
    "ant-radio-group-solid": {
      ".ant-radio-button-wrapper-disabled": { outline: "unset" },
    },
    ".ant-select-arrow, .ant-calendar-picker-icon, .ant-picker-icon .ant-picker-clock-icon, .ant-picker-clear .ant-picker-clock-icon, .ant-picker-icon":
      {
        color: token.black_msg,
      },
    ".ant-picker-clear": {
      color: token.black_msg,
      "&:hover": { color: token.black_Desc },
    },
    ".ant-cascader-menus, .ant-calendar, .ant-select-dropdown, .ant-picker-panel-inner":
      {
        boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.08)",
      },
    ".ant-picker-content": {
      thead: {
        th: {
          color: token.black_pageMsg,
          fontWeight: "400",
        },
      },
    },
  };
});

export default useStyles;
