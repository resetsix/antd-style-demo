import { createStyles } from "antd-style";

const useStyles = createStyles(({ token }) => {
  return {
    "*": {
      margin: "0",
      padding: "0",
      boxSizing: "border-box",
    },
    "body,html": {
      margin: "0",
      height: "100%",
    },
    body: {
      backgroundColor: token.white,
    },
    "ul,li": {
      listStyle: "none",
    },
    root: {
      height: "100%",
    },
  };
});

export default useStyles;
