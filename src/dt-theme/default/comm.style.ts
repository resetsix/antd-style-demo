import { createStyles } from "antd-style";

const useStyles = createStyles(({ token }) => {
  return {
    "dt-scrollbar-base": {
      "&::-webkit-scrollbar": { width: "15px" },
      "&::-webkit-scrollbar-thumb": {
        background: token.black_navBg,
        borderRadius: "10px",
      },
      "&::-webkit-scrollbar-track": {
        background: "transparent",
        borderRadius: "2px",
      },
    },
  };
});

export default useStyles;
