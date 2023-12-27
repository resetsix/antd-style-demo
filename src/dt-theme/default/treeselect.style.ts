import { createStyles } from "antd-style";

const useStyles = createStyles(({ token }) => {
  return {
    ".ant-tree-select-dropdown": {
      ".ant-select-tree": {
        ".ant-select-tree-treenode": {
          padding: "0",
        },
        ".ant-select-tree-list-holder": {
          ".ant-select-tree-node-content-wrapper": {
            minHeight: "32px",
            lineHeight: "32px",
            "&:hover": {
              backgroundColor: token.black_titleBg,
            },
          },
          ".ant-select-tree-switcher": { lineHeight: "32px" },
          ".ant-select-tree-node-content-wrapper.ant-select-tree-node-selected":
            { color: token.blue, background: "none" },
        },
      },
      ".ant-select-tree-list": {
        ".ant-select-tree-treenode": {
          ".ant-select-tree-checkbox": { margin: "8px 8px 0 0" },
        },
      },
    },
  };
});

export default useStyles;
