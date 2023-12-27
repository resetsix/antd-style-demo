import { createStyles } from "antd-style";

const useStyles = createStyles(({ token }) => {
  return {
    ".ant-descriptions": {
      ".ant-descriptions-bordered, .ant-descriptions-row": {
        borderBottom: "1px solid #06070A",
        ".ant-descriptions-item-content": {
          borderRight: "1px solid #06070A",
        },
        ".ant-descriptions-item-label": {
          borderRight: "1px solid #06070A",
        },
      },
      ".ant-descriptions-item-content": { backgroundColor: token.blue2 },
    },
  };
});

export default useStyles;
