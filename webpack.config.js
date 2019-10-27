const path = require("path");

module.exports = {

   entry: "./src/index.js",

   output: {
      path: path.resolve(__dirname,"dist"),
      filename: "index.js",
   },

   devtool: "source-map",
   
   devServer: {
      contentBase: path.join(__dirname,"dist"),
      publicPath: "",
      compress: true,
      port: 9000,
   },
}
