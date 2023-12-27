import { createStyles } from "antd-style";

const useStyles = createStyles(({ token }) => {
  return {
    "dt-card-light-bg": {
      ".ant-card, &.ant-card": { backgroundColor: token.blue1 },
    },
  };
});

export default useStyles;
