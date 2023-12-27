import { createStyles } from "antd-style";

const useStyles = createStyles(({ token }) => {
  return {
    ".ant-tree": {
      ".ant-tree-checkbox-inner": {
        backgroundColor: "#11121C",
        borderColor: "#363B59",
      },
      ".ant-tree-checkbox-checked .ant-tree-checkbox-inner": {
        backgroundColor: token.primaryColor,
        borderColor: token.primaryColor,
      },
    },
    ".ant-tree.ant-tree-show-line li span.ant-tree-switcher": {
      backgroundColor: "transparent",
    },
  };
});

export default useStyles;
