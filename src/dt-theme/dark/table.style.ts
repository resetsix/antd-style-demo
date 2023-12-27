import { createStyles } from "antd-style";

const useStyles = createStyles(({ token }) => {
  return {
    ".ant-table": {
      color: token.black_title,
    },
    ".ant-table-thead": {
      background: "#222433",
    },
    ".ant-table-tbody > tr > td": {
      borderBottom: `1px solid ${token.blue4}`,
      color: token.whiteBF,
    },
    ".ant-table-expanded-row": {
      background: token.blue3,
      color: token.whiteBF,
    },
    ".ant-table-thead > tr > th .ant-table-header-column": {
      color: token.whiteBF,
    },
    ".ant-table-footer": {
      backgroundColor: "#1D1F2E",
      borderTop: "0",
      "&::before": { height: "0", background: token.blue3 },
    },
    ".ant-divider": {
      backgroundColor: "transparent",
    },
    ".ant-table-fixed-header > .ant-table-content > .ant-table-scroll > .ant-table-body, .ant-table-fixed-header > .ant-table-content > .ant-table-fixed-right > .ant-table-body-outer > .ant-table-body-inner > .ant-table-fixed, .ant-table-fixed-header > .ant-table-content > .ant-table-fixed-left > .ant-table-body-outer > .ant-table-body-inner > .ant-table-fixed":
      {
        backgroundColor: token.blue2,
      },
    ".ant-table-wrapper": {
      background: token.blue2,
      ".ant-spin-container": {
        "> .ant-table-pagination": {
          background: "#1D1F2E",
        },
      },
    },
    "dt-table-fixed-contain-footer": {
      ".ant-table-wrapper, &.ant-table-wrapper": {
        background: token.blue2,
        ".ant-spin-nested-loading": {
          ".ant-spin-container": {
            ".ant-table-fixed-header": {
              ".ant-table-content": {
                ".ant-table-scroll": {
                  ".ant-table-body": { backgroundColor: token.blue2 },
                },
                ".ant-table-placeholder": {
                  color: "#BFBFBF",
                  backgroundColor: token.blue2,
                },
              },
            },
            ".ant-table-footer": {
              backgroundColor: "#1D1F2E",
              borderTop: "0",
              "&::before": { height: "0", background: token.blue3 },
            },
          },
        },
      },
    },
    "ant-table-wrapper, .ant-table-wrapper": {
      border: "none",
      background: token.blue2,
      ".ant-spin-nested-loading": {
        ".ant-spin-container": {
          ".ant-table-fixed-header": {
            ".ant-table-content": {
              ".ant-table-scroll": {
                ".ant-table-body": {
                  backgroundColor: token.blue2,
                },
              },
              ".ant-table-placeholder": { backgroundColor: token.blue2 },
            },
          },
        },
      },
    },
    "dt-table-border": {
      border: `1px solid ${token.black_border}`,
    },
    ".ant-table-small > .ant-table-content .ant-table-placeholder, .ant-table-small > .ant-table-content .ant-table-row:last-child td":
      {
        borderBottom: `1px solid ${token.blue4}`,
      },
  };
});

export default useStyles;
