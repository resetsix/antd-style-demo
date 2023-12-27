import { createStyles } from "antd-style";

const useStyles = createStyles(({ token }) => {
  return {
    "dt-layout-header": {
      minWidth: token.minWidth,
      ".ant-menu": { fontSize: token.font16 },
      ".ant-menu-item > a:hover": { color: token.primaryColor },
      ".ant-menu-item-selected > a, .ant-menu-item-selected > a:hover": {
        color: token.primaryColor,
      },
      ".ant-menu-horizontal > .ant-menu-item, .ant-menu-horizontal > .ant-menu-submenu":
        { borderBottom: "3px solid #111426" },
      ".ant-menu-horizontal": {
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
    },
    "dt-layout-sider": {
      ".ant-menu": {
        ".ant-menu-horizontal": {
          borderLeft: `3px solid ${token.primaryColor}`,
        },
        ".ant-menu-horizontal .ant-menu-item-selected": {
          "&::after": { border: "none" },
        },
      },
    },
    ".ant-menu-submenu-popup": {
      ".ant-menu": {
        ".ant-menu-horizontal": {
          borderLeft: `3px solid ${token.primaryColor}`,
        },
      },
      ".ant-menu-item:active, .ant-menu-submenu-title:active": {
        borderLeft: `3px solid ${token.primaryColor}`,
      },
    },
    "dt-container": {
      minWidth: token.minWidth,
    },
  };
});

export default useStyles;
