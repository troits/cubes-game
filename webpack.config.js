const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    plugins: [
        new CopyPlugin({
            patterns: [{ from: "dist/browser", to: "docs" }],
        }),
    ],
};
