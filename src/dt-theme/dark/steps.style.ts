import { createStyles } from "antd-style";

const useStyles = createStyles(({ token }) => {
  return {
    ".ant-steps": {
      ".ant-steps-item-finish > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-title":
        { color: token.white8C },
      ".ant-steps-item-process > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-title::after":
        { backgroundColor: "#282B46" },
    },
    ".ant-steps + .steps-content": {
      border: "1px solid #282B40",
    },
    "dt-steps-card-container": {
      ".ant-card-body, &.ant-card-body": {
        height: "100%",
        padding: "0",
        ".ant-steps": {
          padding: "12px 20%",
          background: "rgb(14, 14, 23)",
          ".ant-steps-item-icon": {
            width: "28px",
            height: "28px",
            marginRight: "4px",
            backgroundColor: "#222433",
            borderColor: "transparent",
            ".ant-steps-icon": {
              top: "-3px",
              color: token.white6,
            },
          },
          ".ant-steps-item-title": {
            fontSize: "14px",
            paddingRight: "12px",
            lineHeight: "28px",
            color: token.black_border,
          },
          ".ant-steps-item-process": {
            ".ant-steps-item-icon": {
              backgroundColor: token.primaryColor,
              ".ant-steps-icon": { color: token.white },
            },
            ".ant-steps-item-title": {
              color: "#333",
              "&::after": { color: token.black_border },
            },
          },
          ".ant-steps-item-finish": {
            ".ant-steps-item-icon": {
              backgroundColor: "rgb(14, 14, 23)",
              border: `1px solid ${token.primaryColor}`,
              ".ant-steps-icon": { top: "-2px", color: token.primaryColor },
            },
          },
        },
        ".ant-steps + div": {
          position: "absolute",
          top: "52px",
          bottom: "56px",
          left: "0",
          right: "0",
          background: "#1A1C29",
          borderTop: "1px solid #090A0F",
          borderBottom: "1px solid #090A0F",
          padding: "20px",
          overflow: "scroll",
          "+ footer": {
            background: "#1A1C29",
            textAlign: "center",
            lineHeight: "56px",
            position: "absolute",
            bottom: "0",
            left: "0",
            right: "0",
            ".ant-btn": {
              marginLeft: "10px",
            },
          },
        },
      },
    },
  };
});

export default useStyles;
