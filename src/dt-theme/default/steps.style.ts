import { createStyles } from "antd-style";

const useStyles = createStyles(({ token }) => {
  return {
    "dt-steps-card-container": {
      ".ant-card-body, &.ant-card-body": {
        height: "100%",
        padding: "0",
        ".ant-steps": {
          padding: "12px 20%",
          background: token.black_navBg,
          ".ant-steps-item-icon": {
            marginRight: "4px",
            backgroundColor: token.black_border,
            borderColor: "transparent",
            ".ant-steps-icon": {
              top: "-1px",
              color: token.white,
            },
          },
          ".ant-steps-item-title": {
            fontSize: "14px",
            paddingRight: "12px",
            lineHeight: "24px",
            color: token.white6,
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
              backgroundColor: token.white,
              border: `1.5px solid ${token.primaryColor}`,
              ".ant-steps-icon": { top: "0", color: token.primaryColor },
            },
          },
          ".ant-steps-item-wait": {
            ".ant-steps-item-icon": {
              backgroundColor: token.black_border,
              borderColor: "transparent",
              ".ant-steps-icon": { color: token.white },
            },
          },
        },
        ".ant-form": {
          ".ant-form-item": {
            ".ant-form-item-label": {
              lineHeight: "20px",
              fontSize: "12px",
              fontWeight: "500",
              color: token.black_title,
            },
            ".ant-form-item-control-input": {
              width: "70%",
            },
          },
        },
        ".ant-steps + div": {
          position: "absolute",
          top: "48px",
          bottom: "56px",
          left: "0",
          right: "0",
          background: token.white,
          borderTop: `1px solid ${token.black_readonly}`,
          borderBottom: `1px solid ${token.black_readonly}`,
          padding: "20px",
          overflow: "auto",
          "+ footer": {
            background: "#FFF",
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
    "dt-steps-header": {
      width: "100%",
      padding: "16px 0",
      margin: "0",
      backgroundColor: token.black_navBg,
      "&::before, &::after": {
        content: '""',
        width: "calc(calc(100% - 1000px) / 2)",
      },
      ".ant-steps-icon": { fontWeight: "500" },
      ".ant-steps-item-wait > .ant-steps-item-container > .ant-steps-item-icon":
        {
          backgroundColor: token.black_border,
          borderColor: "transparent",
          ".ant-steps-icon": {
            color: token.white,
          },
        },
    },
    ".ant-steps": {
      ".ant-steps-item-icon": {
        width: "24px",
        height: "24px",
        lineHeight: "24px",
      },
      ".ant-steps-item-title": { lineHeight: "24px" },
      ".ant-steps-item-title::after": {
        top: "11px",
        borderBottom: `1px dashed ${token.black_border}`,
      },
      ".ant-steps-item-finish > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-title::after":
        { backgroundColor: token.white, borderColor: token.primaryColor },
      ".ant-steps-item-custom > .ant-steps-item-container > .ant-steps-item-icon > .ant-steps-icon":
        { height: "24px", lineHeight: "24px" },
      ".ant-steps-navigation": {
        ".ant-steps-item::before": {
          backgroundColor: token.white,
          borderBottom: "1px",
        },
      },
    },
    ".ant-steps-vertical >": {
      ".ant-steps-item": {
        paddingBottom: "73px",
        marginBottom: "3px",
        ".ant-steps-item-icon": {
          marginRight: "10px",
          width: "20px",
          height: "20px",
          lineHeight: "20px",
        },
        ".ant-steps-item-title": {
          lineHeight: "20px",
        },
        ".ant-steps-item-container > .ant-steps-item-tail": {
          left: "9px",
          padding: "30px 0 6px",
        },
        ".ant-steps-item-container > .ant-steps-item-tail::after": {
          borderRadius: "0",
          backgroundColor: token.white,
          borderLeft: `1px dashed ${token.black_border}`,
        },
        ".ant-steps-item-finish": {
          ".ant-steps-item-container > .ant-steps-item-tail::after": {
            borderColor: token.primaryColor,
          },
        },
      },
      ".ant-steps-item-finish > .ant-steps-item-container > .ant-steps-item-tail::after":
        { borderLeft: `1px dashed ${token.primaryColor}` },
    },
    "ant-steps-small > .ant-steps-item > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-title":
      {
        lineHeight: "20px",
      },
    ".ant-steps-dot": {
      ".ant-steps-item-tail": {
        top: "11px",
        marginLeft: "90px",
        paddingRight: "27px",
      },
      ".ant-steps-item-tail::after": {
        height: "0",
        borderBottom: `1px dashed ${token.black_border}`,
      },
      ".ant-steps-item-process": {
        ".ant-steps-item-tail": {
          marginLeft: "80px",
          paddingRight: "20px",
        },
      },
      ".ant-steps-item-process .ant-steps-icon:first-child .ant-steps-icon-dot":
        { top: "8px" },
      ".ant-steps-item-finish > .ant-steps-item-container > .ant-steps-item-tail::after":
        { backgroundColor: token.white, borderColor: token.primaryColor },
    },
    "ant-steps-horizontal > .ant-steps-item-wait, ant-steps-horizontal > .ant-steps-item-finish":
      {
        "> .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-title":
          { paddingLeft: "18px" },
      },
    ".ant-steps-vertical.ant-steps-dot .ant-steps-item > .ant-steps-item-container > .ant-steps-item-tail":
      {
        top: "14.5px",
        left: "-3px",
        padding: "28px 0 10px",
      },
    ".ant-steps-vertical.ant-steps-dot > .ant-steps-item > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-title":
      {
        paddingTop: "13px",
      },
    ".ant-steps-vertical.ant-steps-dot > .ant-steps-item.ant-steps-item-process > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-title":
      {
        paddingTop: "10px",
      },
    ".ant-steps-item-process > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-title":
      {
        fontWeight: "500",
      },
    ".ant-steps-item-process > .ant-steps-item-container > .ant-steps-item-icon .ant-steps-icon":
      {
        top: "-1px",
      },
    ".ant-steps-item-wait > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-title":
      {
        color: token.black_pageMsg,
      },
    ".ant-steps-item-wait, .ant-steps-item-finish": {
      ".ant-steps-item-icon > .ant-steps-icon .ant-steps-icon-dot": {
        top: "1px",
      },
    },
  };
});

export default useStyles;
