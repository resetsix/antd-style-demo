import { createStyles } from "antd-style";

const useStyles = createStyles(({ token }) => {
  return {
    ".ant-list": {
      ".ant-list-bordered, .ant-list-item .ant-list-split, .ant-list-item": {
        background: token.blue2,
        borderBottom: `1px solid ${token.blue4}`,
      },
      background: token.blue2,
    },
  };
});

export default useStyles;
