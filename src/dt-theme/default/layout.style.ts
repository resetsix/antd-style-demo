import { createStyles } from "antd-style";

const useStyles = createStyles(({ token }) => {
  return {
    "dt-layout-header": {
      minWidth: token.minWidth,
      background: token.white,
      position: "absolute",
      top: "0",
      left: "0",
      right: "0",
      zIndex: "1000",
      justifyContent: "space-between",
      display: "flex",
      boxShadow: "0 4px 4px 0 rgba(61, 68, 110, 0.04)",
      ".ant-menu": {
        fontSize: token.font16,
        background: token.white,
        color: token.black_title,
      },
      ".ant-menu-item > a": { color: token.black_title },
      ".ant-menu-item-selected > a, .ant-menu-item-selected > a:hover": {
        color: token.primaryColor,
      },
      ".ant-menu-horizontal > .ant-menu-submenu:hover, .ant-menu-horizontal > .ant-menu-submenu-active, .ant-menu-horizontal > .ant-menu-item-open, .ant-menu-horizontal > .ant-menu-submenu-open, .ant-menu-horizontal > .ant-menu-item-selected, .ant-menu-horizontal > .ant-menu-submenu-selected":
        { borderBottom: `3px solid ${token.primaryColor}` },
      ".ant-menu-horizontal > .ant-menu-item, .ant-menu-horizontal > .ant-menu-submenu":
        { top: "1px", lineHeight: "64px", height: "64px" },
      ".ant-menu-horizontal": {
        borderBottom: "0 solid transparent",
        ".ant-menu-submenu-selected, .ant-menu-item-selected, .ant-menu-item-active, .ant-menu-submenu-open":
          {
            "&::after": {
              border: "none",
              transition: "border-color 0s, background 0.3s",
            },
          },
        ".ant-menu-item, .ant-menu-submenu-title, .ant-menu-submenu": {
          transition: "border-color 0s, background 0.3s",
          "&::after": { transition: "border-color 0s, background 0.3s" },
          "&:hover": {
            "&::after": {
              border: "none",
              transition: "border-color 0s, background 0.3s",
            },
          },
        },
      },
      ".ant-menu-sub": { maxHeight: "400px", overflowY: "auto" },
    },
    "user-info": {
      color: token.white,
      cursor: "pointer",
    },
    logo: {
      marginRight: "16px",
      height: "64px",
      lineHeight: "64px",
    },
    divide: {
      borderRight: "1px dashed #475766",
      height: "64px",
      width: "1px",
      padding: "0",
      display: "inline-block",
      margin: "0 10px",
    },
    "dt-layout-left": {
      display: "flex",
      flex: "1",
      ".ant-menu-horizontal": {
        flex: "1",
        ".ant-menu-item": {
          a: { color: token.black_title },
        },
        ".ant-menu-item-selected": {
          background: token.bg1Color,
          fontWeight: "500",
          a: { fontWeight: "500", color: token.primaryColor },
        },
        ".ant-menu-submenu-selected": {
          ".ant-menu-submenu-title": { borderBottom: "0" },
        },
        ".ant-menu-submenu": {
          borderBottom: "0",
        },
      },
    },
    "menu-right": {
      background: "inherit",
      paddingRight: "20px",
      height: "100%",
      display: "flex",
      alignItems: "center",
      margin: "0",
      ".ant-menu-submenu": {
        lineHeight: "50px",
        height: "50px",
        color: token.white,
        textAlign: "center",
        ".ant-menu-submenu-title": {
          padding: "16px 0",
        },
      },
    },
    "menu-item": {
      display: "block",
      lineHeight: "0",
      color: token.black_msg,
      cursor: "pointer",
      padding: "0 8px",
      "&:hover": { color: token.primaryColor },
    },
    anticon: {
      color: token.black_pageMsg,
      fontSize: "20px",
      "&:hover": { color: token.primaryColor },
    },
    avatar: {
      position: "relative",
      display: "inline-block",
      borderRadius: "50%",
      width: "30px",
      height: "30px",
      marginRight: "7px",
      marginLeft: "10px",
      lineHeight: "30px",
      background: token.white,
      top: "-18px",
      color: "#E5E5E5",
    },
    "user-name": {
      color: token.black_title,
      maxWidth: "200px",
      textOverflow: "ellipsis",
      display: "block",
      overflow: "hidden",
      whiteSpace: "nowrap",
    },
    "anticon-setting": {
      marginRight: "0",
    },
    "dt-layout-sider": {
      color: token.black_title,
      background: token.white,
      ".ant-slider-pos": {
        "&--collapsed": {
          backgroundColor: token.white,
        },
      },
      ".ant-menu": {
        background: token.white,
        color: token.black_title,
        fontSize: "14px",
        a: {
          color: token.black_title,
        },
        ".ant-menu-horizontal": {
          borderLeft: `4px solid ${token.primaryColor}`,
        },
        ".ant-menu-item, .ant-menu-item > a": {
          display: "flex",
          alignItems: "center",
          fontWeight: "400",
        },
        ".ant-menu-item .anticon, .ant-menu-submenu-title .anticon": {
          fontSize: "14px",
        },
        ".ant-menu-item": {
          a: { display: "flex", alignItems: "center" },
        },
        ".ant-menu-item-selected": {
          background: "#E8F1FF",
          a: {
            fontWeight: "500",
            color: token.primaryColor,
            display: "flex",
            alignItems: "center",
          },
        },
        ".ant-menu-horizontal .ant-menu-item-selected": {
          "&::after": { border: "none" },
        },
        ".ant-menu-submenu-active": {
          color: token.black_title,
          background: "none",
        },
        ".ant-menu-inline-collapsed": {
          paddingLeft: "16px",
        },
        ".ant-menu-submenu-title": {
          paddingLeft: "16px",
        },
        ".ant-menu-item .ant-menu-item-icon + span, .ant-menu-submenu-title .ant-menu-item-icon + span, .ant-menu-item .anticon + span, .ant-menu-submenu-title .anticon + span":
          {
            marginLeft: "8px",
          },
      },
      ".ant-menu-inline-collapsed": { width: "56px" },
      ".ant-menu-inline-collapsed > .ant-menu-item, .ant-menu-inline-collapsed > .ant-menu-item-group > .ant-menu-item-group-list > .ant-menu-item, .ant-menu-inline-collapsed > .ant-menu-item-group > .ant-menu-item-group-list > .ant-menu-submenu > .ant-menu-submenu-title, .ant-menu-inline-collapsed > .ant-menu-submenu > .ant-menu-submenu-title":
        { padding: "0 18px 0 14px" },
      ".ant-menu-inline-collapsed .ant-menu-submenu.ant-menu-submenu-vertical":
        {
          position: "relative",
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: "5px",
            right: "5px",
            display: "inline-block",
            width: "6px",
            height: "6px",
            clipPath: "polygon(0 6px, 6px 6px, 6px 0)",
            background: "#8B8FA8",
            cursor: "pointer",
          },
        },
      ".ant-menu-submenu": {
        ".ant-menu-submenu-arrow": {
          color: token.black_msg,
        },
        ".ant-menu-submenu-title:hover": {
          color: token.black_title,
          backgroundColor: token.black_titleBg,
          ".ant-menu-submenu-arrow": { color: token.black_msg },
        },
        ".ant-menu-sub .ant-menu-item": {
          height: "48px",
          lineHeight: "48px",
          paddingLeft: "44px",
        },
        "&:hover": {
          ".ant-menu-submenu-title": {
            ".ant-menu-submenu-arrow": {
              color: token.black_msg,
            },
          },
        },
      },
      ".ant-menu-inline": {
        ".ant-menu-submenu-selected": {
          color: token.black_title,
        },
      },
      ".ant-menu-vertical .ant-menu-item::after, .ant-menu-vertical-left .ant-menu-item::after, .ant-menu-vertical-right .ant-menu-item::after, .ant-menu-inline .ant-menu-item::after":
        { borderRight: "0 solid #3F87FF" },
      ".ant-menu-inline, .ant-menu-vertical, .ant-menu-vertical-left": {
        border: "0 solid transparent",
      },
      ".ant-menu-vertical .ant-menu-item, .ant-menu-vertical-left .ant-menu-item, .ant-menu-vertical-right .ant-menu-item, .ant-menu-inline .ant-menu-item, .ant-menu-vertical .ant-menu-submenu-title, .ant-menu-vertical-left .ant-menu-submenu-title, .ant-menu-vertical-right .ant-menu-submenu-title, .ant-menu-inline .ant-menu-submenu-title":
        {
          height: "56px",
          lineHeight: "56px",
          marginTop: "0",
          marginBottom: "0",
          fontSize: "14px",
          borderLeft: "4px solid transparent",
        },
    },
    menuItem: {
      maxWidth: "0",
      display: "inline-block",
      opacity: "0",
    },
    "ant-menu-inline-collapsed": {
      ".ant-menu-item:active, .ant-menu-submenu-title:active": {
        backgroundColor: "transparent",
      },
    },
    "ant-menu-inline .ant-menu-item, ant-menu-inline .ant-menu-submenu-title": {
      width: "100%",
    },
    "ant-menu-submenu-selected::after": {
      background: token.primaryColor,
    },
    "ant-layout-sider-collapsed": {
      width: "56px",
      minWidth: "56px",
      maxWidth: "56px",
      flex: "0 0 56px",
    },
    ".ant-menu-submenu-popup": {
      ".ant-menu": {
        background: token.white,
        color: "#ABB2C2",
        ".ant-menu-horizontal": {
          borderLeft: `4px solid ${token.primaryColor}`,
        },
        a: {
          color: token.black_title,
        },
        ".ant-menu-item-selected": {
          background: "#E8F1FF",
          a: { fontWeight: "500", color: "#1D78FF" },
        },
      },
      ".ant-menu-item:active, .ant-menu-submenu-title:active": {
        borderLeft: `4px solid ${token.primaryColor}`,
      },
      ".ant-menu-vertical.ant-menu-sub, .ant-menu-vertical-left.ant-menu-sub, .ant-menu-vertical-right.ant-menu-sub":
        { minWidth: "100px" },
      ".ant-menu-vertical .ant-menu-item": { paddingLeft: "9px" },
      ".ant-menu.ant-menu-sub.ant-menu-vertical": { padding: "8px 0" },
      ".ant-menu-vertical .ant-menu-item, .ant-menu-vertical-left .ant-menu-item, .ant-menu-vertical-right .ant-menu-item, .ant-menu-inline .ant-menu-item, .ant-menu-vertical .ant-menu-submenu-title, .ant-menu-vertical-left .ant-menu-submenu-title, .ant-menu-vertical-right .ant-menu-submenu-title, .ant-menu-inline .ant-menu-submenu-title":
        {
          height: "32px",
          lineHeight: "32px",
          marginTop: "0",
          marginBottom: "0",
          fontSize: "14px",
          borderLeft: "4px solid transparent",
        },
    },
    "dt-container": {
      minWidth: token.minWidth,
      position: "absolute",
      top: "64px",
      left: "0",
      minHeight: "100px",
      right: "0",
      bottom: "0",
      background: "#F2F7FA",
      overflowY: "auto",
      overflowX: "hidden",
      ".ant-layout": {
        overflow: "hidden",
        height: "100%",
        background: "#F2F7FA",
      },
    },
    "dt-menu-text-ellipsis": {
      display: "inline-block",
      maxWidth: "80px",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      overflow: "hidden",
      verticalAlign: "top",
    },
    ".ant-dropdown-menu-item .dropdown-content": {
      padding: "6px 58px 7px 20px",
      fontSize: "14px",
      color: "#333",
      lineHeight: "27px",
    },
    iconfont: {
      color: "inherit",
      marginRight: "8px",
      verticalAlign: "-1px",
    },
    ".ant-dropdown-menu-item-active, .ant-dropdown-menu-item:hover": {
      backgroundColor: token.black_titleBg,
    },
    "dt-slider-top-icon": {
      lineHeight: "40px",
      cursor: "pointer",
      textAlign: "center",
      fontSize: "14px",
    },
    "dt-header-project-select-menu": {
      maxHeight: "400px",
      overflow: "auto",
      width: "170px",
    },
    "dt-header-log-wrapper": {
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
      height: "64px",
      "& > img": { height: "40px", marginLeft: "16px" },
      "& > span": {
        textDecoration: "none",
        fontSize: "24px",
        color: token.black_title,
        paddingLeft: "8px",
      },
    },
    "c-header__title": {
      fontFamily: '"Microsoft YaHei"',
      fontSize: "20px",
      fontWeight: "600",
    },
    "box-1": {
      boxShadow: "0 0 6px 0 rgba(0, 0, 0, 0.1)",
      background: token.white,
      position: "relative",
      margin: "20px",
    },
    "box-2": {
      boxShadow: "0 0 6px 0 rgba(0, 0, 0, 0.1)",
      background: token.white,
      position: "relative",
      margin: "0 20px 20px",
    },
    "box-3": {
      boxShadow: "0 0 6px 0 rgba(0, 0, 0, 0.1)",
      background: token.white,
      position: "relative",
      margin: "10px 20px 20px 10px",
    },
    "box-4": {
      boxShadow: "0 0 6px 0 rgba(0, 0, 0, 0.1)",
      background: token.white,
      position: "relative",
      margin: "0 20px",
    },
    "box-5": {
      boxShadow: "0 0 6px 0 rgba(0, 0, 0, 0.1)",
      background: token.white,
      position: "relative",
    },
    "box-pd-h": {
      padding: "20px",
      height: "100%",
    },
    "box-title": {
      height: "35px",
      lineHeight: "35px",
      fontWeight: "normal",
      fontSize: "14px",
      color: "#333",
      letterSpacing: "0",
      textAlign: "left",
      padding: "0 20px",
      background: "#FAFAFA",
      borderTop: "1px solid #DDD",
      borderBottom: "1px solid #DDD",
    },
    "box-sub-title": {
      fontSize: "12px",
      color: "rgb(153, 153, 153)",
    },
    "box-card": {
      padding: "0 20px 20px",
    },
    "card-title": {
      height: "40px",
      lineHeight: "40px",
      fontSize: "14px",
      color: "#333",
      letterSpacing: "0",
      fontWeight: "normal",
    },
    "flex-middle": {
      display: "flex",
      alignItems: "center",
    },
    "m-card": {
      ".ant-card": {
        ".ant-card-head, .ant-card-body": {
          borderBottom: "0",
        },
      },
    },
  };
});

export default useStyles;
