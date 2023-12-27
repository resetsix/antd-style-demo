import { createStyles } from "antd-style";

const useStyles = createStyles(({ token }) => {
  return {
    ".ant-tabs-nav-wrap": {
      ".ant-tabs-nav-list": {
        ".ant-tabs-tab": {
          padding: "6px 8px",
          marginRight: "24px",
          marginLeft: "0",
          lineHeight: "20px",
          "&:hover": { color: token.primaryColor },
        },
      },
    },
    anticon: {
      color: token.black_Desc,
      marginRight: "5px",
    },
    ".ant-tabs-large": {
      ".ant-tabs-nav-list": {
        ".ant-tabs-tab": {
          padding: "18px 16px 17px",
          marginRight: "16px",
          marginLeft: "0",
          fontSize: "14px",
        },
      },
    },
    ".ant-tabs-left > .ant-tabs-nav .ant-tabs-nav-list .ant-tabs-tab": {
      padding: "8px 7px",
      marginTop: "0",
    },
    ".ant-tabs-left > .ant-tabs-nav .ant-tabs-ink-bar": {
      left: "0",
    },
    ".ant-tabs-card": {
      ".ant-tabs-nav-list": {
        ".ant-tabs-tab": {
          marginRight: "0",
          padding: "9px 12px",
          height: "40px",
          border: `1px solid ${token.grey_border}`,
          backgroundColor: token.black_navBg,
        },
        ".ant-tabs-tab-remove": {
          marginLeft: "12px",
          lineHeight: "16px",
          width: "16px",
          "& > .anticon-close": { color: token.black_msg },
        },
        ".ant-tabs-nav-add": {
          padding: "11px",
          lineHeight: "16px",
          "& > .anticon-plus": { fontSize: "14px", color: token.black_msg },
        },
        ".ant-tabs-tab-btn": {
          lineHeight: "22px",
          fontSize: "14px",
          color: token.black_Desc,
          "&:hover": { color: token.hoverColor },
          "&:active": { color: token.clickColor },
        },
        ".ant-tabs-tab-active": {
          ".ant-tabs-tab-btn": { color: token.primaryColor },
        },
      },
      ".ant-tabs-tab-active .ant-tabs-nav": {
        ".ant-tabs-tab": {
          borderColor: token.black_readonly,
        },
      },
    },
    "ant-tabs-tab-active": {
      backgroundColor: token.white,
    },
    ".ant-tabs": {
      color: token.black_Desc,
      ".ant-tabs-nav-wrap-ping-bottom": {
        ".ant-tabs-nav-list": {
          ".ant-tabs-tab": { padding: "8px 12px" },
        },
      },
    },
    "#rc-tabs-6-tab-1:hover, #rc-tabs-6-tab-2:hover, #rc-tabs-6-tab-3:hover": {
      color: token.blue,
    },
    ".ant-tabs-top > .ant-tabs-nav::before, .ant-tabs-bottom > .ant-tabs-nav::before, .ant-tabs-top > div > .ant-tabs-nav::before, .ant-tabs-bottom > div > .ant-tabs-nav::before":
      {
        borderBottomColor: token.grey_border,
      },
    iconfont: {
      color: token.primaryColor,
    },
    "dt-tabs-sider-menu": {
      ".ant-tabs-nav": {
        minWidth: "30px",
        width: "30px",
        ".ant-tabs-nav-wrap": {
          ".ant-tabs-nav-list": {
            ".ant-tabs-tab": {
              writingMode: "vertical-rl",
              textOrientation: "upright",
              margin: "0",
              padding: "8px 9px",
              borderBottom: `1px solid ${token.grey_border}`,
              color: token.black_title,
              letterSpacing: "3px",
              ".ant-tabs-tab-btn": {
                "&:focus": {
                  color: token.black_title,
                },
              },
            },
            ".ant-tabs-tab-active": {
              backgroundColor: token.bg1Color,
              color: token.primaryColor,
              ".ant-tabs-tab-btn": {
                "&:focus": {
                  color: token.primaryColor,
                },
              },
            },
            ".ant-tabs-ink-bar": {
              backgroundColor: "transparent",
            },
          },
        },
        ".ant-tabs-nav-operations": {
          ".ant-tabs-nav-more": {
            padding: "8px 9px",
            "&:hover": {
              backgroundColor: token.black_titleBg,
            },
          },
        },
      },
      ".ant-tabs-content-holder": {
        margin: "0",
        ".ant-tabs-content": {
          height: "100%",
          ".ant-tabs-tabpane": { padding: "0" },
        },
      },
    },
    ".ant-tabs-right.dt-tabs-sider-menu": {
      ".ant-tabs-nav": {
        ".ant-tabs-tab-active": {
          boxShadow: `inset -2px 0 0 0 ${token.primaryColor}`,
        },
      },
      ".ant-tabs-content-holder": {
        borderRightColor: token.grey_border,
        ".ant-tabs-content": {
          ".ant-tabs-tabpane-active": {
            borderLeft: `1px solid ${token.grey_border}`,
          },
        },
      },
    },
    ".ant-tabs-left.dt-tabs-sider-menu": {
      ".ant-tabs-nav": {
        ".ant-tabs-tab-active": {
          boxShadow: `inset 2px 0 0 0 ${token.primaryColor}`,
        },
      },
      ".ant-tabs-content-holder": {
        borderLeftColor: token.grey_border,
        ".ant-tabs-content": {
          ".ant-tabs-tabpane-active": {
            borderRight: `1px solid ${token.grey_border}`,
          },
        },
      },
    },
    ".ant-tabs.dt-tabs-content-padding": {
      ".ant-tabs-content-holder": {
        ".ant-tabs-content": {
          ".ant-tabs-tabpane": { padding: "16px" },
        },
      },
    },
    "dt-tabs-nav-padding-16": {
      padding: "0 16px",
      ".ant-tabs-nav::before": { left: "-16px", right: "-16px" },
    },
  };
});

export default useStyles;
