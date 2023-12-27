import { createStyles } from "antd-style";

const useStyles = createStyles(({ token }) => {
  return {
    ".ant-checkbox-wrapper, .ant-checkbox": {
      "&:hover .ant-checkbox-inner": { borderColor: token.hoverColor },
    },
    ".ant-checkbox-wrapper": {
      lineHeight: token.lineHeight,
      ".ant-checkbox": {
        top: "0.32em",
        ".ant-checkbox-inner": {
          borderRadius: "2px",
          width: "16px",
          height: "16px",
        },
        "& + span": {
          lineHeight: "20px",
        },
      },
    },
    ".ant-checkbox-input:focus + .ant-checkbox-inner": {
      borderColor: token.primaryColor,
    },
    ".ant-checkbox-group": {
      "& > .ant-checkbox-wrapper": { marginLeft: "0", marginRight: "16px" },
    },
  };
});

export default useStyles;
