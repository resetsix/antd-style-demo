import { createStyles } from "antd-style";

const useStyles = createStyles(({ token }) => {
  return {
    ".ant-upload-drag": {
      background: "#1D1F2E",
      border: "1px solid #2C3047",
      "&:hover": { borderColor: token.primaryColor },
    },
    ".ant-upload.ant-upload-select-picture-card": {
      backgroundColor: "transparent",
      ".ant-upload > .dt-upload-button": { fontSize: "14px" },
      "&:hover": {
        borderColor: token.primaryColor,
        ".ant-upload > div": {
          color: token.primaryColor,
        },
      },
    },
    anticon: {
      fontSize: "20px",
    },
    ".ant-upload-list-picture-card .ant-upload-list-item-error": {
      borderColor: token.red,
    },
    ".ant-upload-list-item-card-actions": {
      ".ant-btn:hover": { border: "none" },
    },
  };
});

export default useStyles;
