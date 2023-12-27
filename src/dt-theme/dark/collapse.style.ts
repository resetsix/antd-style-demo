import { createStyles } from "antd-style";

const useStyles = createStyles(({ token }) => {
  return {
    ".ant-collapse": {
      ".ant-collapse-item": {
        ".ant-collapse-header": {
          backgroundColor: "#242738",
        },
        ".ant-collapse-content": {
          backgroundColor: token.blue1,
          borderTop: "1px solid #2F334D",
        },
      },
    },
    "dt-collapse-light-bg": {
      ".ant-collapse, &.ant-collapse .ant-collapse-item, &.ant-collapse-item": {
        ".ant-collapse-header": {
          backgroundColor: "#2F334D",
        },
        ".ant-collapse-content": {
          backgroundColor: token.blue2,
          borderTop: "1px solid #2F334D",
        },
      },
    },
  };
});

export default useStyles;
