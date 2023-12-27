import { createStyles } from "antd-style";

const useStyles = createStyles(({ token }) => {
  return {
    ".ant-picker": {
      border: "1px solid #D8DAE2",
      borderRadius: "4px",
      fontSize: "12px",
      padding: "4px 11px",
      ".ant-picker-input > input": {
        fontSize: "12px",
        lineHeight: "calc(22 / 12)",
        color: token.black_title,
        "&::-webkit-input-placeholder": {
          color: "#B1B4C5",
        },
      },
    },
    ".ant-picker-small": {
      fontSize: "12px",
      padding: "2px 11px",
      ".ant-picker-input": {
        "& > input": {
          fontSize: "12px",
          lineHeight: "calc(18 / 12)",
        },
      },
    },
    ".ant-picker-focused": {
      borderColor: token.clickColor,
      boxShadow: "none",
    },
    ".ant-picker.dt-ant-datepicker-basic": {
      fontSize: "12px",
      borderRadius: "4px",
      "&:hover": { borderColor: token.primaryColor },
      "&:focus": { borderColor: token.clickColor, border: "none" },
      ".ant-picker-input > input": {
        fontSize: "12px",
        color: token.black_title,
      },
    },
    ".ant-picker.ant-picker-range": {
      ".ant-picker-active-bar": { background: token.clickColor },
    },
    ".ant-picker.ant-picker-disabled": {
      background: "#EBECF0",
      color: token.colorTextDisabled,
      borderColor: "#EBECF0",
      ".ant-picker-input > input": { color: token.colorTextDisabled },
    },
    ".ant-picker-dropdown": {
      ".ant-picker-panel-container": {
        boxShadow: "0 5px 22px 0 rgba(61, 68, 110, 0.2)",
      },
      ".ant-picker-cell-in-view": {
        background: "none",
        border: `solid 1px ${token.primaryColor}`,
      },
      ".ant-picker-header": { borderBottom: "solid 1px #EBECF0" },
      ".ant-picker-panel .ant-picker-footer": {
        borderTop: "solid 1px #EBECF0",
      },
      ".ant-picker-cell-range-hover-edge-end-near-range": {
        borderRight: `1px dashed ${token.primaryColor}`,
      },
      ".ant-picker-cell-range-hover-edge-start-near-range": {
        borderLeft: `1px dashed ${token.primaryColor}`,
      },
      ".ant-picker-cell-in-range": {
        borderTop: `1px dashed ${token.primaryColor}`,
        borderBottom: `1px dashed ${token.primaryColor}`,
      },
      ".ant-picker-cell-selected": {
        color: "inherit",
        "&::before": {
          borderBottomColor: "#8B8FA8",
        },
      },
      ".ant-picker-cell-range-end-single": { background: "#E8F1FF" },
      ".ant-picker-date-panel .ant-picker-cell-in-view.ant-picker-cell-in-range.ant-picker-cell-range-hover-end .ant-picker-cell-inner::after":
        { left: "0" },
      ".ant-picker-date-panel .ant-picker-cell-in-view.ant-picker-cell-in-range.ant-picker-cell-range-hover-start .ant-picker-cell-inner::after":
        { right: "0" },
      ".ant-picker-cell-in-view.ant-picker-cell-in-range::before": {
        background: "#E8F1FF",
      },
      ".ant-picker-cell-in-view.ant-picker-cell-selected .ant-picker-cell-inner, .ant-picker-cell-in-view.ant-picker-cell-range-start .ant-picker-cell-inner":
        { background: token.primaryColor },
      ".ant-picker-cell-in-view.ant-picker-cell-selected .ant-picker-cell-inner, .ant-picker-cell-in-view.ant-picker-cell-range-start .ant-picker-cell-inner, .ant-picker-cell-in-view.ant-picker-cell-range-end .ant-picker-cell-inner":
        { borderRadius: "2px", background: token.primaryColor },
      ".ant-picker-cell-disabled": {
        color: token.black_msg,
        "&::before": {
          background: token.black_readonly,
        },
      },
      ".ant-picker-cell-disabled.ant-picker-cell-today .ant-picker-cell-inner":
      {
        color: token.black_msg,
        "&::before": {
          borderBottom: `solid 2px ${token.black_pageMsg}`,
        },
      },
      ".ant-picker-cell": {
        ".ant-picker-cell-inner": {
          borderRadius: "2px",
          transition: "background 0.3s",
        },
      },
      ".ant-picker-cell-range-end.ant-picker-cell-today, .ant-picker-cell-range-start.ant-picker-cell-today":
      {
        ".ant-picker-cell-inner": {
          color: "#FFF",
        },
      },
      ".ant-picker-ok": {
        marginTop: "4px",
        ".ant-btn": {
          justifyContent: "center",
          width: "40px",
          height: "24px",
          lineHeight: "24px",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
        },
      },
      last: {
        background: "#E8F1FF",
        ".ant-picker-cell-inner": {
          color: token.black_title,
        },
        "&:last-child": {
          background: token.primaryColor,
          ".ant-picker-cell-inner": { color: token.white },
        },
      },
    },
  };
});

export default useStyles;
