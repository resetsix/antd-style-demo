const webpack = require("webpack");

module.exports = {
	webpack: {
		plugins: [
			new webpack.ProvidePlugin({
				Buffer: ["buffer", "Buffer"],
			}),
			new webpack.ProvidePlugin({
				process: "process/browser",
			}),
			new webpack.ProvidePlugin({
				process: "process",
			}),
		],
		configure: (webpackConfig, { env, paths }) => {
			webpackConfig.resolve.fallback = {
				...webpackConfig.resolve.fallback,
				stream: require.resolve("stream-browserify"),
				buffer: require.resolve("buffer/"),
				process: require.resolve("process/browser"),
			};
			return webpackConfig;
		},
	},
};
