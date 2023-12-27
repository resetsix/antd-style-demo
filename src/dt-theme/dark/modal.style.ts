import { createStyles } from "antd-style";

const useStyles = createStyles(({ token }) => {
  return {
    ".ant-modal-title": {
      fontWeight: "500",
    },
    ".ant-modal-content": {
      backgroundColor: token.blue2,
      border: `1px solid ${token.blue3}`,
    },
    ".ant-modal-header": {
      borderBottomColor: token.blue3,
    },
    ".ant-modal-footer": {
      borderTop: "0",
    },
  };
});

export default useStyles;
