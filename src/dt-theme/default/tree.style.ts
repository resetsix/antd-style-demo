import { createStyles } from "antd-style";

const useStyles = createStyles(({ token }) => {
  return {
    ".ant-tree-show-line .ant-tree-indent-unit::before": {
      borderRight: `1px dashed ${token.black_border}`,
      marginBottom: "1px",
    },
    ".ant-tree .ant-tree-node-content-wrapper.ant-tree-node-selected": {
      color: token.blue,
      background: "none",
    },
    ".ant-tree .ant-tree-node-content-wrapper:hover": {
      backgroundColor: token.black_titleBg,
    },
    ".ant-tree .ant-tree-treenode": {
      padding: "0",
      ".ant-tree-switcher, .ant-tree-checkbox": { lineHeight: "32px" },
      ".ant-tree-checkbox": { margin: "8px 8px 0 0" },
      ".ant-tree-node-content-wrapper": { lineHeight: "32px" },
    },
    ".ant-tree.ant-tree-block-node .ant-tree-list-holder-inner .ant-tree-node-content-wrapper":
      {
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      },
    ".ant-tree-switcher .ant-tree-switcher-icon, .ant-tree-switcher .ant-select-tree-switcher-icon, .ant-tree-show-line .ant-tree-switcher-line-icon":
      {
        fontSize: "14px",
      },
    "span.ant-tree-switcher.ant-tree-switcher_close, span.ant-tree-switcher.ant-tree-switcher_open":
      {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
  };
});

export default useStyles;
