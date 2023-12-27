import { createStyles } from "antd-style";

const useStyles = createStyles(({ token }) => {
  return {
    ".ant-collapse": {
      border: "1px solid #EBECF0",
      borderRadius: "0",
      ".ant-collapse-header": { fontSize: "14px", fontWeight: "500" },
      ".ant-collapse-item": {
        borderBottom: `1px solid ${token.black_readonly}`,
        ".ant-collapse-header": {
          alignItems: "center",
          padding: "0 16px",
          boxSizing: "border-box",
          height: "40px",
          lineHeight: "40px",
          fontSize: "14px",
          backgroundColor: "#FFF",
          color: token.black_title,
          ".ant-collapse-arrow": {
            marginRight: "16px",
            fontSize: "16px",
            verticalAlign: "-4px",
          },
        },
        ".ant-collapse-content": {
          borderTop: `1px solid ${token.black_readonly}`,
          backgroundColor: token.black_navBg,
          minHeight: "40px",
          boxSizing: "border-box",
          lineHeight: "20px",
          ".ant-collapse-content-box": {
            padding: "0 16px",
            minHeight: "40px",
            display: "table",
            width: "100%",
            p: {
              padding: "10px 0",
              margin: "0",
            },
            "& > .ant-collapse": {
              marginLeft: "24px",
              border: "none",
              borderLeft: `1px solid ${token.black_readonly}`,
              backgroundColor: token.black_navBg,
              ".ant-collapse-header": {
                backgroundColor: token.black_navBg,
                borderBottom: "none",
              },
              ".ant-collapse-item": {
                ".ant-collapse-content": {
                  backgroundColor: "#FFF",
                  borderBottom: "0",
                },
              },
            },
          },
        },
      },
    },
    ".ant-collapse-ghost": {
      borderColor: "transparent",
      ".ant-collapse-item": {
        borderColor: "transparent",
        ".ant-collapse-content": {
          borderColor: "transparent",
          backgroundColor: "transparent",
          ".ant-collapse-content-box": {
            "& > .ant-collapse": {
              borderColor: "transparent",
              backgroundColor: "transparent",
              ".ant-collapse-header": { backgroundColor: "transparent" },
            },
          },
        },
      },
    },
    ".ant-collapse > .ant-collapse-item:last-child, .ant-collapse > .ant-collapse-item:last-child > .ant-collapse-header":
      {
        borderRadius: "0",
        borderBottom: "0",
      },
  };
});

export default useStyles;
