import { createStyles } from "antd-style";

const useStyles = createStyles(({ token }) => {
  return {
    "dt-scrollbar-base": {
      "&::-webkit-scrollbar-thumb": { background: token.whiteBF },
    },
  };
});

export default useStyles;
