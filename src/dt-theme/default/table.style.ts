import { createStyles } from "antd-style";

const useStyles = createStyles(({ token }) => {
  return {
    ".ant-table": {
      color: token.black_title,
      table: { borderRadius: "0" },
      ".ant-table-cell": {
        ".ant-form-item": {
          marginBottom: "0",
        },
        ".ant-divider-vertical": {
          height: "12px",
          borderLeft: "1px solid #EBECF0",
        },
        ".ant-table-column-title": {
          lineHeight: "22px",
        },
      },
      ".ant-table-tbody": {
        "& > tr.ant-table-row:hover > td, & > tr > td.ant-table-cell-row-hover":
        {
          background: token.black_titleBg,
        },
      },
      "colgroup > col.ant-table-selection-col": { width: "16px" },
    },
    ".ant-table-thead": {
      background: "#FAFAFA",
      ".ant-table-column-sorter, .ant-table-filter-trigger": {
        color: token.black_msg,
      },
    },
    active: {
      color: token.primaryColor,
    },
    ".ant-table-column-sorter": {
      marginLeft: "7px",
      display: "flex",
    },
    ".ant-table-thead > tr > th": {
      height: "44px",
      boxSizing: "border-box",
      padding: "0 16px",
      borderBottom: `1px solid ${token.black_readonly}`,
      ":last-child": {
        position: "absolute",
        top: "50%",
        right: "0",
        width: "0",
        height: "1.6em",
        backgroundColor: token.black_titleBg,
        transform: "translateY(-50%)",
        transition: "background-color 0.3s",
        content: '""',
      },
    },
    "anticon-filter": {
      right: "unset",
      top: "-1.8px",
      background: "transparent",
    },
    "ant-table-column-sort": {
      background: "#E8F5FF",
    },
    "ant-table-selection-column": {
      padding: "0 8px 0 16px",
      textAlign: "left",
      lineHeight: "20px",
      "& + th": { padding: "0 8px 0 0", lineHeight: "43px" },
      "& > .ant-radio-wrapper": { lineHeight: "20px" },
      "& + td": { padding: "0 8px 0 0", lineHeight: "20px" },
    },
    ".ant-table-tbody > tr": {
      height: "44px",
      boxSizing: "border-box",
      "& > td": {
        minHeight: "44px",
        boxSizing: "border-box",
        padding: "6px 16px 5px",
        borderBottom: `1px solid ${token.black_readonly}`,
        "&:first-child": {
          paddingLeft: "16px",
        },
        "&:last-child": {
          paddingRight: "16px",
        },
      },
    },
    ".ant-table-tbody > .ant-table-placeholder > .ant-table-cell": {
      borderBottom: "0",
    },
    ".ant-table-tbody > .ant-table-expanded-row > .ant-table-cell": {
      padding: "0 0 0 44px",
      backgroundColor: token.black_navBg,
      "&:hover": { backgroundColor: token.black_navBg },
      ".ant-table-wrapper": {
        background: "none",
        borderBottom: "0",
        borderLeft: `1px solid ${token.grey_border}`,
        ".ant-table": {
          margin: "0",
        },
      },
    },
    ".ant-table-footer": {
      background: token.white,
      padding: "6px 16px",
      height: "44px",
      display: "flex",
      marginTop: "-1px",
      zIndex: "11",
      alignItems: "center",
      position: "relative",
      "&::before": {
        height: "1px",
        background: token.grey_border,
        position: "absolute",
        top: "-1px",
        left: "0",
        width: "100%",
        content: '""',
      },
      "&:empty": { display: "none" },
    },
    ".ant-divider": {
      backgroundColor: "transparent",
    },
    ".ant-table-wrapper": {
      background: token.white,
      ".ant-spin-container": {
        ">.ant-table-pagination": {
          borderTop: "1px solid #E8E8E8",
          width: "100%",
          margin: "-1px 0 0",
          padding: "0 16px",
          height: "44px",
          lineHeight: "44px",
          textAlign: "right",
          position: "relative",
          zIndex: "10",
          alignItems: "center",
        },
      },
    },
    "dt-table-fixed-contain-footer": {
      ".ant-table-wrapper, &.ant-table-wrapper": {
        background: token.white,
        height: "100%",
        padding: "0",
        boxShadow: "none",
        ".ant-spin-nested-loading": {
          height: "100%",
          ".ant-spin-container": {
            height: "100%",
            ".ant-table-fixed-header": {
              display: "flex",
              flexDirection: "column",
              height: "100%",
              ".ant-table-container": {
                flex: "1",
                display: "flex",
                flexDirection: "column",
                overflowY: "auto",
                ".ant-table-body": {
                  flex: "1",
                  ".ant-table-placeholder": { color: "#BFBFBF" },
                },
              },
              ".ant-table-content": {
                height: "100%",
                ".ant-table-scroll": {
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  ".ant-table-body": { flex: "1" },
                },
                ".ant-table-fixed-left, .ant-table-fixed-right": {
                  zIndex: "10",
                  height: "100%",
                  ".ant-table-body-outer": {
                    height: "calc(100% - 44px - 56px + 1px)",
                  },
                },
                ".ant-table-placeholder": {
                  position: "absolute",
                  top: "45px",
                  width: "100%",
                  textAlign: "center",
                  border: "none",
                },
              },
            },
            ".ant-table-footer": {
              marginTop: "-1px",
              zIndex: "11",
              position: "relative",
              "&::before": {
                position: "absolute",
                top: "-1px",
                left: "0",
                width: "100%",
                content: '""',
              },
              ".ant-pagination": { position: "absolute", right: "16px" },
            },
          },
        },
      },
    },
    pagination_total: {
      color: "#3F87FF",
    },
    "ant-table-wrapper, .ant-table-wrapper": {
      background: token.white,
      border: "none",
      padding: "0",
      boxShadow: "none",
      ".ant-spin-nested-loading": {
        height: "100%",
        ".ant-spin-container": {
          height: "100%",
          ".ant-table-fixed-header": { height: "100%" },
        },
      },
    },
    "dt-table-border": {
      border: `1px solid ${token.black_readonly}`,
    },
    ".ant-table.ant-table-small": {
      ".ant-table-thead > tr, .ant-table-tbody > tr": { height: "36px" },
      ".ant-table-title, .ant-table-footer, .ant-table-thead > tr > th, .ant-table-tbody > tr > td, tfoot > tr > th, tfoot > tr > td":
      {
        padding: "2px 16px 1px",
        minHeight: "36px",
        height: "auto",
        lineHeight: "20px",
        boxSizing: "border-box",
      },
    },
    ".ant-table-small > .ant-table-content .ant-table-placeholder, .ant-table-small > .ant-table-content .ant-table-row:last-child td":
    {
      borderBottom: "1px solid #E8E8E8",
    },
    ".ant-table-small": {
      "& > .ant-table-content > .ant-table-body": { margin: "0" },
      "& > .ant-table-content > .ant-table-header > table > .ant-table-thead > tr > th, & > .ant-table-content > .ant-table-body > table > .ant-table-thead > tr > th, & > .ant-table-content > .ant-table-scroll > .ant-table-header > table > .ant-table-thead > tr > th, & > .ant-table-content > .ant-table-scroll > .ant-table-body > table > .ant-table-thead > tr > th, & > .ant-table-content > .ant-table-fixed-left > .ant-table-header > table > .ant-table-thead > tr > th, & > .ant-table-content > .ant-table-fixed-right > .ant-table-header > table > .ant-table-thead > tr > th, & > .ant-table-content > .ant-table-fixed-left > .ant-table-body-outer > .ant-table-body-inner > table > .ant-table-thead > tr > th, & > .ant-table-content > .ant-table-fixed-right > .ant-table-body-outer > .ant-table-body-inner > table > .ant-table-thead > tr > th":
      {
        borderBottom: "1px solid #E8E8E8",
        height: "36px",
        boxSizing: "border-box",
        "&:first-child": {
          paddingLeft: "16px",
        },
        "&:last-child": {
          paddingRight: "16px",
        },
      },
      "& > .ant-table-content > .ant-table-header > table > .ant-table-tbody > tr > td, & > .ant-table-content > .ant-table-body > table > .ant-table-tbody > tr > td, & > .ant-table-content > .ant-table-scroll > .ant-table-header > table > .ant-table-tbody > tr > td, & > .ant-table-content > .ant-table-scroll > .ant-table-body > table > .ant-table-tbody > tr > td, & > .ant-table-content > .ant-table-fixed-left > .ant-table-header > table > .ant-table-tbody > tr > td, & > .ant-table-content > .ant-table-fixed-right > .ant-table-header > table > .ant-table-tbody > tr > td, & > .ant-table-content > .ant-table-fixed-left > .ant-table-body-outer > .ant-table-body-inner > table > .ant-table-tbody > tr > td, & > .ant-table-content > .ant-table-fixed-right > .ant-table-body-outer > .ant-table-body-inner > table > .ant-table-tbody > tr > td":
      {
        "&:first-child": {
          paddingLeft: "16px",
        },
        "&:last-child": {
          paddingRight: "16px",
        },
        padding: "0 16px",
      },
    },
    ".ant-table-row-expand-icon": {
      border: `solid 1px ${token.blue}`,
      "&::before": { color: token.blue },
      "&::after": { color: token.blue },
      "&:hover, &:focus, &:active": { borderColor: token.blue },
    },
    ".ant-table-filter-dropdown": {
      ".ant-dropdown-menu-item": {
        height: "32px",
        ".ant-dropdown-menu-title-content": {
          display: "flex",
          alignItems: "center",
          ".ant-radio-wrapper": { paddingTop: "0" },
        },
      },
    },
    ".ant-table-filter-dropdown-btns": {
      borderTop: "none",
      padding: "8px",
      justifyContent: "end",
      ".ant-btn-link.ant-btn-sm": {
        marginRight: "8px",
        color: token.black_title,
        border: `1px solid ${token.black_border}`,
        padding: "0 8px",
        height: "24px",
        "&:hover, &:focus": {
          border: `1px solid ${token.hoverColor}`,
          color: token.hoverColor,
          padding: "0 8px",
          height: "24px",
        },
        "&:active": {
          color: token.clickColor,
          height: "24px",
          padding: "0 8px",
          border: `1px solid ${token.clickColor}`,
        },
        "&:disabled": {
          padding: "0 8px",
          height: "24px",
          color: token.black_msg,
          backgroundColor: token.black_readonly,
          border: `1px solid ${token.black_readonly}`,
          "&:hover, &:focus": {
            padding: "0 8px",
            height: "24px",
            color: token.black_msg,
            backgroundColor: token.black_readonly,
            border: `1px solid ${token.black_readonly}`,
          },
        },
      },
    },
    ".ant-dropdown-menu": {
      paddingTop: "8px",
    },
    ".ant-pagination.mini": {
      height: "32px",
      lineHeight: "32px",
    },
    ".ant-table.ant-table-middle .ant-table-tbody > tr > td": {
      paddingTop: "0",
      paddingBottom: "0",
    },
    "react-resizable": {
      position: "relative",
      backgroundClip: "padding-box",
    },
    "react-resizable-handle": {
      position: "absolute",
      right: "-5px",
      bottom: "0",
      zIndex: "1",
      width: "10px",
      height: "100%",
      cursor: "col-resize",
    },
    ".ant-table-container table > thead > tr:first-child th:first-child": {
      borderTopLeftRadius: "0",
    },
    // "react-resizable": {
    //   borderTopLeftRadius: "0",
    // },
    ".ant-table-container table > thead > tr:first-child th:last-child": {
      borderTopRightRadius: "0",
    },
    ".ant-spin-nested-loading > .ant-spin-container > .ant-table-empty.ant-table-scroll-horizontal > .ant-table-container > .ant-table-body":
    {
      table: {
        height: "100%",
        ".ant-table-tbody > .ant-table-placeholder": {
          height: "100%",
        },
      },
    },
    ".ant-table-container": {
      borderRadius: "0",
    },
    "dtc-empty": {
      margin: "32px 0",
    },
    ".ant-table-column-sorters .ant-table-column-title, .ant-table-filter-column .ant-table-column-title":
    {
      flex: "none",
    },
    ".ant-table-column-sorters, .ant-table-filter-column": {
      justifyContent: "flex-start",
    },
    "dt-table-cell-right": {
      ".ant-table-column-sorters .ant-table-column-title, .ant-table-filter-column .ant-table-column-title":
        { flex: "1" },
    },
    ".ant-table-ping-right .ant-table-cell-fix-right-first::after, .ant-table-ping-left .ant-table-cell-fix-left-first::after":
    {
      boxShadow: "inset -10px 0 8px -8px rgba(29, 120, 255, 0.1)",
    },
    ".ant-table-ping-right .ant-table-cell-fix-right-last::after, .ant-table-ping-left .ant-table-cell-fix-left-last::after":
    {
      boxShadow: "inset 10px 0 8px -8px rgba(29, 120, 255, 0.1)",
    },
    ".ant-table-has-fix-left": {
      boxShadow: "inset 10px 0 10px -2px rgb(235, 236, 240)",
    },
    ".ant-table-has-fix-right": {
      boxShadow: "inset -10px 0 10px -2px rgb(235, 236, 240)",
    },
    "dt-table-top-border": {
      borderTop: `1px solid ${token.black_readonly}`,
    },
    "dt-pagination-small": {
      ".ant-table-pagination.ant-pagination": {
        height: "36px",
        lineHeight: "36px",
      },
    },
    "dt-table-last-row-noborder": {
      ".ant-table-tbody": {
        "> tr:last-child": {
          "> td": { borderBottomColor: "rgba(0, 0, 0, 0)" },
        },
      },
      ".ant-table-placeholder": { borderBottomColor: "rgba(0, 0, 0, 0)" },
    },
    "dt-table-scrollbar": {
      ".ant-table-body, .ant-table-body-inner, .ant-table-header": {
        "&::-webkit-scrollbar": {
          width: "15px",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "#BFBFBF",
          borderRadius: "10px",
        },
        "&::-webkit-scrollbar-track": {
          background: "transparent",
          borderRadius: "2px",
        },
      },
      ".ant-table-header": {
        "&::-webkit-scrollbar-thumb": {
          background: "transparent",
        },
      },
    },
    "dt-table-fixed-overflowx-auto": {
      ".ant-table-body-inner": { overflowX: "auto" },
    },
    ".ant-table-column-sorter-up + .ant-table-column-sorter-down": {
      marginTop: "-0.5em",
    },
    "dt-row-selected": {
      "& > td": { backgroundColor: token.black_titleBg },
    },
  };
});

export default useStyles;
