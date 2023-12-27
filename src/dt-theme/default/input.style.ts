import { createStyles } from "antd-style";

const useStyles = createStyles(({ token }) => {
  return {
    ".ant-input, .ant-input-affix-wrapper": {
      padding: "5px 11px",
      lineHeight: "20px",
    },
    "anticon-info-circle": {
      fontSize: "13px",
      padding: "1.5px",
      color: token.black_msg,
    },
    ".ant-input[disabled], .ant-input-affix-wrapper-disabled": {
      borderColor: "transparent",
      "&:hover": { borderColor: "transparent" },
    },
    ".ant-input-clear-icon": {
      "&:hover": { color: token.black_Desc },
    },
    ".ant-input-focused": {
      borderColor: "#005CE6",
      boxShadow: "none",
    },
    ".ant-input::-ms-input-placeholder": {
      color: "#B1B4C5",
    },
    ".ant-input::-webkit-input-placeholder": {
      color: "#B1B4C5",
    },
    ".ant-input.ant-input-sm": {
      padding: "1px 11px",
    },
    ".ant-input-search .ant-input-wrapper .ant-input-search-button": {
      borderLeft: "0",
    },
    ".ant-input-wrapper": {
      ".ant-input-group-addon": {
        ".ant-select-focused": {
          ".ant-select-selector": { borderColor: "#FAFAFA" },
        },
      },
    },
    "anticon-search": {
      margin: "0 auto",
      marginLeft: "9px",
    },
    ".ant-input-search-with-button": {
      ".ant-input-group .ant-input:first-child, .ant-input-group-addon:first-child":
        { borderTopRightRadius: "4px", borderBottomRightRadius: "4px" },
      ".ant-input-group .ant-input-group-addon:last-child": {
        ".ant-input-search-button": {
          borderRadius: "0 4px 4px 0",
        },
      },
    },
    ".ant-btn-icon-only": {
      width: "32px",
      background: "none",
    },
    ".ant-input-password": {
      ".ant-input-password-icon": {
        color: token.black_msg,
        "&:hover": {
          color: token.black_Desc,
        },
      },
    },
    ".ant-input-prefix": {
      color: token.black_msg,
    },
    ".ant-input-search": {
      ".ant-input-group-addon": { backgroundColor: token.white },
    },
    "dt-input-search-group-shadow.ant-input-group": {
      ".ant-select-focused": { zIndex: "0" },
      ".ant-select": {
        boxShadow: "0 12px 20px 0 rgba(29, 120, 255, 0.1)",
        borderColor: token.white,
        "&:hover": {
          color: token.primaryColor,
          ".ant-select-arrow": { color: token.primaryColor },
        },
        "& > .ant-select-selector": {
          height: "44px",
          borderColor: token.white,
          transition: "none",
          ".ant-select-selection-item": { lineHeight: "42px" },
        },
      },
      ".ant-select-disabled": { borderColor: token.white, boxShadow: "none" },
      ".ant-input-search": {
        boxShadow: "0 12px 20px 0 rgba(29, 120, 255, 0.1)",
        ".ant-input": {
          borderLeft: "0",
          padding: "11px",
          borderColor: token.white,
          boxShadow: "none",
        },
        ".ant-input-wrapper": {
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            left: "0",
            top: "50%",
            transform: "translateY(-50%)",
            width: "1px",
            height: "24px",
            backgroundColor: token.grey_border,
            zIndex: "2",
          },
        },
        ".ant-input-group-addon:last-child": {
          boxShadow: "none",
        },
      },
    },
    "dt-input-search-external": {
      ".ant-input-group": {
        ".ant-input-group-addon:last-child": {
          left: "16px",
          ".ant-input-search-button": { borderRadius: "4px", width: "48px" },
        },
      },
    },
  };
});

export default useStyles;
