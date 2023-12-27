import { createStyles } from "antd-style";

const useStyles = createStyles(({ token }) => {
  return {
    ".ant-upload.ant-upload-select.ant-upload-select-picture-card": {
      backgroundColor: token.black_navBg,
    },
    "dt-upload-button": {
      color: token.black_msg,
    },
    ".ant-upload-list": {
      ".ant-upload-list-item.ant-upload-list-item-list-type-text": {
        height: "28px",
        ".ant-upload-list-item-info": {
          background: "none",
          borderRadius: "4px",
          color: token.black_Desc,
          "&:hover": { background: token.black_titleBg },
          ".ant-upload-text-icon": { marginLeft: "4px", marginTop: "3px" },
        },
      },
    },
    ".ant-upload-picture-card-wrapper.avatar-uploader > .ant-upload": {
      width: "80px",
      height: "80px",
    },
    ".ant-upload.ant-upload-drag": {
      backgroundColor: token.black_navBg,
    },
    anticon: {
      fontSize: "24px",
    },
    ".ant-upload-list-item-info .ant-upload-text-icon .anticon": {
      fontSize: "14px",
    },
    ".ant-upload-list-item-card-actions": {
      ".ant-btn-icon-only.ant-btn-sm > *": { fontSize: "16px" },
    },
  };
});

export default useStyles;
