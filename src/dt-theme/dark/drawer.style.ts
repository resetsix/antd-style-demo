import { createStyles } from "antd-style";

const useStyles = createStyles(({ token }) => {
  return {
    ".ant-drawer-body": {
      color: token.whiteBF,
    },
  };
});

export default useStyles;
