import { ThemeProvider } from "antd-style";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);

// 在此处定义 自定义token的选项
export interface NewTokenProps {
	// ==== Basic Color ====
	primaryColor?: string;
	hoverColor?: string;
	clickColor?: string;
	loadingColor?: string;
	bg1Color?: string;

	// ==== Font Size ====
	font12?: string;
	font14?: string;
	font16?: string;
	font20?: string;
	lineHeight?: string;

	// Specific to default theme
	// ==== Basic Color ====
	deriveColor?: string;

	// ==== DTinsight navy ====
	black_title?: string;
	black_Desc?: string;
	black_pageMsg?: string;
	black_msg?: string;
	black_border?: string;
	black_readonly?: string;
	black_titleBg?: string;
	black_navBg?: string;
	white?: string;
	grey_border?: string;

	// ==== Functional Color ====
	blue?: string;
	green?: string;
	red?: string;
	yellow?: string;
	purple?: string;

	// ==== Other Color ====
	blue1?: string;
	blue2?: string;
	blue3?: string;
	green1?: string;
	green2?: string;
	green3?: string;
	yellow1?: string;
	yellow2?: string;
	yellow3?: string;
	red1?: string;
	red2?: string;
	purple1?: string;
	purple2?: string;
	purple3?: string;
	cyan1?: string;
	cyan2?: string;
	cyan3?: string;
	pink1?: string;
	pink2?: string;
	pink3?: string;

	// ==== Multicolor Scenario ====
	other1?: string;
	other2?: string;
	other3?: string;
	other4?: string;
	other5?: string;
	other6?: string;
	other7?: string;
	other8?: string;
	other9?: string;
	other10?: string;

	// Specific to dark theme
	// ==== Basic Color ====
	deriveColor_dark?: string;

	// ==== No color ====
	whiteF2?: string;
	whiteBF?: string;
	white8C?: string;
	white6?: string;
	white4D?: string;

	blue4?: string;

	// ==== Auxiliary color ====
	red_dark?: string;
	yellow_dark?: string;
	green_dark?: string;

	// ==== Chart Color 1 ====
	color01_dark?: string;
	color02_dark?: string;
	color03_dark?: string;
	color04_dark?: string;
	color05_dark?: string;
	color06_dark?: string;

	// ==== Chart Color 2 ====
	color11_dark?: string;
	color12_dark?: string;
	color13_dark?: string;
	color14_dark?: string;
	color15_dark?: string;
	color16_dark?: string;

	background_color_light?: string;
	background_color_base?: string;

	// Often used in projects
	minWidth?: string;
}

// 默认值
export const customToken = {
	// Shared variables
	// ==== Basic Color ====
	primaryColor: "#1D78FF", // Main color
	hoverColor: "#0A67F2", // Button hover
	clickColor: "#005CE6", // Button click
	loadingColor: "#BBD6FF", // background color when primary button is loading
	bg1Color: "#BBD6FF", // Used for switching small module backgrounds and prompting backgrounds

	// ==== Font Size ====
	font12: "12px", // Main font size - used for list content, dropdowns, selectors, input boxes, modals, etc.
	font14: "14px", // Font size of the left menu bar, main title, and modal title
	font16: "16px", // Font size of top navigation and some emphasized titles
	font20: "20px", // Seldom used, quoted with some large titles

	// Specific to default theme
	// ==== Basic Color ====
	deriveColor: "#DDEBFF", // Derived color - selected background color of lists, background color of some tabs

	// ==== DTinsight navy ====
	black_title: "#3D446E", // Title - Main text color
	black_Desc: "#64698B", // Used for the note text color of the form title
	black_pageMsg: "#8B8FA8", // Used for page prompt text color
	black_msg: "#B1B4C5", // Used for the prompt text color in the text box
	black_border: "#D8DAE2", // Used for form border color and chart line color
	black_readonly: "#EBECF0", // Used for dividing line color and disabled button status color
	black_titleBg: "#F5F5F8", // Used for module title background color
	black_navBg: "#F9F9FA", // Used for the base color of secondary navigation
	white: "#FFF", // Text color of primary button

	// ==== Functional Color ====
	blue: "#1D78FF", // Color for running status
	green: "#11D7B2", // Color for success status
	red: "#F96C5B", // Color for failure status, validation error message text, must-fill icon
	yellow: "#FBB310", // Color for offline status, warning prompt
	purple: "#AC9DFF", // Color for cancellation, freeze status prompt

	// ==== Other Color ====
	// Blue
	blue1: "#DDEBFF",
	blue2: "#5D9EFF",
	blue3: "#1D78FF",
	// Green
	green1: "#E7FBF7",
	green2: "#50E2C6",
	green3: "#11D7B2",
	// Yellow
	yellow1: "#FFF4D9",
	yellow2: "#FFC749",
	yellow3: "#FBB310",
	// Red
	red1: "#FDE9E7",
	red2: "#FFA297",
	// Purple
	purple1: "#EAE6FF",
	purple2: "#BDB1FF",
	purple3: "#AC9DFF",
	// Cyan
	cyan1: "#E7F8FA",
	cyan2: "#88E1EB",
	cyan3: "#2CCCDF",
	// Pink
	pink1: "#FFE6EF",
	pink2: "#FFB4CE",
	pink3: "#FF82AE",

	// ==== Multi-color scene: Ring, tree chart ====
	other1: "#AC9DFF",
	other2: "#888DFF",
	other3: "#6A87FF",
	other4: "#4B81FF",
	other5: "#2D7BFF",
	other6: "#1D78FF",
	other7: "#1A94E9",
	other8: "#17A6D9",
	other9: "#15BACA",
	other10: "#11D7B2",

	// Specific to dark theme
	// ==== Basic Color ====
	deriveColor_dark: "#292D42", // Dark theme: List selection bottom color, some tab selection bottom color, disable button bottom color

	// ==== Colorless ====
	whiteF2: "#F2F2F2", // The brightest white, used for large titles, modal titles, selected tab text and icons and other high-light colors
	whiteBF: "#BFBFBF", // Most commonly used main text color, used for list text, form text, tabs not selected, etc.
	white8C: "#8C8C8C", // Auxiliary gray, used for the color of some icon buttons, secondary text color
	white6: "#666", // Secondary gray, mainly used for the color of prompt text in forms and other secondary information
	white4D: "#4D4D4D", // Gray, not clickable for controls, etc.

	// ==== Blue Gray ====
	// blue1: "#0E0E17", // Darker background color, used for IDE, unselected bottom color of left and right sidebars, chart bottom color, etc.
	// blue2: "#1A1C29", // Lighter background color, used for task list module bottom color, expanded bottom color of left and right sidebars, list bottom color, form bottom color, etc.
	// blue3: "#272A40", // Light color dividing line color, form outline color, modal header dividing line color, etc.
	blue4: "#090A0F", // Deep color dividing line color

	// ==== Auxiliary color ====
	red_dark: "#E25F5D", // Color for error reminder text, button color, running failure indication, etc.
	yellow_dark: "#C28C3A", // Color for warning prompt icon, to-be-run status color, etc.
	green_dark: "#00A755", // Color for successful icon, successful running/publishing status, etc.

	// ==== Chart Color 1 ====
	color01_dark: "#5F7EE6",
	color02_dark: "#3092ED",
	color03_dark: "#00B9D9",
	color04_dark: "#1ABD9A",
	color05_dark: "#1DB86C",
	color06_dark: "#85C963",

	// ==== Chart Color 2 ====
	color11_dark: "#AE61E0",
	color12_dark: "#6469D6",
	color13_dark: "#1C9FD9",
	color14_dark: "#17C992",
	color15_dark: "#DE9335",
	color16_dark: "#E86651",

	// Often used in projects
	minWidth: "1260px",
};

// 通过给 antd-style 扩展 CustomToken 对象类型定义，可以为 useTheme 中增加相应的 token 对象
declare module "antd-style" {
	// eslint-disable-next-line @typescript-eslint/no-empty-interface
	export interface CustomToken extends NewTokenProps {}
}

root.render(
	<React.StrictMode>
		<ThemeProvider<NewTokenProps> customToken={customToken}>
			<App />
		</ThemeProvider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
